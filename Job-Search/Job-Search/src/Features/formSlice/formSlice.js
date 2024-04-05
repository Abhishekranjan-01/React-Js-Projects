import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requiredParameters: { inputText: "" },
  optionalParameters: {
    datePosted: "all",
    employmentsTypes: "INTERN",
    jobRequirements: "no_experience",
    remoteJobsOnly: "true",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInputText: (state, action) => {},
    addDatePosted: (state, action) => {
      state.optionalParameters.datePosted = action.payload;
      console.log("From FormSlice");
    },
    addEmploymentsTypes: (state, action) => {},
    addJobRequirements: (state, action) => {},
    addRemoteJobsOnly: (state, action) => {},
  },
});

export const {
  addInputText,
  addDatePosted,
  addEmploymentsTypes,
  addJobRequirements,
  addRemoteJobsOnly,
} = formSlice.actions;

export default formSlice.reducer;
