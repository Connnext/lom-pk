import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import FormButton from "components/elements/buttons/formButton/FormButton";
import FormInput from "components/elements/inputs/FormInput";
import { useOrderCallMutation } from "./../../../../redux/services/userService";
import { errorOrderCall, successOrderCall } from "utils/messages";
import "./orderCall.css";

export default function OrderCall() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [formValid, setFormValid] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
  });

  const [orderCall, { data, isLoading, error }] = useOrderCallMutation();

  useEffect(() => {
    validateForm();
  }, [form]);

  const handleToHome = (event) => {
    if (event) event.stopPropagation();
    dispatch(setShowModal(false));
    dispatch(setFormType(null));
    navigate("/");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    validateForm();
    if (formValid) {
      try {
        await orderCall({ name: form.name, phone: form.phone }).unwrap();
        handleToHome();
        successOrderCall();
      } catch (err) {
        errorOrderCall();
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (touched.name && !form.name.trim()) {
      newErrors.name = "Имя не может быть пустым";
      isValid = false;
    } else newErrors.name = "";

    if (touched.phone && !form.phone.trim()) {
      newErrors.phone = "Номер не может быть пустым";
      isValid = false;
    } else newErrors.phone = "";

    setErrors(newErrors);
    setFormValid(isValid);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
    validateForm();
  };

  return (
    <>
      <h2 className="form__title">Запрос звонка</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <FormInput
          title="Имя:"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          placeholder="Ваше имя"
        />
        <FormInput
          title="Номер телефона:"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          placeholder="8 (812) 957-97-56"
        />
        <p className="order__call--text">
          Пожалуйста, оставьте свои контактные данные, чтобы наш менеджер мог с
          вами связаться.
        </p>

        <FormButton disabled={!formValid} text="Оставить заявку" />
      </form>
    </>
  );
}
