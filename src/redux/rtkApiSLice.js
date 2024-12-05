import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_API_KEY;

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
  }),
  endpoints: (builder) => ({
    fetchCats: builder.query({
      query: ({ page = 1, limit = 10, order = 'asc' }) => ({
        url: '/images/search',
        params: { limit, page, order, api_key: API_KEY },
      }),
    }),
  }),
});

export const { useFetchCatsQuery } = catApi;
