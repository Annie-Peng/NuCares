import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apply = createApi({
  reducerPath: "apply",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    applyPostApi: builder.mutation({
      query: ({ putApiData, body }) => ({
        url: "/user/applyNutritionist",
        method: "POST",
        headers: {
          Authorization: `${putApiData.Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useApplyPostApiMutation } = apply;
