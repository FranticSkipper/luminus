import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SearchResult } from "../model/types";

export const searchBarApi = createApi({
  reducerPath: "searchBarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/directory-tree/search",
  }),
  endpoints: (build) => ({
    search: build.query<{ status: string; data: SearchResult[] }, string>({
      query: (query: string) => ({
        url: "",
        params: { query },
      }),
    }),
  }),
});

export const { useSearchQuery, useLazySearchQuery } = searchBarApi;
