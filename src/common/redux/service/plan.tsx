import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const plan = createApi({
  reducerPath: "plan",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Plan"],
  endpoints: (builder) => ({
    planGetApi: builder.query({
      query: ({ Token }) => ({
        url: "/nu/plan",
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Plan"],
    }),
    planPostApi: builder.mutation({
      query: ({ Token, body }) => ({
        url: "/nu/plan",
        method: "POST",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["Plan"],
    }),
    planPutApi: builder.mutation({
      query: ({ Token, PlanId, body }) => ({
        url: `/nu/plan/${PlanId}`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
        body,
      }),
      invalidatesTags: ["Plan"],
    }),
    planDeleteApi: builder.mutation({
      query: ({ Token, PlanId }) => ({
        url: `/nu/plan/${PlanId}`,
        method: "PUT",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Plan"],
    }),
  }),
});

export const {
  usePlanGetApiQuery,
  usePlanPostApiMutation,
  usePlanPutApiMutation,
  usePlanDeleteApiMutation,
} = plan;
