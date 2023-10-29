import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";
import { geoStereographicRaw } from "d3";

export interface ShowModalType {
  CourseDeleteModal: boolean;
  CourseStartModal: boolean;
  MenuEditModal: boolean;
  BodyRateAddModal: boolean;
}

export const showModalSlice = createSlice({
  name: "showModal",
  initialState: {
    CourseDeleteModal: false,
    CourseStartModal: false,
    MenuEditModal: false,
    BodyRateAddModal: false,
  },
  reducers: {
    showModal: (state, action) => {
      Object.keys(state).forEach((key) => {
        console.log(key);
        key === action.payload
          ? (state[key as keyof typeof state] = true)
          : (state[key as keyof typeof state] = false);
      });
    },
  },
});

export const { showModal } = showModalSlice.actions;
export const selectShowModal = (state: RootState) => state.showModal;
export default showModalSlice.reducer;
