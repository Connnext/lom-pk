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
    setSortParams: (state, action) => {
      state.sortParams = { ...state.sortParams, ...action.payload };
      state.limit = 24;
    },
    setFilterParams: (state, action) => {
      state.filterParams = { ...state.filterParams, ...action.payload };
      state.limit = 24;
    },
    resetProductState: () => {
      return initialState;
    },
    resetCategories: (state) => {
      state.filterParams.categories = [];
    },
  },
});

export const {
  addProducts,
  setSearchName,
  setSortParams,
  setFilterParams,
  resetProductState,
  resetCategories,
} = productSlice.actions;
export default productSlice.reducer;
