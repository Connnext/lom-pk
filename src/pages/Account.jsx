import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "./../redux/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hadleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <>
      <button onClick={() => hadleLogout()}>Log out</button>
    </>
  );
}
