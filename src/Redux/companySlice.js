import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    company: [],
  },
  reducers: {
    getCompanys: (state, action) => {
      state.company = action.payload;
    },
  },
});

export const { getCompanys } = companySlice.actions;
export default companySlice.reducer;
