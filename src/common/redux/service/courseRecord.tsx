import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseRecord = createApi({
  reducerPath: "courseRecord",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Course", "BodyInfo", "Goal"],
  endpoints: (builder) => ({
    dailyDietaryGetApi: builder.query({
      query: ({ Token, CourseId, date }) => ({
        url: `/course/${CourseId}/daily`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Course"],
    }),
    bodyInfoGetApi: builder.query({
      query: ({ Token, CourseId }) => ({
        url: `/course/${CourseId}/bodyInfo`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["BodyInfo"],
    }),
    GoalGetApi: builder.query({
      query: ({ Token, CourseId }) => ({
        url: `/course/${CourseId}/goal`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Goal"],
    }),
  }),
});

export const {
  useDailyDietaryGetApiQuery,
  useBodyInfoGetApiQuery,
  useGoalGetApiQuery,
} = courseRecord;
