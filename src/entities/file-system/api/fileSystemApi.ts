import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  DirectoryTreeItem,
  DirectoryTreeItemWithChildren,
} from "../model/types";

export const fileSystemApi = createApi({
  reducerPath: "fileSystemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/directory-tree",
  }),
  tagTypes: ["Files"],
  endpoints: (build) => ({
    getAllFiles: build.query<DirectoryTreeItem[], void>({
      query: () => "",
      transformResponse: (res: { status: string; data: DirectoryTreeItem[] }) =>
        res.data,
      providesTags: ["Files"],
    }),
    getById: build.query<DirectoryTreeItem, string>({
      query: (id) => `${id}`,
    }),
    updateDirectory: build.mutation<
      { status: string; data: DirectoryTreeItem[] },
      DirectoryTreeItemWithChildren
    >({
      query: (item) => ({
        url: `/${item.id}`,
        method: "PATCH",
        body: item,
      }),
      invalidatesTags: ["Files"],
    }),
  }),
});

export const { useGetAllFilesQuery, useUpdateDirectoryMutation } =
  fileSystemApi;
