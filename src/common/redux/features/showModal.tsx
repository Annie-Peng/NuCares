import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ShowModalType {
  showCourseSaveModal: { showModal: boolean; data: any };
  showCourseDeleteModal: { showModal: boolean; data: any };
  showCourseStartModal: { showModal: boolean; data: any };
  showMenuEditModal: { showModal: boolean; data: any };
  showBodyRateAddModal: { showModal: boolean; data: any };
  showMessageModal: { showModal: boolean; data: any };
  showCommentAddModal: { showModal: boolean; data: any };
}

export const showModalSlice = createSlice({
  name: "showModal",
  initialState: {
    showCourseSaveModal: { showModal: false, data: "" },
    showCourseDeleteModal: { showModal: false, data: "" },
    showCourseStartModal: { showModal: false, data: "" },
    showMenuEditModal: { showModal: false, data: "" },
    showBodyRateAddModal: { showModal: false, data: "" },
    showMessageModal: { showModal: false, data: "" },
    showCommentAddModal: { showModal: false, data: "" },
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
