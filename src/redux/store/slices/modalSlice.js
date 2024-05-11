import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  formType: "login",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
    setFormType(state, action) {
      state.formType = action.payload;
    },
  },
});

export const { setShowModal, setFormType } = modalSlice.actions;

export default modalSlice.reducer;
