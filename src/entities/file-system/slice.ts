import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DirectoryTreeState } from "./model/types";

const initialState: DirectoryTreeState = {
  items: [],
};

export const fileSystemSlice = createSlice({
  name: "fileSystemSlice",
  initialState: initialState,
  reducers: {
    getAllItems: (state) => {
      return state.items;
    },

    getItemById: (state, action: PayloadAction<{ id: string }>) => {
      return state.items.find((item) => item.id === action.payload.id);
    },
  },
});

export const { getAllItems, getItemById } = fileSystemSlice.actions;
export const fileSystemReducer = fileSystemSlice.reducer;
