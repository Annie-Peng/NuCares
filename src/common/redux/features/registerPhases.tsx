import { createSlice } from "@reduxjs/toolkit";

const registerData = {
  email: "",
  password: "",
  nickname: "",
  // Birthday: "",
  // Gender: "",
  // Phone: "",
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
          state[key] = action.payload[key];
        }
      });
    },
  },
});

export const { storeRegisterForm } = registerSlice.actions;
export const selectRegister = (state) => state.registerPhases;
export default registerSlice.reducer;
