import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [], // Define the initial state for jobs as an empty array
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload; // Set the jobs array
    },
    applyJob(state, action) {
      const job = state.jobs.find(job => job.id === action.payload.jobId);
      if (job) {
        job.applied = true; // Update the job status
      }
    },
  },
});

export const { setJobs, applyJob } = jobSlice.actions;
export default jobSlice.reducer;
