import React, { useEffect } from "react";
import InfoText from "components/elements/text/InfoText";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./../../../../redux/store/slices/userSlice";

export default function OrderSelectForm({ selectedOption, setSelectedOption }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    const valueShippingMethod = localStorage.getItem("shipping_method");
    if (
      valueShippingMethod &&
      userData.shipping_method !== valueShippingMethod
    ) {
      dispatch(
        setUserData({
          ...userData,
          shipping_method: valueShippingMethod,
        })
      );
      setSelectedOption(valueShippingMethod);
    }
  }, [dispatch, userData, setSelectedOption]);

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUserData({
        ...userData,
        [name]: value,
      })
    );
    localStorage.setItem(name, value);
    setSelectedOption(value);
  };

  console.log(userData);

  return (
    <div>
      <InfoText subtitle="Выберете способ получения товара" />
      <div className="order__wrapper">
        <label className="order__label">
          <input
            type="radio"
            name="shipping_method"
            value="СДЭК"
            checked={selectedOption === "СДЭК"}
            onChange={handleOptionChange}
            className="order__input"
          />
          СДЭК
        </label>
        <label className="order__label">
          <input
            type="radio"
            name="shipping_method"
            value="Почта России"
            checked={selectedOption === "Почта России"}
            onChange={handleOptionChange}
            className="order__input"
          />
          Почта России
        </label>
        <label className="order__label">
          <input
            type="radio"
            name="shipping_method"
            value="Самовывоз"
            checked={selectedOption === "Самовывоз"}
            onChange={handleOptionChange}
            className="order__input"
          />
          Самовывоз
        </label>
      </div>
    </div>
  );
}
