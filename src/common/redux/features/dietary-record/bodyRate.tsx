import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";
import { SingleBodyRateType } from "@/common/lib/dashboard/dietary-record/bodyRate";

type BodyRateType = SingleBodyRateType[];

export const bodyRateSlice = createSlice({
  name: "bodyRate",
  initialState: {
    CreateDate: "",
    Heigh: "",
    Weight: "",
    BodyFat: "",
    VisceralFat: "",
    SMM: "",
    Bmi: "",
    Bmr: "",
  },
  reducers: {
    storeBodyRate: (state, action) => {
      return action.payload;
    },
  },
});

export const { storeBodyRate } = bodyRateSlice.actions;
export const selectBodyRate = (state: RootState) => state.bodyRate;
export default bodyRateSlice.reducer;
