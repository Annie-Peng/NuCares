import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const course = createApi({
  reducerPath: "course",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    courseListGetApi: builder.query({
      query: ({ Token, UserCurrentStatus, PageId }) => ({
        url: `/${UserCurrentStatus}/courses?page=${PageId}`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCourseListGetApiQuery } = course;
