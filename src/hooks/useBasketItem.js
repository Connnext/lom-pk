import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateBasketMutation } from "./../redux/services/basketService";
import { updateBasketItem } from "./../redux/store/slices/userSlice";
import {
  errorMessageAddToBasket,
  success,
  successDecrement,
  successDelete,
  successIncrement,
} from "utils/messages";

const useBasketItem = (product_id, initialCount = 0) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(initialCount);
  const [added, setAdded] = useState(initialCount > 0);
  const [updateBasket] = useUpdateBasketMutation();
  const items = useSelector((state) => state.user.items);
  const item = items.find((item) => item.product_id === product_id);
  useEffect(() => {
    if (item) {
      setCount(item.amount);
      setAdded(item.amount > 0);
    } else {
      setCount(initialCount);
      setAdded(initialCount > 0);
    }
  }, [item, initialCount]);

  const updateItemCount = async (newCount) => {
    try {
      await updateBasket({ product_id, amount: newCount });
      dispatch(updateBasketItem({ product_id, amount: newCount }));
      setCount(newCount);
      setAdded(newCount > 0);
    } catch (error) {
      errorMessageAddToBasket();
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    successIncrement();
    updateItemCount(newCount);
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      newCount === 0 ? successDelete() : successDecrement();
      updateItemCount(newCount);
    }
  };

  const handleDeleteItem = async () => {
    successDelete();
    await updateItemCount(0);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newCount = parseInt(value, 10);
      if (isNaN(newCount)) {
        errorMessageAddToBasket();
        updateItemCount(0);
      } else if (newCount < 1) {
        errorMessageAddToBasket();
        updateItemCount(newCount);
      } else {
        success("Количество товара обновлено");
        updateItemCount(newCount);
      }
    }
  };

  return {
    count,
    added,
    handleIncrement,
    handleDecrement,
    handleDeleteItem,
    handleInputChange,
  };
};

export default useBasketItem;
