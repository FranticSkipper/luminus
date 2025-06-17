import type { DirectoryTreeItem } from "@entities/file-system/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchBarApi = createApi({
  reducerPath: "searchBarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/directory-tree/search",
  }),
  endpoints: (build) => ({
    search: build.query<DirectoryTreeItem[], string>({
      query: (query: string) => ({
        url: "",
        params: { query },
      }),
    }),
  }),
});

export const { useSearchQuery, useLazySearchQuery } = searchBarApi;
