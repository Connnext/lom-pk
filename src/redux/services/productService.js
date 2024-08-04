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
          is_new: data.is_new,
          is_sale: data.is_sale,
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

        const appendParam = (param, value) => {
          if (queryObject.url.includes("?")) {
            queryObject.url += `&${param}=${value}`;
          } else {
            queryObject.url += `?${param}=${value}`;
          }
        };

        if (data.page_limit) appendParam("page_limit", data.page_limit);
        if (data.min_price) appendParam("min_price", data.min_price);
        if (data.max_price) appendParam("max_price", data.max_price);
        if (data.page) appendParam("page", data.page);
        if (data.brands)
          data.brands.forEach((brand) => appendParam("brands", brand));
        if (data.categories)
          data.categories.forEach((category) =>
            appendParam("categories", category)
          );
        if (data.is_hit) appendParam("is_hit", data.is_hit);
        if (data.is_new) appendParam("is_new", data.is_new);
        if (data.is_sale) appendParam("is_sale", data.is_sale);
        if (data.query) appendParam("query", data.query);
        if (data.sort_by && data.sort_order) {
          appendParam("sort_by", data.sort_by);
          appendParam("sort_order", data.sort_order);
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
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
} = productsApi;
