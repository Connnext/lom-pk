import { api } from "./api";

export const userApi = api.injectEndpoints({
  // reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    currentUser: build.query({
      query: () => ({
        url: "/users/me",
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: ["User"],
    }),
    patchCurrentUser: build.mutation({
      query: (data) => ({
        url: "/users/me",
        method: "PATCH",
        body: {
          phone: data.phone,
          name: data.name,
          surname: data.surname,
          patronymic: data.patronymic,
          email: data.email,
          password: data.password,
          area: data.area,
          region: data.region,
          city: data.city,
          street: data.street,
          num_of_house: data.num_of_house,
          postcode: data.postcode,
        },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["User"],
    }),
    user: build.query({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    patchUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PATCH",
        headers: {
          accept: "application/json",
        },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      }),
      invalidatesTags: ["User"],
    }),
    orderCall: build.query({
      query: (data) => ({
        url: `/order_call/?phone=${data?.phone}&name=${data?.name}`,
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useCurrentUserQuery,
  usePatchCurrentUserMutation,
  useUserQuery,
  usePatchUserMutation,
  useDeleteUserMutation,
  useOrderCallQuery,
} = userApi;
