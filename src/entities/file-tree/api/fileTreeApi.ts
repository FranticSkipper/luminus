import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

import type { DirectoryTree } from "@shared/model/types";
import type { FileTreeItem, FileTreeItemWithChildren } from "../model/types";

export const fileTreeApi = createApi({
  reducerPath: "fileTreeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/directory-tree",
  }),
  tagTypes: ["Files"],
  endpoints: (build) => ({
    deleteTreeItem: build.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Files"],
    }),
    createNewFile: build.mutation<any, DirectoryTree>({
      query: (file) => ({
        url: "",
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["Files"],
    }),
    getAllFiles: build.query<FileTreeItem[], void>({
      query: () => "",
      transformResponse: (res: { status: string; data: FileTreeItem[] }) =>
        res.data,
      providesTags: ["Files"],
    }),
    getFileById: build.query<FileTreeItem, string>({
      query: (id) => `${id}`,
    }),
    updateFile: build.mutation<
      { status: string; data: FileTreeItem[] },
      FileTreeItemWithChildren
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

export const {
  useGetAllFilesQuery,
  useUpdateFileMutation,
  useCreateNewFileMutation,
  useDeleteTreeItemMutation,
} = fileTreeApi;
