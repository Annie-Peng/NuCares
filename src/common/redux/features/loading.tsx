import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface LoadingType {
  loading: boolean;
}

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { showLoading } = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;
export default loadingSlice.reducer;
