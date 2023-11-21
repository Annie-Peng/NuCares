import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const updatePassword = createApi({
  reducerPath: "updatePassword",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    updatePasswordPutApi: builder.mutation({
      query: ({ putApiData, body }) => ({
        url: "/user/update-password",
        method: "PUT",
        headers: {
          Authorization: `${putApiData}`,
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useUpdatePasswordPutApiMutation } = updatePassword;
