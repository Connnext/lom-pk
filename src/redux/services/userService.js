import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2832-178-67-70-180.ngrok-free.app/",
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `/users`,
      providesTags: (result) => ["User"],
    }),
    getSingleUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: (result) => ["User"],
    }),
    auth: build.mutation({
      query: (data) => ({
        url: "/auth",
        method: "POST",
        body: data,
      }),
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body: {
          email: body.email,
          password: body.password,
          name: body.name,
          role: body.role,
          basket: {
            item: [],
          },
          history: {},
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useAddUserMutation,
  useAuthMutation,
} = userApi;
