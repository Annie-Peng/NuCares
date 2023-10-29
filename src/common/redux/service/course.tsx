import { RootState } from "@/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const course = createApi({
  reducerPath: "course",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.Token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    courseListGetApi: builder.query({
      query: ({ UserCurrentStatus, PageId }) => ({
        url: `/${UserCurrentStatus}/courses?page=${PageId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCourseListGetApiQuery } = course;
