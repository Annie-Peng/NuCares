import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseRecord = createApi({
  reducerPath: "courseRecord",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Course", "BodyInfo", "Goal", "Info"],
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

    GoalPutApi: builder.mutation({
      query: ({ Token, CourseId, body }) => ({
        url: `/course/${CourseId}/goal`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Goal"],
    }),
    InfoGetApi: builder.query({
      query: ({ Token, CourseId, ID }) => ({
        url: `/course/${CourseId}/${ID}`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Info"],
    }),
  }),
});

export const {
  useDailyDietaryGetApiQuery,
  useBodyInfoGetApiQuery,
  useBodyInfoPostApiMutation,
  useGoalGetApiQuery,
  useGoalPutApiMutation,
  useInfoGetApiQuery,
} = courseRecord;
