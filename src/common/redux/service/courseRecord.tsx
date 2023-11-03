import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseRecord = createApi({
  reducerPath: "courseRecord",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Course", "BodyInfo", "Goal"],
  endpoints: (builder) => ({
    dailyDietaryGetApi: builder.query({
      query: ({ Token, CourseId, Date }) => ({
        url: `/course/${CourseId}/daily?date=${Date}`,
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
    bodyInfoPostApi: builder.mutation({
      query: ({ Token, CourseId, body }) => ({
        url: `/course/${CourseId}/inbody`,
        method: "POST",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["BodyInfo"],
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
  useBodyInfoPostApiMutation,
  useGoalGetApiQuery,
} = courseRecord;
