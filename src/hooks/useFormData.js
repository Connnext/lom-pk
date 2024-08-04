import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderPersonalValid,
  orderDeliveryValid,
  setUserData,
} from "./../redux/store/slices/userSlice";
import { useLocation } from "react-router-dom";
import { ORDER_ROUTE } from "utils/constants";

export const useFormData = (currentUserData, initialFieldsToValidate) => {
  const location = useLocation();
  const selectDelivery = useSelector(
    (state) => state.user.userData.shipping_method
  );
  const isOrderPage = location.pathname === ORDER_ROUTE;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [dirty, setDirty] = useState({
    password: false,
    confirmPassword: false,
  });

  const [fieldsToValidate, setFieldsToValidate] = useState(
    initialFieldsToValidate
  );

  useEffect(() => {
    if (currentUserData) {
      dispatch(
        setUserData({
          phone: currentUserData.phone || "",
          surname: currentUserData.surname || "",
          name: currentUserData.name || "",
          patronymic: currentUserData.patronymic || "",
          email: currentUserData.email || "",
          area: currentUserData.area || "",
          region: currentUserData.region || "",
          city: currentUserData.city || "",
          street: currentUserData.street || "",
          num_of_house: currentUserData.num_of_house || "",
          postcode: currentUserData.postcode || null,
        })
      );
    }
  }, [currentUserData, dispatch]);

  useEffect(() => {
    const invalidFields = Object.entries(userData).reduce(
      (acc, [key, value]) => {
        if (fieldsToValidate.includes(key) && String(value).trim() === "") {
          if (key !== "area") {
            // Район не обязателен
            acc.push(key);
          }
        }
        return acc;
      },
      []
    );

    if (passwordChanged && password.length < 6 && password.length > 0)
      invalidFields.push("password");
    if (passwordChanged && password !== confirmPassword)
      invalidFields.push("confirmPassword");

    const isFormValid = invalidFields.length === 0;
    dispatch(orderPersonalValid(isFormValid));

    if (isOrderPage && selectDelivery !== "Самовывоз") {
      const isDeliveryValid =
        userData.region.trim() !== "" &&
        userData.city.trim() !== "" &&
        userData.street.trim() !== "" &&
        userData.num_of_house.trim() !== "" &&
        String(userData.postcode).trim() !== "";
      dispatch(orderDeliveryValid(isDeliveryValid));
    }
  }, [
    userData,
    fieldsToValidate,
    password,
    confirmPassword,
    passwordChanged,
    isOrderPage,
    selectDelivery,
    dispatch,
  ]);

  const handleInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      dispatch(setUserData({ [name]: value }));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (event) => {
      const { value } = event.target;
      setPassword(value);
      setPasswordChanged(true);
      const newErrors = { ...errors };

      if (value.length < 6 && value.length > 0) {
        newErrors.password = "Пароль должен быть больше 6 символов";
      } else {
        newErrors.password = "";
      }
      if (confirmPassword && value !== confirmPassword) {
        newErrors.confirmPassword = "Пароли не совпадают";
      } else {
        newErrors.confirmPassword = "";
      }
      setErrors(newErrors);
    },
    [confirmPassword, errors]
  );

  useEffect(() => {
    localStorage.setItem("password__new", password);
  }, [password]);

  const handleConfirmChange = useCallback(
    (event) => {
      const { value } = event.target;
      setConfirmPassword(value);
      const newErrors = { ...errors };
      if (passwordChanged && (!password || password !== value)) {
        newErrors.confirmPassword = password
          ? "Пароли не совпадают"
          : "Введите пароль сначала";
      } else {
        newErrors.confirmPassword = "";
      }
      setErrors(newErrors);
    },
    [errors, password, passwordChanged]
  );

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    setDirty((prevDirty) => ({ ...prevDirty, [name]: true }));
  }, []);

  return {
    userData,
    password,
    confirmPassword,
    errors,
    dirty,
    handleInputChange,
    handlePasswordChange,
    handleConfirmChange,
    handleBlur,
  };
};
