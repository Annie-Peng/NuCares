import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ShowModalType {
  showCourseDeleteModal: { showModal: boolean; data: any };
  showCourseStartModal: { showModal: boolean; data: any };
  showMenuEditModal: { showModal: boolean; data: any };
  showBodyRateAddModal: { showModal: boolean; data: any };
}

export const showModalSlice = createSlice({
  name: "showModal",
  initialState: {
    showCourseDeleteModal: { showModal: false, data: "" },
    showCourseStartModal: { showModal: false, data: "" },
    showMenuEditModal: { showModal: false, data: "" },
    showBodyRateAddModal: { showModal: false, data: "" },
  },
  reducers: {
    showModal: (state, action) => {
      const item = action.payload[0] as keyof typeof state;
      state[item] = { showModal: true, data: action.payload[1] };
    },
    closeModal: (state, action) => {
      state[action.payload as keyof typeof state].showModal = false;
    },
  },
});

export const { showModal, closeModal } = showModalSlice.actions;
export const selectShowModal = (state: RootState) => state.showModal;
export default showModalSlice.reducer;
