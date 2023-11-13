import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface PaymentDataType {
  UserName: string;
  UserEmail: string;
  UserLineId: string;
  UserPhone: string;
  ContactTime: string;
  Invoice: string;
  PaymentMethod: string;
}

const paymentData: PaymentDataType = {
  UserName: "",
  UserEmail: "",
  UserLineId: "",
  UserPhone: "",
  ContactTime: "",
  Invoice: "",
  PaymentMethod: "",
};

export const paymentSlice = createSlice({
  name: "paymentPhases",
  initialState: paymentData,
  reducers: {
    storePaymentForm: (state, action) => {
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

export const { storePaymentForm } = paymentSlice.actions;
export const selectPayment = (state: RootState) => state.paymentPhases;
export default paymentSlice.reducer;
