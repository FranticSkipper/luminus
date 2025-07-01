import { fileTreeApi } from "@entities/file-tree/api/fileTreeApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const editorApi = createApi({
  reducerPath: "editorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/editor-content",
  }),
  endpoints: (build) => ({
    saveContent: build.mutation<
      any,
      { parentId: string | null; content: string; userId: string; name: string }
    >({
      query: (contentEditor) => ({
        url: "/create",
        method: "POST",
        body: contentEditor,
      }),
      async onQueryStarted(contentEditor, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(fileTreeApi.util.invalidateTags(["Files"]));
        } catch (error) {
          console.error("Failed to delete item and invalidate search", error);
        }
      },
    }),
    getContentById: build.query<{ fileId: string; content: string }, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const { useSaveContentMutation, useGetContentByIdQuery } = editorApi;
