import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
  id: string;
  email: string;
  fileIds: string[];
}

interface AuthResponse {
  user: UserData;
  token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/auth",
  }),
  endpoints: (build) => ({
    autoLogin: build.query<AuthResponse, string>({
      query: (token) => ({
        url: "/login-by-token",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    login: build.mutation<AuthResponse, { email: string; password: string }>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    registration: build.mutation<
      AuthResponse,
      { email: string; password: string }
    >({
      query: (user) => ({
        url: "/logup",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLazyAutoLoginQuery,
} = authApi;
