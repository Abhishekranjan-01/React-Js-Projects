import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
// import webIntern from "../../../Test-data-json/webIntern";
import Fta from "../../../Test-data-json/webIntern";
import getData from "@/API/Api";

// console.log(webIntern);

// const testData = webIntern;
const testData = Fta;
const initialState = {
  apiResponse: [],
  page: 1,
  num_pages: 1,
  isLoading: true,
};

export const callApi = createAsyncThunk(
  "jobs/fetchJobs",
  // async (name, thunkApi) => getData(thunkApi.)
  async (name, thunkAPi) => {
    console.log("Some Thing Detectdd");
    const formSlice = thunkAPi.getState().formSlice;
    console.log("formSlice:\t", formSlice);
    const query = formSlice[0].requiredParameters.inputText;
    let date_posted = formSlice[1].optionalParameters.date_posted.defaultValue;
    let { employment_types } = formSlice[1].optionalParameters;
    let { job_requirements } = formSlice[1].optionalParameters;
    let { remote_jobs_only } = formSlice[1].optionalParameters;

    const { page, num_pages } = thunkAPi.getState().apiResponse;

    date_posted = `&date_posted=${date_posted}`;
    employment_types =
      employment_types !== "" ? `&employment_types=${employment_types}` : "";

    job_requirements =
      job_requirements !== "" ? `&job_requirements=${job_requirements}` : "";
    remote_jobs_only =
      remote_jobs_only !== "" ? `&remote_jobs_only=${remote_jobs_only}` : "";

    const filters =
      `&page=${page}` +
      `&num_pages=${num_pages}` +
      date_posted +
      employment_types +
      job_requirements +
      remote_jobs_only;
    console.log("APUR:\t", filters);
    // console.log(thunkAPi.getState());
    return getData(query, filters);
  }
);

const apiResultSlice = createSlice({
  name: "apiResult",
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      state.page = state.page + 1;
    },
    resetPageCount: (state, action) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state, action) => {
      console.log("I am Pending");
      state.apiResponse = null;
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled, (state, { payload }) => {
      console.log("payloda:\t", payload);
      console.log("payload-data:\t", payload.data);
      console.log("In am Fulfilled");
      const temp = [...state.apiResponse];

      console.log("After Null:\t", state.apiResponse);
      state.apiResponse = [...temp, ...payload.data];
      state.isLoading = false;
      console.log("After Null:\t", state.apiResponse);
    });
    builder.addMatcher(isRejected, (state, action) => {
      console.log("Rejected Found !!");
      alert("Something Went Wrong");
    });
  },
});

console.log(callApi);
export const { incrementPage, resetPageCount } = apiResultSlice.actions;
export default apiResultSlice.reducer;
