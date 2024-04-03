import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import fetchData from "../Api/fetchData";

const initialState = {
  wordInfo: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

export const fetchWord = createAsyncThunk(
  "dictionary/fetchWord",
  async (name, thunkAPI) => fetchData(name)
);

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.wordInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
      state.isFulfilled = false;
      state.isRejected = false;
      state.wordInfo = [];
    });
    builder.addMatcher(isFulfilled, (state, action) => {
      state.isFulfilled = true;
      state.isLoading = false;

      state.wordInfo = action.payload;
      if (state.isRejected) state.isRejected = false;
    });
    builder.addMatcher(isRejected, (state) => {
      alert("Word Not Found");
      state.isLoading = false;
      state.isRejected = true;
      if (state.isFulfilled) state.isFulfilled = false;
    });
  },
});

export const { addData } = dictionarySlice.actions;
export default dictionarySlice.reducer;
