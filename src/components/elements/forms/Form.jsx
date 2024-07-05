import React from "react";
import { useSelector } from "react-redux";
import Modal from "./../modals/modal/Modal";
import Login from "components/modules/auth/login/Login";
import Register from "components/modules/auth/register/Register";
import RecoverPassword from "components/modules/auth/recoverPassword/RecoverPassword";
import ConfirmEmail from "components/modules/auth/confirmEmail/ConfirmEmail";
import EmptyBasket from "../modals/emptyBasket/EmptyBasket";
import OrderCall from "../modals/orderCall/OrderCall";
import SuccessOrder from "../modals/successOrder/SuccessOrder";
import RequestVerify from "../modals/requestVerify/RequestVerify";
import ResetPassword from "components/modules/auth/resetPassword/ResetPassword";
import "./form.css";

export default function Form() {
  const formType = useSelector((state) => state.modal.formType);
  console.log(formType);
  return (
    <Modal>
      <div className="form-wrapper">
        {formType === "login" && <Login />}
        {formType === "register" && <Register />}
        {formType === "recoverPassword" && <RecoverPassword />}
        {formType === "confirmEmail" && <ConfirmEmail />}
        {formType === "emptyBasket" && <EmptyBasket />}
        {formType === "orderCall" && <OrderCall />}
        {formType === "successOrder" && <SuccessOrder />}
        {formType === "requestVerify" && <RequestVerify />}
        {formType === "resetPassword" && <ResetPassword />}
      </div>
    </Modal>
  );
}
