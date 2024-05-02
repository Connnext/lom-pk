import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showRegister: false,
  showRecoverPassword: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
    setShowRegister(state, action) {
      state.showRegister = action.payload;
    },
    setShowRecoverPassword(state, action) {
      state.showRecoverPassword = action.payload;
    },
  },
});

export const { setShowModal, setShowRegister, setShowRecoverPassword } =
  modalSlice.actions;

export default modalSlice.reducer;
