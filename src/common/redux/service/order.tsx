import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const order = createApi({
  reducerPath: "order",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    orderGetApi: builder.query({
      query: ({ Token, PageId }) => ({
        url: `/user/orders?page=${PageId}`,
        method: "GET",
        headers: {
          Authorization: `${Token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useOrderGetApiQuery } = order;
