import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface Auth {
  Token: string;
  UserName: string;
  Email: string;
  ImgUrl: string;
  IsNutritionist: boolean;
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
      const { Token } = action.payload;
      const { UserName, Email, ImgUrl, IsNutritionist, UserCurrentStatus } =
        action.payload.Data;
      state.Token = Token;
      state.UserName = UserName;
      state.Email = Email;
      state.ImgUrl = ImgUrl;
      state.IsNutritionist = IsNutritionist;
      state.UserCurrentStatus = UserCurrentStatus;
    },
  },
});

export const { storeAuth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
