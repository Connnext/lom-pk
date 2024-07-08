import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoText from "../text/InfoText";
import FormInput from "../inputs/FormInput";
import { useCurrentUserQuery } from "./../../../redux/services/userService";
import Spinner from "../spinners/Spinner";
import { useLocation } from "react-router-dom";
import { ORDER_ROUTE } from "utils/constants";
import { useFormData } from "hooks/useFormData";

export default function DeliveryData() {
  const location = useLocation();
  const isOrderPage = location.pathname === ORDER_ROUTE;
  const { data: currentUserData, isLoading } = useCurrentUserQuery();

  const fieldsToValidate = isOrderPage
    ? ["region", "city", "street", "num_of_house", "postcode"]
    : [];

  const { userData, handleInputChange } = useFormData(
    currentUserData,
    fieldsToValidate
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <InfoText subtitle="Укажите ваши личные данные для доставки" />
      <form className="russian-post-form">
        <FormInput
          title="Район (необязательно):"
          className="form-input"
          type="text"
          placeholder="Кировский район"
          name="area"
          value={userData.area}
          onChange={handleInputChange}
        />
        <FormInput
          title="Регион:"
          className="form-input"
          type="text"
          placeholder="Ленинградская область"
          name="region"
          value={userData.region}
          onChange={handleInputChange}
        />
        <FormInput
          title="Город:"
          className="form-input"
          type="text"
          placeholder="Санкт-Петербург"
          name="city"
          value={userData.city}
          onChange={handleInputChange}
        />
        <FormInput
          title="Улица:"
          className="form-input"
          type="text"
          placeholder="Привокзальная"
          name="street"
          value={userData.street}
          onChange={handleInputChange}
        />
        <FormInput
          title="Номер дома:"
          className="form-input"
          type="text"
          placeholder="2"
          name="num_of_house"
          value={userData.num_of_house}
          onChange={handleInputChange}
        />
        <FormInput
          title="Почтовый индекс:"
          className="form-input"
          type="text"
          placeholder="198412"
          name="postcode"
          value={userData.postcode}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
