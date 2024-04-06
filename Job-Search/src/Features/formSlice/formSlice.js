import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { requiredParameters: { inputText: "" } },
  {
    optionalParameters: {
      datePosted: { defaultValue: "all", isDefaultValueChanged: false },
      employment_types: "",
      jobRequirements: "",
      remoteJobsOnly: "",
    },
  },
];

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInputText: (state, { payload }) => {},
    addDatePosted: (state, { payload }) => {
      state[1].optionalParameters.datePosted.defaultValue = payload;
      state[1].optionalParameters.datePosted.isDefaultValueChanged = true;
      console.log("From FormSlice");
    },
    addEmploymentTypes: (state, { payload }) => {
      state[1].optionalParameters.employment_types = payload;
    },
    addJobRequirements: (state, { payload }) => {
      state[1].optionalParameters.jobRequirements = payload;
    },
    addRemoteJobsOnly: (state, { payload }) => {
      state[1].optionalParameters.remoteJobsOnly = payload;
    },
  },
});

export const {
  addInputText,
  addDatePosted,
  addEmploymentTypes,
  addJobRequirements,
  addRemoteJobsOnly,
} = formSlice.actions;

export default formSlice.reducer;
