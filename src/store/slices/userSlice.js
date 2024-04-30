import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    registerUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser(state) {
      state.user = null;
      state.isAuthenticated = false;
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

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/api/login", userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
