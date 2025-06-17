import { fileSystemApi } from "@entities/file-system/api/fileSystemApi";
import { searchBarApi } from "@entities/search-bar/api/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [fileSystemApi.reducerPath]: fileSystemApi.reducer,
    [searchBarApi.reducerPath]: searchBarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fileSystemApi.middleware)
      .concat(searchBarApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
