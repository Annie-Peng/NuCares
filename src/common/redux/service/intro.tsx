import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const intro = createApi({
  reducerPath: "intro",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Intro"],
  endpoints: (builder) => ({
    introGetApi: builder.query({
      query: ({ Token }) => ({
        url: "/nu/info",
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Intro"],
    }),
    introPutApi: builder.mutation({
      query: ({ Token, body }) => ({
        url: "/nu/info",
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["Intro"],
    }),
  }),
});

export const { useIntroGetApiQuery, useIntroPutApiMutation } = intro;
