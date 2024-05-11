import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "./../redux/store/slices/userSlice";

export default function Account() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(logoutUser())}>Log out from email</button>
    </>
  );
}
