import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserQuery } from "./../../../redux/services/userService";
import {
  errorWithText,
  successMessageAdmin,
  successMessageCustomer,
} from "utils/messages";
import { errorMessage } from "utils/messages";
import Spinner from "components/elements/spinners/Spinner";

export default function Auth() {
  const navigate = useNavigate();
  const { data: dataUser, isLoading, isError } = useCurrentUserQuery();

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("is_verified", dataUser.is_verified);
      localStorage.setItem("is_superuser", dataUser.is_superuser);
      localStorage.setItem("is_active", dataUser.is_active);
      localStorage.setItem("is_auth", true);
      dataUser.is_superuser ? successMessageAdmin() : successMessageCustomer();
      navigate("/");
    }
    if (isError) {
      console.error("Ошибка при загрузке данных пользователя");
      errorWithText("Произошла ошибка при загрузке данных пользователя");
    }
  }, [dataUser, isError, navigate]);

  if (isLoading) return <Spinner />;

  return null;
}
