import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notification = createApi({
  reducerPath: "notification",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Notification"],
  endpoints: (builder) => ({
    notificationGetApi: builder.query({
      query: ({ Token }) => ({
        url: "/notice/all",
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Notification"],
    }),
    notificationReadPutApi: builder.mutation({
      query: ({ Token, NoticeId }) => ({
        url: `/notice/${NoticeId}`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Notification"],
    }),
    notificationAllReadPutApi: builder.mutation({
      query: ({ Token }) => ({
        url: `/notice/readall`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Notification"],
    }),
  }),
});

export const {
  useNotificationGetApiQuery,
  useNotificationReadPutApiMutation,
  useNotificationAllReadPutApiMutation,
} = notification;
