import { api } from "./api";

export const productsApi = api.injectEndpoints({
  // reducerPath: "productsApi",
  tagTypes: ["Products"],
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products/",
        method: "POST",
        body: {
          title: data.title,
          preview_img: data.preview_img,
          category_id: data.category_id,
          short_description: data.short_description,
          description: data.description,
          sort: data.sort,
          brand: data.brand,
          old_price: data.old_price,
          price: data.price,
          is_hit: data.is_hit,
          article: data.article,
          properties: data.properties,
          images: data.images,
          files: data.files,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    getProducts: build.query({
      query: (data) => {
        let queryObject = {
          url: "/products/",
          headers: {
            accept: "application/json",
          },
        };
        if (data.page_limit) {
          queryObject.url += `?page_limit=${data.page_limit}`;
        }
        if (data.min_price) {
          queryObject.url += `&min_price=${data.min_price}`;
        }
        if (data.max_price) {
          queryObject.url += `&max_price=${data.max_price}`;
        }
        if (data.page) {
          queryObject.url += `&page=${data.page}`;
        }
        if (data.brands) {
          queryObject.url += `&brands=${data.brands}`;
        }
        if (data.categories) {
          queryObject.url += `&categories=${data.categories}`;
        }
        if (data.is_hit) {
          queryObject.url += `&is_hit=${data.is_hit}`;
        }
        if (data.is_new) {
          queryObject.url += `&is_new=${data.is_new}`;
        }
        if (data.is_sale) {
          queryObject.url += `&is_sale=${data.is_sale}`;
        }
        if (data.sort_by && data.sort_order) {
          queryObject.url += `&sort_by=${data.sort_by}&sort_order=${data.sort_order}`;
        }
        return queryObject;
      },
      providesTags: ["Products"],
    }),

    updateProduct: build.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: "PUT",
        body: {
          title: data.title,
          preview_img: data.preview_img,
          category_id: data.category_id,
          short_description: data.short_description,
          description: data.description,
          sort: data.sort,
          brand: data.brand,
          old_price: data.old_price,
          price: data.price,
          is_hit: data.is_hit,
          article: data.article,
          properties: data.properties,
          images: data.images,
          files: data.files,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: build.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: "DELETE",
        body: {
          title: data.title,
          preview_img: data.preview_img,
          category_id: data.category_id,
          short_description: data.short_description,
          description: data.description,
          sort: data.sort,
          brand: data.brand,
          old_price: data.old_price,
          price: data.price,
          is_hit: data.is_hit,
          article: data.article,
          properties: data.properties,
          images: data.images,
          files: data.files,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
    search: build.query({
      query: (data) => {
        let queryObject = {
          url: `/products/?query=${data.query}`,
          headers: {
            accept: "application/json",
          },
        };
        if (data.page_limit) {
          queryObject.url += `&page_limit=${data.page_limit}`;
        }
        if (data.page) {
          queryObject.url += `&page=${data.page}`;
        }
        return queryObject;
      },
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useSearchQuery,
} = productsApi;
