import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 24,
  searchName: "",
  sortParams: {
    sort_by: "price",
    sort_order: "asc",
    is_hit: false,
    is_new: false,
    is_sale: false,
  },
  filterParams: {
    min_price: "",
    max_price: "",
    brands: [],
    categories: [],
  },
};

// Попробуем загрузить сохраненные данные из localStorage
const savedState = localStorage.getItem("product");
if (savedState) {
  const parsedState = JSON.parse(savedState);
  Object.assign(initialState, parsedState);
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state) => {
      state.limit += 24;
    },
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSortParams: (state, action) => {
      state.sortParams = { ...state.sortParams, ...action.payload };
      state.limit = 24;
    },
    setFilterParams: (state, action) => {
      state.filterParams = {
        ...state.filterParams,
        ...action.payload,
        brands: Array.isArray(action.payload.brands)
          ? [...action.payload.brands]
          : state.filterParams.brands,
        categories: Array.isArray(action.payload.categories)
          ? [...action.payload.categories]
          : state.filterParams.categories,
      };
      state.limit = 24;
    },
    resetProductState: () => {
      return initialState;
    },
    resetPrice: (state) => {
      state.filterParams.min_price = "";
      state.filterParams.max_price = "";
    },
    resetCategories: (state) => {
      state.filterParams.categories = [];
    },
    resetBrands: (state) => {
      state.filterParams.brands = [];
    },
    resetSearchName: (state) => {
      state.searchName = "";
    },
  },
});

export const {
  addProducts,
  setLimit,
  setSearchName,
  setSortParams,
  setFilterParams,
  resetProductState,
  resetPrice,
  resetCategories,
  resetBrands,
  resetSearchName,
} = productSlice.actions;
export default productSlice.reducer;
