import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
