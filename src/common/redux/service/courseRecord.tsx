import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseRecord = createApi({
  reducerPath: "courseRecord",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Course", "BodyInfo", "Info", "DailyDietary"],
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
      providesTags: ["DailyDietary"],
    }),
    dailyDietaryMealTimePutApi: builder.mutation({
      query: ({
        Token,
        CourseId,
        DailyLogId,
        MealTime,
        DailyMealTimeId,
        body,
      }) => ({
        url: `/course/${CourseId}/daily/${DailyLogId}/${MealTime}/${DailyMealTimeId}`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["DailyDietary"],
    }),
    dailyDietaryOtherPutApi: builder.mutation({
      query: ({ Token, CourseId, DailyLogId, body }) => ({
        url: `/course/${CourseId}/daily/${DailyLogId}`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["DailyDietary"],
    }),
    dailyDietaryGetMenuApi: builder.query({
      query: ({ Token, CourseId, DailyCourseMenuId }) => ({
        url: `/course/${CourseId}/menu/${DailyCourseMenuId}`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["DailyDietary"],
    }),
    dailyDietaryPutMenuApi: builder.mutation({
      query: ({ Token, CourseId, DailyCourseMenuId, body }) => ({
        url: `/course/${CourseId}/menu/${DailyCourseMenuId}`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["DailyDietary"],
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
      providesTags: ["BodyInfo"],
    }),

    GoalPutApi: builder.mutation({
      query: ({ Token, CourseId, body }) => ({
        url: `/course/${CourseId}/goal`,
        method: "PUT",
        body,
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["BodyInfo"],
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
  useDailyDietaryMealTimePutApiMutation,
  useDailyDietaryOtherPutApiMutation,
  useDailyDietaryGetMenuApiQuery,
  useDailyDietaryPutMenuApiMutation,
  useBodyInfoGetApiQuery,
  useBodyInfoPostApiMutation,
  useGoalGetApiQuery,
  useGoalPutApiMutation,
  useInfoGetApiQuery,
} = courseRecord;
