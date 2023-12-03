import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const survey = createApi({
  reducerPath: "survey",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["LifeSurvey"],
  endpoints: (builder) => ({
    lifeSurveyGetApi: builder.query({
      query: ({ Token, CourseId }) => ({
        url: `/course/${CourseId}/survey`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["LifeSurvey"],
    }),
    lifeSurveyPostApi: builder.mutation({
      query: ({ Token, CourseId, body }) => ({
        url: `/course/${CourseId}/survey`,
        method: "POST",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["LifeSurvey"],
    }),
  }),
});

export const { useLifeSurveyPostApiMutation } = survey;
