import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SearchResult, SearchState } from "./model/types";

const initialState: SearchState = {
  query: "",
  searchResult: [],
  isLoading: false,
  isError: false,
};

export const searchBarSlice = createSlice({
  name: "searchBarSlice",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSearchResult(state, action: PayloadAction<SearchResult[]>) {
      state.searchResult = action.payload;
    },
    setSearchLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setSearchError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSearchResult,
  setSearchLoading,
  setSearchError,
} = searchBarSlice.actions;
export const searchReducer = searchBarSlice.reducer;
