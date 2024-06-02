import { api } from "./api";

export const userApi = api.injectEndpoints({
  // reducerPath: "categoriesApi",
  tagTypes: ["Categories"],
  endpoints: (build) => ({
    getCategories: build.query({
      query: (data) => ({
        url: `/categories/?parent_id=${data.parent_id}&deep_level=${data.deep_level}`,
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: ["Categories"],
    }),
    createCategory: build.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: {
          name: data.name,
          parent_id: data.parent_id,
          sort: data.sort,
        },
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: build.mutation({
      query: (data) => ({
        url: `/categories/${data.category_id}`,
        method: "PUT",
        body: {
          name: data.name,
          parent_id: data.parent_id,
        },
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: build.mutation({
      query: (data) => ({
        url: `/categories/${data.category_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    changeSorOrderCategory: build.mutation({
      query: (data) => ({
        url: `/categories/${data.category_id}/&sort_order =${data.sort_order}`,
        method: "PUT",
        body: {
          id: data.id,
          name: data.name,
          level_nesting: data.level_nesting,
          sort: data.sort,
          parent_id: data.parent_id,
        },
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useChangeSorOrderCategoryMutation,
} = userApi;
