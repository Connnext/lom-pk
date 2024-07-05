import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { successMessageSignUp } from "utils/messages";
import { useVerifyMutation } from "../../redux/services/authService";
import {
  setFormType,
  setShowModal,
} from "./../../redux/store/slices/modalSlice";

export default function Confirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const [verify] = useVerifyMutation();

  useEffect(() => {
    const handleTokenVerification = async () => {
      if (token) {
        try {
          await verify(token);
          dispatch(setShowModal(true));
          dispatch(setFormType("login"));
          successMessageSignUp();
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      }
    };

    handleTokenVerification();
  }, [token, verify, dispatch]);
  return null;
}
