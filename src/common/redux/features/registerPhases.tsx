import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

const registerData = {
  Email: "",
  Password: "",
  UserName: "",
  Birthday: "",
  Gender: "",
  Phone: "",
};

export const registerSlice = createSlice({
  name: "registerPhases",
  initialState: registerData,
  reducers: {
    storeRegisterForm: (state, action) => {
      const dataKeys = Object.keys(action.payload);
      Object.keys(state).forEach((key) => {
        const findData = dataKeys.find((item) => item === key);
        if (findData !== undefined) {
          state[key as keyof typeof state] = action.payload[key];
        }
      });
    },
  },
});

export const { storeRegisterForm } = registerSlice.actions;
export const selectRegister = (state: RootState) => state.registerPhases;
export default registerSlice.reducer;
