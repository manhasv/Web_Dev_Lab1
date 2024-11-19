// QuizDetails.tsx

import React from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function QuizDetails() {
  const { qid } = useParams();
  const navigate = useNavigate();
  const quiz = useSelector((state: any) =>
    state.quizzesReducer.quizzes.find((q: any) => q._id === qid)
  );

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/Preview`);
  };

  const handleEdit = () => {
    navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/Edit`);
  };

  return (
    <div className="container mt-4 text-center">
      {/* Centered Buttons and Divider */}
      <div className="d-flex justify-content-center mb-2">
        <button 
          className="btn btn-primary me-2"
          onClick={handlePreview}
        >
          Preview
        </button>
        <button 
          className="btn btn-secondary"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <hr /> {/* Divider line */}

      {/* Title below the divider */}
      <h2 className="quiz-title text-start">{quiz.title}</h2>

      {/* Single-column, aligned Quiz Details */}
      <div className="quiz-details mt-4 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Quiz Type:</strong></div>
          <div className="col-8 text-start">{quiz.type || "Graded Quiz"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Points:</strong></div>
          <div className="col-8 text-start">{quiz.points || 0}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Assignment Group:</strong></div>
          <div className="col-8 text-start">{quiz.assignmentGroup || "Quizzes"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Shuffle Answers:</strong></div>
          <div className="col-8 text-start">{quiz.shuffleAnswers ? "Yes" : "No"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Time Limit:</strong></div>
          <div className="col-8 text-start">{quiz.timeLimit || "20 Minutes"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Multiple Attempts:</strong></div>
          <div className="col-8 text-start">{quiz.multipleAttempts ? "Yes" : "No"}</div>
        </div>
        {quiz.multipleAttempts && (
          <div className="row mb-3">
            <div className="col-4 text-end"><strong>How Many Attempts:</strong></div>
            <div className="col-8 text-start">{quiz.attempts || 1}</div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Show Correct Answers:</strong></div>
          <div className="col-8 text-start">{quiz.showCorrectAnswers ? "Yes" : "No"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Access Code:</strong></div>
          <div className="col-8 text-start">{quiz.accessCode || "None"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>One Question at a Time:</strong></div>
          <div className="col-8 text-start">{quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end"><strong>Webcam Required:</strong></div>
          <div className="col-8 text-start">{quiz.webcamRequired ? "Yes" : "No"}</div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end" ><strong>Lock Questions After Answering:</strong></div>
          <div className="col-8 text-start">{quiz.lockQuestions ? "Yes" : "No"}</div>
        </div>
      </div>

      {/* Dates */}
      <table className="table table-borderless mt-4" >
          <thead style={{ borderBottom: "2px solid #dee2e6" }}>
            <tr>
              <th className="text-center">Due</th>
              <th className="text-center">Available From</th>
              <th className="text-center">Until</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{quiz.dueDate || "N/A"}</td>
              <td className="text-center">{quiz.availableDate || "N/A"}</td>
              <td className="text-center">{quiz.untilDate || "N/A"}</td>
            </tr>
          </tbody>
      </table>
      <div style={{ borderTop: "2px solid #dee2e6" }}></div>
    </div>
  );
}
