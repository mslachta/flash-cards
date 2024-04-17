import { createSlice } from "@reduxjs/toolkit";

const newQuizAdded = (action) => {
  return action.name === "addQuiz";
};

const sliceOptions = {
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            icon: action.payload.icon,
            quizIds: [],
          },
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(newQuizAdded, (state, action) => {
        const topic = state.topics.find(
          (topic) => topic.id === action.payload.topicId
        );
        if (topic) {
          return {
            ...state,
            topics: {
              ...state.topics,
              [action.payload.topicId]: {
                quizIds: state.topics.quizIds.push(action.payload.id),
              },
            },
          };
        }
      })
      .addDefaultCase((state, action) => {});
  },
};

export const topicsSlice = createSlice(sliceOptions);

export const selectTopics = (state) => state.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
