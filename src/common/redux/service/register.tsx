import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const register = createApi({
  reducerPath: "register",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    userRegisterEmailPostApi: builder.mutation({
      query: (body) => ({
        url: "/auth/checkEmail",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useUserRegisterEmailPostApiMutation } = register;
