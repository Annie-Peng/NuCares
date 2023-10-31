import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface BodyRateType {
  Date: string;
  Heigh: string;
  Weight: string;
  BodyFat: string;
  VisceralFat: string;
  SMM: string;
  Bmi: string;
  Bmr: string;
}

export const bodyRateSlice = createSlice({
  name: "bodyRate",
  initialState: {
    Date: "",
    Heigh: "",
    Weight: "",
    BodyFat: "",
    VisceralFat: "",
    SMM: "",
    Bmi: "",
    Bmr: "",
  },
  reducers: {
    storeBodyRate: (state, action) => {},
  },
});

export const { storeBodyRate } = bodyRateSlice.actions;
export const selectBodyRate = (state: RootState) => state.bodyRate;
export default bodyRateSlice.reducer;
