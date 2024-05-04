import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    company: [],
    role: [],
  },
  reducers: {
    getCompanys: (state, action) => {
      state.company = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { getCompanys, setRole } = companySlice.actions;
export default companySlice.reducer;
