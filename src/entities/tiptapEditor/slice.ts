import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface EditorSliceState {
  editorContent: string;
}

const initialState: EditorSliceState = {
  editorContent: "",
};

const editorSlice = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setEditorContent: (state, action: PayloadAction<string>) => {
      state.editorContent = action.payload;
    },
  },
});

export const { setEditorContent } = editorSlice.actions;
export const editorSliceReducer = editorSlice.reducer;
