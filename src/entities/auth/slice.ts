import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";

interface UserData {
  id: string;
  email: string;
  fileIds: string[];
}

interface AuthState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.autoLogin.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        authApi.endpoints.autoLogin.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.error = null;
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApi.endpoints.autoLogin.matchRejected,
        (state, { error }) => {
          state.loading = false;
          state.error = error.message || "Auto login failed";
        }
      );
  },
});

export const { setUser, logout } = authSlice.actions;
