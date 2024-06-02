import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import productSlice from "./slices/productSlice";
import { api } from "./../../redux/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { userApi } from "./../../redux/services/userService";

const rootReducer = combineReducers({
  user: userSlice,
  modal: modalSlice,
  product: productSlice,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
