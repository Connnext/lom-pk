import React from "react";
import Form from "components/elements/forms/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAdmin,
  loginUser,
} from "./../../../../redux/store/slices/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthMutation } from "./../../../../redux/services/userService";

export default function Login() {
  // const { data = [], isLoading } = useGetUsersQuery();
  const [auth, { isLoading }] = useAuthMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const isAuth = useSelector((state) => state.user.auth);
  const isAuthAdmin = useSelector((state) => state.user.authAdmin);
  const handleLogin = async (data) => {
    // if (isAuth === true || isAuthAdmin === true) {
    //   // errorUserLogIn()
    //   console.log("error");
    // }
    console.log(data);
    const username = data.email;
    const password = data.password;
    console.log(username);
    try {
      await auth({ username, password }).unwrap();
      // await triggerCurrentQuery()
      dispatch(loginUser(data));
      navigate(fromPage);
    } catch (err) {
      // if (hasErrorField(err)) {
      //   setError(err.data.error)
      // }
      console.log(err);
    }
  };
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return <Form handleSubmit={handleLogin} />;
}
