import React from "react";
import "./itemCard/itemCard.css";
import ItemCard from "./itemCard/ItemCard";
export default function ItemCards({ data }) {
  return (
    <div className="cards__wrapper">
      {data?.products?.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}
