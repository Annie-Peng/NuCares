import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface changeIDType {
  // user: { currentStatus: boolean; path: string };
  // nu: { currentStatus: boolean; path: string };
  currentID: string;
}

export const changeIDSlice = createSlice({
  name: "changeID",
  initialState: {
    currentID: "",
    // user: { currentStatus: false, path: "/dashboard/student" },
    // nu: { currentStatus: false, path: "/dashboard/nutritionist" },
  },
  reducers: {
    updateChangeID: (state, action) => {
      state: action.payload;
    },
  },
});

export const { updateChangeID } = changeIDSlice.actions;
export const selectChangeID = (state: RootState) => state.changeID;
export default changeIDSlice.reducer;
