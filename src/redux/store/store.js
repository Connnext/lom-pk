import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react"; // импортируем setupListeners
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import { userApi } from "./../../redux/services/userService";

const rootReducer = combineReducers({
  user: userSlice,
  modal: modalSlice,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
// setupListeners(store);
