import { api } from "./api";

export const authApi = api.injectEndpoints({
  // reducerPath: "authApi",
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: "/auth/jwt/login",
        method: "POST",
        body: new URLSearchParams({
          username: data.email,
          password: data.password,
        }).toString(),
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/jwt/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    requestVerifyToken: build.mutation({
      query: (email) => ({
        url: "/auth/request-verify-token",
        method: "POST",
        body: {
          email: email,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    verify: build.mutation({
      query: (token) => ({
        url: "/auth/verify",
        method: "POST",
        body: {
          token: token,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    forgotPassword: build.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: {
          email: email,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: {
          token: data.token,
          password: data.password,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRequestVerifyTokenMutation,
  useVerifyMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
