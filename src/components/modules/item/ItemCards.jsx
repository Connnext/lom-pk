import React from "react";
import ItemCard from "./itemCard/ItemCard";
import "./itemCard/itemCard.css";
export default function ItemCards({ data }) {
  return (
    <div className="cards__wrapper">
      {data?.products?.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}
