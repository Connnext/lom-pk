import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDeliveryValid } from "./../../../redux/store/slices/userSlice";
import InfoText from "../text/InfoText";
import FormInput from "../inputs/FormInput";
import { useCurrentUserQuery } from "./../../../redux/services/userService";
import { setUserData } from "./../../../redux/store/slices/userSlice";
import Spinner from "../spinners/Spinner";
import { useLocation } from "react-router-dom";

export default function DeliveryData() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isOrderPage = location.pathname === "/order";
  const userData = useSelector((state) => state.user.userData);
  const { data: currentUserData, isLoading } = useCurrentUserQuery();

  useEffect(() => {
    if (isOrderPage) {
      const isFormValid =
        userData.area.trim() !== "" &&
        userData.region.trim() !== "" &&
        userData.city.trim() !== "" &&
        userData.street.trim() !== "" &&
        userData.num_of_house.trim() !== "" &&
        userData.postcode.trim() !== "";
      dispatch(orderDeliveryValid(isFormValid));
    }
  }, [userData, isOrderPage, dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUserData({
        ...userData,
        [name]: value,
      })
    );
  };

  if (isLoading || !currentUserData) {
    return <Spinner />;
  }

  return (
    <div>
      <InfoText subtitle="Укажите ваши личные данные для доставки" />
      <form className="russian-post-form">
        <FormInput
          title="Район:"
          className="form-input"
          type="text"
          placeholder="Кировский район"
          name="area"
          value={currentUserData?.area || ""}
          onChange={handleInputChange}
        />
        <FormInput
          title="Регион:"
          className="form-input"
          type="text"
          placeholder="Ленинградская область"
          name="region"
          value={currentUserData?.region || ""}
          onChange={handleInputChange}
        />
        <FormInput
          title="Город:"
          className="form-input"
          type="text"
          placeholder="Санкт-Петербург"
          name="city"
          value={currentUserData?.city || ""}
          onChange={handleInputChange}
        />
        <FormInput
          title="Улица:"
          className="form-input"
          type="text"
          placeholder="Привокзальная"
          name="street"
          value={currentUserData?.street || ""}
          onChange={handleInputChange}
        />
        <FormInput
          title="Номер дома:"
          className="form-input"
          type="text"
          placeholder="2"
          name="num_of_house"
          value={currentUserData?.houseNumber || ""}
          onChange={handleInputChange}
        />
        <FormInput
          title="Почтовый индекс:"
          className="form-input"
          type="text"
          placeholder="198412"
          name="postcode"
          value={currentUserData?.postcode || ""}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
