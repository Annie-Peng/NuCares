import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favorite = createApi({
  reducerPath: "favorite",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["favorite"],
  endpoints: (builder) => ({
    favoriteGetApi: builder.query({
      query: ({ Token }) => ({
        url: "/user/follow",
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["favorite"],
    }),
    favoritePostApi: builder.mutation({
      query: ({ Token, NutritionistId }) => ({
        url: `/user/follow/${NutritionistId}`,
        method: "POST",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["favorite"],
    }),
  }),
});

export const { useFavoriteGetApiQuery, useFavoritePostApiMutation } = favorite;
