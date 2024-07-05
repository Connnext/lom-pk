import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPersonalValid } from "./../redux/store/slices/userSlice";
import { setUserData } from "./../redux/store/slices/userSlice";
import { useLocation } from "react-router-dom";
import { ORDER_ROUTE } from "utils/constants";

export const useFormData = (currentUserData, fieldsToValidate) => {
  const location = useLocation();
  const isOrderPage = location.pathname === ORDER_ROUTE;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const isValidPersonal = useSelector((state) => state.user.isValidPersonal);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    password: "Пароль не может быть пустым",
    confirmPassword: "Пароли должны совпадать",
  });
  const [dirty, setDirty] = useState({
    password: false,
    confirmPassword: false,
  });
  console.log(userData);

  useEffect(() => {
    if (currentUserData) {
      dispatch(
        setUserData({
          phone: currentUserData.phone || "",
          surname: currentUserData.surname || "",
          name: currentUserData.name || "",
          patronymic: currentUserData.patronymic || "",
          email: currentUserData.email || "",
        })
      );
    }
  }, [currentUserData, dispatch]);

  useEffect(() => {
    const invalidFields = Object.entries(userData).reduce(
      (acc, [key, value]) => {
        if (fieldsToValidate.includes(key) && value.trim() === "") {
          acc.push(key);
        }
        return acc;
      },
      []
    );

    if (fieldsToValidate.includes("password") && password.length < 6)
      invalidFields.push("password");
    if (
      fieldsToValidate.includes("confirmPassword") &&
      password !== confirmPassword
    )
      invalidFields.push("confirmPassword");

    console.log("Invalid fields:", invalidFields);

    const isFormValid = invalidFields.length === 0;
    dispatch(orderPersonalValid(isFormValid));
  }, [userData, fieldsToValidate, password, confirmPassword, dispatch]);

  const handleInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      dispatch(setUserData({ [name]: value }));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setPassword(value);
      const newErrors = { ...errors };

      if (value.length < 6) {
        newErrors.password = "Пароль должен быть больше 6 символов";
      } else if (!value) {
        newErrors.password = "Пароль не может быть пустым";
      } else {
        newErrors.password = "";
      }

      if (confirmPassword && value !== confirmPassword) {
        newErrors.confirmPassword = "Пароли не совпадают";
      } else {
        newErrors.confirmPassword = "";
      }

      setErrors(newErrors);
      if (!newErrors.password && !newErrors.confirmPassword) {
        dispatch(setUserData({ [name]: value }));
      }
    },
    [confirmPassword, dispatch, errors]
  );

  const handleConfirmChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setConfirmPassword(value);
      setErrors({
        ...errors,
        confirmPassword: password !== value ? "Пароли не совпадают" : "",
      });
    },
    [errors, password]
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
