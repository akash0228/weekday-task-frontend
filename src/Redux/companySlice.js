import { createSlice } from "@reduxjs/toolkit";

const applyFilters = (jobs, filters) => {
  return jobs.filter((job) => {
    return (
      (filters.role.length === 0 || filters.role.includes(job.jobRole)) &&
      (filters.OnsiteRemote === null ||
        (filters.OnsiteRemote === "OnSite"
          ? job.location !== "remote"
          : job.location === "remote")) &&
      (filters.minbaseSalary === null ||
        job.minJdSalary >= filters.minbaseSalary) &&
      (filters.minExp === null ||
        (job.minExp !== null && job.minExp >= filters.minExp)) &&
      (filters.searchCompany === null ||
        job.companyName
          .toLowerCase()
          .includes(filters.searchCompany.toLowerCase()))
    );
  });
};

const companySlice = createSlice({
  name: "company",
  initialState: {
    rawJobs: [],
    filteredJobs: [],
    role: [],
    OnsiteRemote: null,
    minbaseSalary: null,
    minExp: null,
    searchCompany: null,
    numberOfData:0,
  },
  reducers: {
    getRawJobs: (state, action) => {
      state.rawJobs = action.payload.filter(
        (job) => !Object.values(job).some((val) => val === null)
      );
      state.filteredJobs = applyFilters(state.rawJobs, state);
      state.numberOfData=state.filteredJobs.length;
    },
    setRole: (state, action) => {
      state.role = action.payload;
      state.filteredJobs = applyFilters(state.rawJobs, state);
      state.numberOfData=state.filteredJobs.length;
    },
    Onsiteremote: (state, action) => {
      state.OnsiteRemote = action.payload;
      state.filteredJobs = applyFilters(state.rawJobs, state);
      state.numberOfData=state.filteredJobs.length;
    },
    SetminbaseSalary: (state, action) => {
      state.minbaseSalary = action.payload;
      state.filteredJobs = applyFilters(state.rawJobs, state);
      state.numberOfData=state.filteredJobs.length;
    },
    SetMinExp: (state, action) => {
      state.minExp = action.payload;
      state.filteredJobs = applyFilters(state.rawJobs, state);
      state.numberOfData=state.filteredJobs.length;
    },
    SearchCompany: (state, action) => {
      state.searchCompany = action.payload;
      state.filteredJobs = applyFilters(state.rawJobs, state);
      state.numberOfData=state.filteredJobs.length;
    },
  },
});

export const {
  getRawJobs,
  setRole,
  Onsiteremote,
  SetminbaseSalary,
  SetMinExp,
  SearchCompany,
} = companySlice.actions;
export default companySlice.reducer;
