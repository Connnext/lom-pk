import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "utils/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API}`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
