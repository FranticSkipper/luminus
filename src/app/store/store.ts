import { authApi } from "@entities/auth/api/authApi";
import { authSlice } from "@entities/auth/slice";
import { fileTreeApi } from "@entities/file-tree/api/fileTreeApi";
import { fileSystemReducer } from "@entities/file-tree/slice";
import { searchBarApi } from "@entities/search-bar/api/api";
import { searchReducer } from "@entities/search-bar/slice";
import { configureStore } from "@reduxjs/toolkit";
import { editorSliceReducer } from "@entities/editor/slice";
import { editorApi } from "@entities/editor/api";

export const store = configureStore({
  reducer: {
    [fileTreeApi.reducerPath]: fileTreeApi.reducer,
    [searchBarApi.reducerPath]: searchBarApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [editorApi.reducerPath]: editorApi.reducer,
    authSlice: authSlice.reducer,
    searchBarReducer: searchReducer,
    fileSystemReducer,
    editorSlice: editorSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fileTreeApi.middleware)
      .concat(searchBarApi.middleware)
      .concat(authApi.middleware)
      .concat(editorApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
