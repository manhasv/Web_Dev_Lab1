// QuizDetails.tsx

import React from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export default function QuizDetails() {
  const { qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const quiz = useSelector((state: any) =>
    state.quizzesReducer.quizzes.find((q: any) => q._id === qid)
  );

  const isFaculty = currentUser?.role === "FACULTY";

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/Preview`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{quiz.title}</h2>

      {/* Summary of Quiz Properties */}
      <div className="border rounded p-4 mb-4 bg-light">
        {isFaculty ? (
          <>
            <div className="row mb-2">
              <div className="col-md-6"><strong>Quiz Type:</strong> {quiz.type || "Graded Quiz"}</div>
              <div className="col-md-6"><strong>Points:</strong> {quiz.points || 0}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6"><strong>Assignment Group:</strong> {quiz.assignmentGroup || "Quizzes"}</div>
              <div className="col-md-6"><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6"><strong>Time Limit:</strong> {quiz.timeLimit || "20 Minutes"}</div>
              <div className="col-md-6"><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? "Yes" : "No"}</div>
            </div>
            {quiz.multipleAttempts && (
              <div className="row mb-2">
                <div className="col-md-6"><strong>How Many Attempts:</strong> {quiz.attempts || 1}</div>
              </div>
            )}
            <div className="row mb-2">
              <div className="col-md-6"><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers ? "Yes" : "No"}</div>
              <div className="col-md-6"><strong>Access Code:</strong> {quiz.accessCode || "None"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6"><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
              <div className="col-md-6"><strong>Webcam Required:</strong> {quiz.webcamRequired ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6"><strong>Lock Questions After Answering:</strong> {quiz.lockQuestions ? "Yes" : "No"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6"><strong>Due Date:</strong> {quiz.dueDate || "N/A"}</div>
              <div className="col-md-6"><strong>Available Date:</strong> {quiz.availableDate || "N/A"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6"><strong>Until Date:</strong> {quiz.untilDate || "N/A"}</div>
            </div>

            {/* Preview Button */}
            <div className="mt-4">
              <button 
                className="btn btn-primary"
                onClick={handlePreview}
              >
                Preview
              </button>
            </div>
          </>
        ) : (
          // Student View: Only Show "Start Quiz" Button
          <div className="mt-4">
            <button 
              className="btn btn-success"
              onClick={() => navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/Start`)}
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
