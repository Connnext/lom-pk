import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./../../redux/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import {
  successMessageLogout,
  successMessageSaveUserData,
} from "utils/messages";
import { useLogoutMutation } from "./../../redux/services/authService";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import { usePatchCurrentUserMutation } from "./../../redux/services/userService";
import FormButton from "components/elements/buttons/formButton/FormButton";
import PersonalData from "components/elements/forms/PersonalData";
import DeliveryData from "components/elements/forms/DeliveryData";
import Spinner from "components/elements/spinners/Spinner";
import "./account.css";
import SliderStocks from "components/elements/carousel/SliderStocks";
import SliderBrands from "components/elements/carousel/SliderBrands";
import VerticalDivider from "components/elements/dividers/verticalDivider/VerticalDivider";

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  useEffect(() => {
    const is_auth = localStorage.getItem("is_auth") || is_auth_FromRedux;
    if (!is_auth) navigate("/");
  }, [navigate]);
  const isValidPersonal = useSelector((state) => state.user.isValidPersonal);
  const [logout, { isLoading: isLoadingUserLogout }] = useLogoutMutation();
  const userData = useSelector((state) => state.user.userData);
  const [patchCurrentUser] = usePatchCurrentUserMutation();

  const handleSubmit = (userData) => {
    console.log(userData);
    const dataToSubmit = { ...userData };
    const password = localStorage.getItem("password__new");
    if (password?.length > 0) {
      dataToSubmit.password = password;
    }
    patchCurrentUser({
      ...dataToSubmit,
    });
    localStorage.removeItem("password__new");
  };
  const handleFormSubmit = () => {
    if (isValidPersonal) {
      handleSubmit(userData);
      successMessageSaveUserData();
    } else {
      console.log("Форма не валидна");
    }
  };
  const hadleLogout = () => {
    dispatch(logoutUser());
    logout();
    localStorage.removeItem("is_auth");
    localStorage.removeItem("is_verified");
    localStorage.removeItem("is_superuser");
    localStorage.removeItem("is_active");
    localStorage.removeItem("selectedItems");
    localStorage.removeItem("user_email_for_verify");
    localStorage.removeItem("token_for_reset_password");
    localStorage.removeItem("shipping_method");
    successMessageLogout();
    navigate("/");
  };
  return (
    <Layout>
      <SliderStocks />
      <InfoTitle title={"Настройки профиля"} />
      {isLoadingUserLogout ? (
        <Spinner />
      ) : (
        <div className="account">
          <div className="account__info">
            <div className="account__forms">
              <PersonalData />
              <VerticalDivider hideAt={768} />
              <DeliveryData />
            </div>
          </div>

          <div className="account__buttons">
            <FormButton
              onClick={handleFormSubmit}
              disabled={!isValidPersonal}
              text="Сохранить данные"
            />
            <button
              className="account__button--exit"
              onClick={() => hadleLogout()}
            >
              Выйти
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
