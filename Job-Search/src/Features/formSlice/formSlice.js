import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { requiredParameters: { inputText: "" } },
  {
    optionalParameters: {
      datePosted: { defaultValue: "all", isDefaultValueChanged: false },
      employmentsTypes: "INTERN",
      jobRequirements: "no_experience",
      remoteJobsOnly: "true",
    },
  },
];

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInputText: (state, action) => {},
    addDatePosted: (state, action) => {
      state[1].optionalParameters.datePosted.defaultValue = action.payload;
      state[1].optionalParameters.datePosted.isDefaultValueChanged = true;
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
