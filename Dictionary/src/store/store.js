import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "../Features/dictionarySlice";
// import { fetchWord } from "../Features/dictionarySlice";

export const store = configureStore({
  reducer: dictionaryReducer,
});
