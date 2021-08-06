import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books';

export const rootReducer = combineReducers({
  books: booksReducer,
  user: (state = { hallo: 'welt' }) => state,
});

export const store = configureStore({
  reducer: rootReducer,
});