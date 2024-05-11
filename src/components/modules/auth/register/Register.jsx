import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch } from "react-redux";
import { registerUser } from "./../../../../redux/store/slices/userSlice";
import { useSignUpMutation } from "./../../../../redux/services/userService";

export default function Register() {
  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useDispatch();
  // const handleRegister = ({ email, password }) => {
  //   dispatch(registerUser({ email, password }));
  // };
  const handleRegister = async (data) => {
    console.log(data);
    try {
      const response = await signUp(data).unwrap();

      // Need correct role

      // const role = response.data.role;
      // role === "admin"
      //   ? dispatch(loginAdmin(data))
      //   : (dispatch(loginUser(data)), successMessageCustomer());

      // Optional
      console.log(data);
      dispatch(registerUser(data));
      console.log("good");
      // successMessageCustomer();
    } catch (err) {
      // if (hasErrorField(err)) {
      //   setError(err.data.error)
      // }
      console.log("bad");
      console.log(err);
      // errorMessage();
    }
  };
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return <Form handleSubmit={handleRegister} />;
}
