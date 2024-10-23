import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload; 
    },
    applyJob(state, action) {
      const job = state.jobs.find(job => job.id === action.payload.jobId);
      if (job) {
        job.applied = true; 
      }
    },
  },
});

export const { setJobs, applyJob } = jobSlice.actions;
export default jobSlice.reducer;
