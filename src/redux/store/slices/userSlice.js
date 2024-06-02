import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.role = action.payload;
    },
    loginUser(state, action) {
      state.role = action.payload;
    },
    logoutUser(state) {
      state.role = null;
    },
    recoverPassword(state, action) {
      // Здесь можно добавить логику для обработки восстановления пароля
      // Например, отправка запроса на сервер для восстановления пароля
    },
  },
});

export const { loginUser, logoutUser, registerUser, recoverPassword } =
  userSlice.actions;

export default userSlice.reducer;
