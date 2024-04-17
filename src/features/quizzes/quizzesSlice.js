import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};

const sliceOptions = {
  name: "quizzes",
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      return {
        ...state,
        quizzes: {
          ...state.quizzes,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds,
          },
        },
      };
    },
  },
};

export const quizzesSlice = createSlice(sliceOptions);

export const selectQuizzes = (state) => state.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
