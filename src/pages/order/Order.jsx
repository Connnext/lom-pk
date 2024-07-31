import React, { useEffect, useState } from "react";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import {
  useGetBasketQuery,
  useOrderBasketMutation,
} from "./../../redux/services/basketService";
import { useNavigate } from "react-router-dom";
import OrderPochta from "components/elements/forms/orderForms/OrderPochta";
import OrderPickup from "components/elements/forms/orderForms/OrderPickup";
import OrderSelectForm from "components/elements/forms/orderForms/OrderSelectForm";
import OrderCdek from "components/elements/forms/orderForms/OrderCdek";
import OrderSum from "components/modules/orderSum/OrderSum";
import {
  setFormType,
  setShowModal,
} from "./../../redux/store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Form from "components/elements/forms/Form";
import "./order.css";
import { updateBasketItem } from "./../../redux/store/slices/userSlice";
import Spinner from "components/elements/spinners/Spinner";
import useBasketItem from "hooks/useBasketItem";
import VerticalDivider from "components/elements/dividers/verticalDivider/VerticalDivider";

export default function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const [orderBasket, { isLoading }] = useOrderBasketMutation();
  const [selectedOption, setSelectedOption] = useState("СДЭК");
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  const items = useSelector((state) => state.user.items);
  console.log(items);
  console.log(selectedItems);

  useEffect(() => {
    const is_auth = localStorage.getItem("is_auth") || is_auth_FromRedux;
    if (!is_auth) navigate("/");
  }, [navigate]);

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem("selectedItems");
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        if (Array.isArray(parsedItems)) {
          setSelectedItems(parsedItems);
        }
      }
    } catch (error) {
      console.error("Error parsing selected items from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (orderSubmitted) {
      dispatch(setShowModal(true));
      dispatch(setFormType("successOrder"));
      localStorage.removeItem("selectedItems");
      navigate("/");
    }
  }, [orderSubmitted, dispatch, navigate]);

  const handleSubmit = async (formData) => {
    try {
      await orderBasket({
        ...formData,
        ids: selectedItems.map((item) => item.product_id),
      });

      for (const item of selectedItems) {
        dispatch(updateBasketItem({ product_id: item.product_id, amount: 0 }));
      }
      // Очищаем selectedItems в локальном состоянии и localStorage
      setSelectedItems([]);
      localStorage.removeItem("selectedItems");

      setOrderSubmitted(true);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };
  return (
    <Layout>
      <InfoTitle title={"Оформление заказа"} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="order__info">
          <div className="order__main">
            <OrderSelectForm
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            {selectedOption === "СДЭК" && <OrderCdek />}
            {selectedOption === "Почта России" && <OrderPochta />}
            {selectedOption === "Наша доставка" && <OrderPochta />}
            {selectedOption === "Самовывоз" && <OrderPickup />}
          </div>
          <VerticalDivider hideAt={768} />
          <OrderSum selectedItems={selectedItems} handleSubmit={handleSubmit} />
        </div>
      )}
      {showModal ? <Form /> : ""}
    </Layout>
  );
}
