import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardsArray: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, { payload }) => {
      state.cardsArray.push(payload);
    },
    deleteCard: (state, { payload }) => {
      state.cardsArray = state.cardsArray.filter(
        (item, index) => index !== payload
      );
    },
    sortCards: (state, { payload }) => {
      state.cardsArray.sort((a, b) => a.number - b.number);
    },
  },
});
export const { addCard, deleteCard, sortCards } = cardSlice.actions;
export default cardSlice.reducer;
