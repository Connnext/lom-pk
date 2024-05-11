import React from "react";
import "./itemCard.css";
import ItemCard from "./ItemCard";

export default function ItemCards({ data }) {
  return (
    <div className="cards__wrapper">
      {data?.map((item) => {
        const { id, title, price, description, images, category } = item;
        return (
          <ItemCard
            id={id}
            title={title}
            price={price}
            images={images}
            category={category}
          />
        );
      })}
    </div>
  );
}
