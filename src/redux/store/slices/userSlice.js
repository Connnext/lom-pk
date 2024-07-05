import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  is_superuser: false,
  is_verified: false,
  is_active: false,
  is_auth: false,
  isValidDelivery: false,
  isValidPersonal: false,
  userData: {
    shipping_method: "",
    email: "",
    password: "",
    phone: "",
    surname: "",
    name: "",
    patronymic: "",
    area: "",
    region: "",
    city: "",
    street: "",
    num_of_house: "",
    postcode: "",
    ids: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser(state) {
      state.is_verified = true;
      state.is_active = true;
      state.is_auth = true;
    },
    logoutUser(state) {
      state.is_auth = false;
    },
    setUserData(state, action) {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
    setBasket(state, action) {
      state.items = action.payload.items;
    },
    updateBasketItem(state, action) {
      const { product_id, amount } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.product_id === product_id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].amount = amount;
      } else {
        state.items.push({ product_id, amount });
      }
    },
    orderDeliveryValid(state, action) {
      state.isValidDelivery = action.payload;
    },
    orderPersonalValid(state, action) {
      state.isValidPersonal = action.payload;
    },
  },
});

export const {
  authUser,
  logoutUser,
  setUserData,
  setBasket,
  updateBasketItem,
  orderDeliveryValid,
  orderPersonalValid,
} = userSlice.actions;

export default userSlice.reducer;
