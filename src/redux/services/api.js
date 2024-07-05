import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "utils/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API}`,
  credentials: "include", // Включаем отправку cookies
});

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
