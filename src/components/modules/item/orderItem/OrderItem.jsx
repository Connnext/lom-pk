import React from "react";
import { useGetSingleProductQuery } from "./../../../../redux/services/productService";

export default function OrderItem({ product_id, amount, price }) {
  const { data: item } = useGetSingleProductQuery(product_id);
  console.log(item);
  const totalPrice = price * amount;

  return (
    <div className="order__item">
      <h3 className="order__item--title">
        {amount} x {item?.category_name}{" "}
        {item?.title[0].toLowerCase() + item?.title.slice(1)}{" "}
        {item?.brand[0].toLowerCase() + item?.brand.slice(1)}
      </h3>
      <p className="order__item--total">{totalPrice}₽</p>
    </div>
  );
}
