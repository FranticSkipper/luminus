import { createSlice } from "@reduxjs/toolkit";
import type { SearchState } from "./model/types";

const initialState: SearchState = {
  searchResult: [],
};

export const searchBarSlice = createSlice({
  name: "searchBarSlice",
  initialState,
  reducers: {},
});

export const {} = searchBarSlice.actions;
export const searchReducer = searchBarSlice.reducer;
