import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const course = createApi({
  reducerPath: "course",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Course"],
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
      providesTags: ["Course"],
    }),
    courseGetTimeApi: builder.query({
      query: ({ Token, CourseId }) => ({
        url: `/course/${CourseId}/time`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    coursePutStartApi: builder.mutation({
      query: ({ Token, CourseId, body }) => {
        console.log(Token, CourseId, body);
        return {
          url: `/course/${CourseId}/start`,
          method: "PUT",
          headers: {
            Authorization: `${Token}`,
            "Content-Type": "application/json",
          },
          body,
        };
      },
      invalidatesTags: ["Course"],
    }),
    coursePostCommentApi: builder.mutation({
      query: ({ Token, CourseId, body }) => {
        console.log(Token, CourseId, body);
        return {
          url: `/course/${CourseId}/comment`,
          method: "POST",
          headers: {
            Authorization: `${Token}`,
            "Content-Type": "application/json",
          },
          body,
        };
      },
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useCourseListGetApiQuery,
  useCourseGetTimeApiQuery,
  useCoursePutStartApiMutation,
  useCoursePostCommentApiMutation,
} = course;
