import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Check if the book already exists in favorites
      const bookExists = state.favorites.find((book) => book.id === action.payload.id);
      if (!bookExists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = bookSlice.actions;
export default bookSlice.reducer;
