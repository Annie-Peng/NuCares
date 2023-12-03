import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/types/interface";

export const lifeSurveySlice = createSlice({
  name: "lifeSurvey",
  initialState: {},
  reducers: {
    storeLifeSurvey: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { storeLifeSurvey } = lifeSurveySlice.actions;
export const selectLifeSurvey = (state: RootState) => state.lifeSurvey;
export default lifeSurveySlice.reducer;
