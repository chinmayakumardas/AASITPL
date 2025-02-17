import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobList, applyJob, getJobbyId } from "../../api/careerApi";  // Import getJobbyId

// Async thunk to fetch the job list
export const getJobList = createAsyncThunk("job/getJobList", async () => {
  try {
    const jobList = await fetchJobList();  // Call the fetchJobList API function
    return jobList;  // Return the job list data
  } catch (error) {
    throw error;  // Propagate error for handling
  }
});

// Async thunk to apply for a job
export const applyForJob = createAsyncThunk(
  "job/applyForJob",
  async ({  userData }) => {
    try {
      const response = await applyJob(userData);  // Call the applyJob API function
      return response;  // Return the response from the applyJob API
    } catch (error) {
      throw error;  // Propagate error for handling
    }
  }
);

// Async thunk to fetch a job by its ID
export const getJobById = createAsyncThunk("job/getJobById", async (jobId) => {
  try {
    const job = await getJobbyId(jobId);  // Call the getJobbyId API function
    return job;  // Return the job details
  } catch (error) {
    throw error;  // Propagate error for handling
  }
});

// Redux slice for managing job state
const jobSlice = createSlice({
  name: "career",
  initialState: {
    jobList: [],  // Array to store the job listings
    jobDetails: null,  // To store a single job's details
    loading: false,  // Loading state when fetching data
    error: null,  // To store any errors
    applicationStatus: null,  // To store the application status after applying
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobList.pending, (state) => {
        state.loading = true;  // Set loading to true when the request starts
        state.error = null;  // Reset error state
      })
      .addCase(getJobList.fulfilled, (state, action) => {
        state.loading = false;  // Set loading to false when data is fetched
        state.jobList = action.payload;  // Store the fetched job list
      })
      .addCase(getJobList.rejected, (state, action) => {
        state.loading = false;  // Set loading to false when an error occurs
        state.error = action.error.message;  // Store the error message
      })
      .addCase(applyForJob.pending, (state) => {
        state.loading = true;  // Set loading to true when applying for a job
        state.applicationStatus = null;  // Reset previous application status
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.loading = false;  // Set loading to false after the job application is successful
        state.applicationStatus = action.payload;  // Store the application success response
      })
      .addCase(applyForJob.rejected, (state, action) => {
        state.loading = false;  // Set loading to false if application fails
        state.applicationStatus = "Failed";  // Store application failure status
        state.error = action.error.message;  // Store error message
      })
      .addCase(getJobById.pending, (state) => {
        state.loading = true;  // Set loading to true when fetching job details
        state.error = null;  // Reset error state
      })
      .addCase(getJobById.fulfilled, (state, action) => {
        state.loading = false;  // Set loading to false when job details are fetched
        state.jobDetails = action.payload;  // Store the fetched job details
      })
      .addCase(getJobById.rejected, (state, action) => {
        state.loading = false;  // Set loading to false when an error occurs
        state.error = action.error.message;  // Store the error message
      });
  },
});

export default jobSlice.reducer;
