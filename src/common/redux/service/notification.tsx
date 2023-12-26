import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notification = createApi({
  reducerPath: "notification",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
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
    }),
  }),
});

export const { useNotificationGetApiQuery } = notification;
