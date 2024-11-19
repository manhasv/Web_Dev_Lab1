// Quizz.tsx

import { BsGripVertical, BsPlus, BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import QuizItem from "./QuizItem"; // Import the QuizItem component

export default function Quizz() {
  const { cid } = useParams();
  const navigate = useNavigate();

  const quizzes = useSelector((state: any) => state.quizzesReducer?.quizzes ?? []);
  const filteredQuizzes = quizzes.filter((quiz: any) => quiz.course === cid);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-quizzes">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white">
            <BsSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Quiz"
            style={{ boxShadow: "none" }}
          />
        </div>
        <div className="d-inline-flex">
          {isFaculty && (
            <button
              className="btn btn-danger text-white"
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/New`)}
            >
              <BsPlus className="me-1" /> Quiz
            </button>
          )}
        </div>
      </div>

      <ul className="mt-2 list-group rounded-0 w-100">
        <li className="wd-quizzes list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-0 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-inline">
              <BsGripVertical className="me-2 fs-3" />
              <strong>Assignment Quizzes</strong>
            </div>
          </div>
          <ul className="wd-quizzes-list list-group rounded-0">
            {filteredQuizzes.map((quiz: any) => (
              <QuizItem key={quiz._id} quiz={quiz} isFaculty={isFaculty} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
