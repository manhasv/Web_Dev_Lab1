import { createSlice } from "@reduxjs/toolkit";
import { quizzes as initialQuizzes } from "../../Database";

const initialState = {
  quizzes: initialQuizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz = {
        _id: new Date().getTime().toString(),
        title: quiz.title,
        course: quiz.course,
        availableDate: quiz.availableDate,
        availableUntilDate: quiz.availableUntilDate,
        dueDate: quiz.dueDate,
        points: quiz.points,
        numberOfQuestions: quiz.numberOfQuestions,
      };
      state.quizzes = [...state.quizzes, newQuiz];
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quiz._id
          ? quiz
          : q
      ); 
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quizId ? { ...q, editing: true } : q
      );
    },
    setQuizScore: (state, { payload: { quizId, score } }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quizId ? { ...q, score } : q
      );
    },
  },
});

export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizScore } = quizzesSlice.actions;
export default quizzesSlice.reducer;
