import { api } from "./api";

export const userApi = api.injectEndpoints({
  // reducerPath: "basketApi",
  tagTypes: ["Basket"],
  endpoints: (build) => ({
    getBasket: build.query({
      query: () => ({
        url: `/baskets/`,
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: ["Basket"],
    }),
    updateBasket: build.mutation({
      query: (data) => ({
        url: "/baskets/",
        method: "PUT",
        body: {
          product_id: data.product_id,
          amount: data.amount,
        },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Basket"],
    }),
    orderBasket: build.mutation({
      query: (data) => ({
        url: `/baskets/order/`,
        method: "POST",
        body: {
          shipping_method: data.shipping_method,
          phone: data.phone,
          name: data.name,
          surname: data.surname,
          patronymic: data.patronymic,
          area: data.area || "-",
          region: data.region || "-",
          city: data.city || "-",
          street: data.street || "-",
          num_of_house: data.num_of_house || "-",
          postcode: data.postcode || null,
          ids: data.ids || [],
        },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Basket"],
    }),
  }),
});

export const {
  useGetBasketQuery,
  useUpdateBasketMutation,
  useOrderBasketMutation,
} = userApi;
