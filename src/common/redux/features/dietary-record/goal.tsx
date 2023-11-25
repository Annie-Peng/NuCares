import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface GoalType {
  GoalWeight: string;
  GoalBodyFat: string;
  Weight: string;
  BodyFat: string;
  WeightCompletionRate: number;
  BodyFatCompletionRate: number;
}

export const goalSlice = createSlice({
  name: "goal",
  initialState: {
    GoalWeight: "",
    GoalBodyFat: "",
    Weight: "",
    BodyFat: "",
    WeightCompletionRate: "",
    BodyFatCompletionRate: "",
  },
  reducers: {
    storeGoal: (state, action) => {
      return action.payload;
    },
  },
});

export const { storeGoal } = goalSlice.actions;
export const selectGoal = (state: RootState) => state.goal;
export default goalSlice.reducer;
