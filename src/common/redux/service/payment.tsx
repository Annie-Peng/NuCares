import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const payment = createApi({
  reducerPath: "payment",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    paymentGetApi: builder.query({
      query: ({ Token, planId }) => ({
        url: `/plan/${planId}`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    paymentPostApi: builder.mutation({
      query: ({ Token, planId, body }) => ({
        url: `/order/${planId}`,
        method: "POST",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { usePaymentGetApiQuery, usePaymentPostApiMutation } = payment;
