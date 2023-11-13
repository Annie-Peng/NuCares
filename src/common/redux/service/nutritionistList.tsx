import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nutritionistList = createApi({
  reducerPath: "nutritionistList",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    nutritionistListGetApi: builder.query({
      query: ({ PageId }) => ({
        url: `/nutritionists?page=${PageId}`,
        method: "GET",
      }),
    }),
    nutritionistGetApi: builder.query({
      query: (NutritionistId) => ({
        url: "/nutritionists",
        method: "GET",
        body: {
          nutritionistId: NutritionistId,
        },
      }),
    }),
  }),
});

export const { useNutritionistGetApiQuery, useNutritionistListGetApiQuery } =
  nutritionistList;
