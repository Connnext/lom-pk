import React from "react";
import {
  useGetBasketQuery,
  useUpdateBasketMutation,
} from "./../../../../redux/services/basketService";
import { updateBasketItem } from "./../../../../redux/store/slices/userSlice";
import { useDispatch } from "react-redux";
import "./clearBasketItemsButton.css";

export default function ClearBasketItemsButton({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  const [updateBasket] = useUpdateBasketMutation();
  const handleClearBasket = () => {
    data?.items.map((item) => {
      updateBasket({ product_id: item.product_id, amount: 0 }).then(() => {
        dispatch(updateBasketItem({ product_id: item.product_id, amount: 0 }));
      });
    });
  };
  return (
    <button onClick={handleClearBasket} className="clear__basket--button">
      Очистить корзину
    </button>
  );
}
