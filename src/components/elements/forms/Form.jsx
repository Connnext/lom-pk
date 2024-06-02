import React from "react";
import { useSelector } from "react-redux";
import Modal from "./../modals/modal/Modal";
import Login from "components/modules/auth/login/Login";
import Register from "components/modules/auth/register/Register";
import RecoverPassword from "components/modules/auth/recoverPassword/RecoverPassword";
import ConfirmEmail from "components/modules/auth/confirmEmail/ConfirmEmail";
import EmptyBasket from "../modals/emptyBasket/EmptyBasket";
import "./form.css";

const Form = () => {
  const formType = useSelector((state) => state.modal.formType);
  return (
    <Modal>
      <div className="form-wrapper">
        {formType === "login" && <Login />}
        {formType === "register" && <Register />}
        {formType === "recoverPassword" && <RecoverPassword />}
        {formType === "confirmEmail" && <ConfirmEmail />}
        {formType === "emptyBasket" && <EmptyBasket />}
      </div>
    </Modal>
  );
};

export default Form;
