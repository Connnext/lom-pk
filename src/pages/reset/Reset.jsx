import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  setFormType,
  setShowModal,
} from "./../../redux/store/slices/modalSlice";
import { useEffect } from "react";
import Form from "components/elements/forms/Form";

export default function Reset() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  localStorage.setItem("token_for_reset_password", token);
  useEffect(() => {
    dispatch(setShowModal(true));
    dispatch(setFormType("resetPassword"));
    navigate("/");
  }, [dispatch]);

  return <Form />;
}
