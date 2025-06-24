import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FileTreeItem, FileTreeState } from "./model/types";

const initialState: FileTreeState = {
  files: [],
};

export const fileTreeSlice = createSlice({
  name: "fileTreeSlice",
  initialState: initialState,
  reducers: {
    setFile: (state, action: PayloadAction<FileTreeItem[]>) => {
      state.files = action.payload;
    },
    getAllFiles: (state) => {
      return state.files;
    },
    getFileById: (state, action: PayloadAction<{ id: string }>) => {
      return state.files.find((file) => file.id === action.payload.id);
    },
  },
});

export const { setFile, getAllFiles, getFileById, getCurrentFile } =
  fileTreeSlice.actions;
export const fileSystemReducer = fileTreeSlice.reducer;
