import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAdmin,
  loginUser,
} from "./../../../../redux/store/slices/userSlice";
import { useAuthMutation } from "./../../../../redux/services/userService";
import { errorMessage, successMessageCustomer } from "utils/messages";

export default function Login() {
  const [auth, { isLoading }] = useAuthMutation();
  const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.user.auth);
  // const isAuthAdmin = useSelector((state) => state.user.authAdmin);
  const handleLogin = async (data) => {
    try {
      const response = await auth(data).unwrap();

      // Need correct role

      // const role = response.data.role;
      // role === "admin"
      //   ? dispatch(loginAdmin(data))
      //   : (dispatch(loginUser(data)), successMessageCustomer());

      // Optional

      dispatch(loginUser(data));
      successMessageCustomer();
    } catch (err) {
      // if (hasErrorField(err)) {
      //   setError(err.data.error)
      // }
      console.log(err);
      errorMessage();
    }
  };
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return <Form handleSubmit={handleLogin} />;
}
