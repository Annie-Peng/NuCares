import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  Token: string;
  UserName: string;
  Email: string;
  ImgUrl: string;
  IsNutritionist: string;
  UserCurrentStatus: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    Token: "",
    UserName: "",
    Email: "",
    ImgUrl: "",
    IsNutritionist: "",
    UserCurrentStatus: "",
  },
  reducers: {
    storeAuth: (state, action) => {
      state = action.payload;
    },
  },
});

export const { storeAuth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
