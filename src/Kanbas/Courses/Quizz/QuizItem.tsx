// QuizItem.tsx

import { BsGripVertical, BsCheck2Circle, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { useState } from "react";

interface QuizItemProps {
  quiz: any;
  isFaculty: boolean;
}

export default function QuizItem({ quiz, isFaculty }: QuizItemProps) {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [showMenu, setShowMenu] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const toggleMenu = (event: React.MouseEvent) => {
    const { bottom, left } = event.currentTarget.getBoundingClientRect();
    setMenuPosition({ top: bottom, left: left });
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_QUIZ", payload: quiz._id });
  };

  const handlePublishToggle = () => {
    setIsPublished(!isPublished);
  };

  const handleCopy = () => {
    console.log("Copy Quiz to another course");
  };

  const quizStatus =
    new Date() < new Date(quiz.availableDate)
      ? `Not available until ${quiz.availableDate}`
      : new Date() <= new Date(quiz.dueDate)
      ? "Available"
      : "Closed";

  return (
    <li className="wd-quiz-item list-group-item p-3 ps-1 d-flex align-items-center">
      <BsGripVertical className="me-2 fs-3" />
      {isFaculty && <FaRegEdit className="me-4 text-success fs-5" />}
      <div className="flex-grow-1">
        <a
          className="fw-bold text-dark text-decoration-none"
          href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
        >
          {quiz.title}
        </a>
        <div>
          <span className="d-block">
            <span className="me-2">Status:</span>
            <span className="text-danger me-2">{quizStatus}</span>
            <span className="me-2">|</span>
            <strong className="me-2">Due</strong>
            <span className="me-2">
              {quiz.dueDate ? quiz.dueDate : "N/A"} at 11:59pm
            </span>
            <span className="me-2">|</span>
            <span className="me-2">{quiz.points ?? 0} pts</span>
            <span className="me-2">|</span>
            <span className="me-2">{quiz.numberOfQuestions} questions</span>
          </span>
          {currentUser?.role === "STUDENT" && quiz.score != null && (
            <span className="d-block mt-1">
              <strong>Last Score:</strong> {quiz.score} pts
            </span>
          )}
        </div>
      </div>

      {/* Checkmark and Settings Icons */}
      <div className="d-flex align-items-center position-relative">
        <BsCheck2Circle className="text-success fs-4 me-3" title="Completed" />
        <BsThreeDotsVertical
          className="fs-5"
          title="Settings"
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        />
      </div>

      {showMenu && (
        <QuizContextMenu
          position={menuPosition}
          onClose={() => setShowMenu(false)}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPublishToggle={handlePublishToggle}
          isPublished={isPublished}
          onCopy={handleCopy}
        />
      )}
    </li>
  );
}

// QuizContextMenu component using React Portal
function QuizContextMenu({ position, onClose, onEdit, onDelete, onPublishToggle, isPublished, onCopy }: {
    position: { top: number, left: number },
    onClose: () => void,
    onEdit: () => void,
    onDelete: () => void,
    onPublishToggle: () => void,
    isPublished: boolean,
    onCopy: () => void
}) {
  return ReactDOM.createPortal(
    <div
      className="quiz-context-menu position-fixed bg-white border shadow p-2 rounded"
      style={{ top: position.top, left: position.left - 50, zIndex: 1000 }}
      onClick={(e) => e.stopPropagation()} // Prevents click events from closing the menu
    >
      <ul className="list-unstyled mb-0">
        <li className="p-2" onClick={() => { onEdit(); onClose(); }}>Edit</li>
        <li className="p-2" onClick={() => { onDelete(); onClose(); }}>Delete</li>
        <li className="p-2" onClick={() => { onPublishToggle(); onClose(); }}>
          {isPublished ? "Unpublish" : "Publish"}
        </li>
        <li className="p-2" onClick={() => { onCopy(); onClose(); }}>Copy</li>
      </ul>
    </div>,
    document.body // Renders the menu at the root level
  );
}
