import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  limit: 24,
  category: "",
  searchName: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state) => {
      state.limit += 24;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    searchName: (state, action) => {
      state.searchName = action.payload;
    },
  },
});
export const { addProducts, changeCategory, searchName } = productSlice.actions;
export default productSlice.reducer;
