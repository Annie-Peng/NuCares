import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const register = createApi({
  reducerPath: "register",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    userRegisterPostApi: builder.mutation({
      query: (body) => ({
        url: "/users/sign_up",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useUserRegisterPostApiMutation } = register;
