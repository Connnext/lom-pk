import { useFormData } from "hooks/useFormData";
import React from "react";
import { useLocation } from "react-router-dom";
import { useCurrentUserQuery } from "./../../../redux/services/userService";
import Spinner from "../spinners/Spinner";
import InfoText from "../text/InfoText";
import FormInput from "../inputs/FormInput";
import { ACCOUNT_ROUTE } from "utils/constants";

export default function PersonalData() {
  const location = useLocation();
  const isAccountPage = location.pathname === ACCOUNT_ROUTE;
  const { data: currentUserData, isLoading } = useCurrentUserQuery();
  const fieldsToValidate = isAccountPage
    ? []
    : ["phone", "surname", "name", "patronymic"];

  const {
    userData,
    password,
    confirmPassword,
    errors,
    dirty,
    handleInputChange,
    handlePasswordChange,
    handleConfirmChange,
    handleBlur,
  } = useFormData(currentUserData, fieldsToValidate);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <InfoText subtitle="Укажите ваши личные данные" />
      <form className="russian-post-form">
        {isAccountPage && (
          <>
            <div className="account__mail">
              <div className="form__input--title">{"Почта:"}</div>
              <div className="form-input">{currentUserData?.email}</div>
            </div>
            <FormInput
              title="Новый пароль:"
              className="form-input"
              type="password"
              placeholder="abc1234"
              name="password"
              value={password}
              onBlur={handleBlur}
              error={dirty.password && errors.password}
              onChange={handlePasswordChange}
            />
            <FormInput
              title="Подтвердите пароль:"
              className="form-input"
              name="confirmPassword"
              type="password"
              placeholder="abc1234"
              value={confirmPassword}
              onBlur={handleBlur}
              error={dirty.confirmPassword && errors.confirmPassword}
              onChange={handleConfirmChange}
            />
          </>
        )}

        <FormInput
          title="Телефон:"
          className="form-input"
          type="text"
          placeholder="8 (812) 957-97-56"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
        <FormInput
          title="Фамилия:"
          className="form-input"
          type="text"
          placeholder="Иванов"
          name="surname"
          value={userData.surname}
          onChange={handleInputChange}
        />
        <FormInput
          title="Имя:"
          className="form-input"
          type="text"
          placeholder="Иван"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <FormInput
          title="Отчество:"
          className="form-input"
          type="text"
          placeholder="Иванович"
          name="patronymic"
          value={userData.patronymic}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
