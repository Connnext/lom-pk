import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setUserData } from "./../../redux/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { successMessageLogout, successSaveChanges } from "utils/messages";
import { useLogoutMutation } from "./../../redux/services/authService";
import FormInput from "components/elements/inputs/FormInput";
import InfoText from "components/elements/text/InfoText";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import {
  useCurrentUserQuery,
  usePatchCurrentUserMutation,
} from "./../../redux/services/userService";
import FormButton from "components/elements/buttons/formButton/FormButton";
import PersonalData from "components/elements/forms/PersonalData";
import "./account.css";
import DeliveryData from "components/elements/forms/DeliveryData";

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValidPersonal = useSelector((state) => state.user.isValidPersonal);
  console.log(isValidPersonal);
  const [logout] = useLogoutMutation();
  const userData = useSelector((state) => state.user.userData);
  const { data: currentUserData, isLoading } = useCurrentUserQuery();
  const [patchCurrentUser] = usePatchCurrentUserMutation();
  console.log(currentUserData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUserData({
        ...userData,
        [name]: value,
      })
    );
    patchCurrentUser({
      [name]: value,
    });
  };
  // const handleFormSubmit = (data) => {
  //   console.log(data);
  //   patchCurrentUser(data);
  //   successSaveChanges();
  // };
  const handleSubmit = (userData) => {
    console.log(userData);
    patchCurrentUser({
      ...userData,
    });
  };
  const handleFormSubmit = () => {
    if (isValidPersonal) {
      handleSubmit(userData);
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
      <div className="container">
        <InfoTitle title={"Настройки профиля"} />
        <div className="account">
          <div className="account__info">
            <div className="account__forms">
              <PersonalData />
              <div
                style={{
                  borderLeft: "1px solid rgb(206, 212, 215)",
                  height: "auto",
                }}
              />
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
      </div>
    </Layout>
  );
}
