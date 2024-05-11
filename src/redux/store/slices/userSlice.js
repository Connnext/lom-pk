import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  lkUser: [],
  loading: false,
  auth: false,
  authAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload;
    },
    loginUser(state, action) {
      state.user = action.payload;
      state.auth = true;
      state.lkUser = action.payload;
    },
    logoutUser(state) {
      state.user = null;
      state.auth = false;
      state.authAdmin = false;
      state.lkUser = [];
    },
    loginAdmin(state, action) {
      state.user = action.payload;
      state.auth = true;
      state.authAdmin = true;
      state.lkUser = action.payload;
    },
    recoverPassword(state, action) {
      // Здесь можно добавить логику для обработки восстановления пароля
      // Например, отправка запроса на сервер для восстановления пароля
    },
  },
});

export const {
  loginUser,
  logoutUser,
  registerUser,
  recoverPassword,
  loginAdmin,
} = userSlice.actions;

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
