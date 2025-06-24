import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  email: string;
  fileIds: string[];
}

interface AuthState {
  user: UserData | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
