import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {},
};

const sliceOptions = {
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: {
            id: action.payload.id,
            front: action.payload.front,
            back: action.payload.back,
          },
        },
      };
    },
  },
};

export const cardsSlice = createSlice(sliceOptions);

export const selectCardsById = (selectedId) => (state) => {
  return Object.keys(state.cards.cards)
    .filter((key) => key === selectedId)
    .reduce((obj, key) => {
      obj[key] = state.cards.cards[key];
      return obj;
    }, {});
};

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
