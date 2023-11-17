import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profile = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["profile"],
  endpoints: (builder) => ({
    profileGetApi: builder.query({
      query: ({ Token }) => ({
        url: "/user/profile",
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["profile"],
    }),
    profilePutApi: builder.mutation({
      query: ({ putApiData, body }) => ({
        url: "/user/profile",
        method: "PUT",
        headers: {
          Authorization: `${putApiData.Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useProfileGetApiQuery, useProfilePutApiMutation } = profile;
