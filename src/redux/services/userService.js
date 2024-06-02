import { api } from "./api";

export const userApi = api.injectEndpoints({
  // reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    auth: build.mutation({
      query: (data) => ({
        url: "/auth",
        method: "POST",
        body: new URLSearchParams({
          username: data.email,
          password: data.password,
        }).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
      invalidatesTags: ["User"],
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: "/sign-up",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
        },
      }),
      invalidatesTags: ["User"],
    }),
    userUpdate: build.mutation({
      query: (data) => ({
        url: "/users/update",
        method: "POST",
        body: {
          name: data.name,
          surname: data.surname,
          patronymic: data.patronymic,
          address: {
            region: data.address.region,
            city: data.address.city,
            street: data.address.street,
            num_of_house: data.address.num_of_house,
            postcode: data.address.postcode,
          },
        },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["User"],
    }),
    getUserMe: build.query({
      query: () => ({
        url: "users/me",
      }),
      providesTags: ["User"],
    }),
    userDelete: build.mutation({
      query: (data) => ({
        url: `/users/${data.user_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    confirmEmail: build.query({
      query: (token) => `/confirm/${token}`,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserMeQuery,
  useAuthMutation,
  useSignUpMutation,
  useUserUpdateMutation,
  useUserDeleteMutation,
  useConfirmEmailQuery,
} = userApi;
