import React from "react";
import ItemCard from "./itemCard/ItemCard";
import not_found from "img/not_found.png";
import "./itemCard/itemCard.css";

export default function ItemCards({ data }) {
  const hasProducts = data?.products?.length > 0;

  return (
    <div className="cards__wrapper">
      {hasProducts ? (
        data.products.map((item) => <ItemCard key={item.id} {...item} />)
      ) : (
        <div className="no-products-placeholder">
          <img
            src={not_found}
            alt="Продуктов не найдено"
            className="no-products-image"
          />
          <p className="no-products-text">К сожалению, товаров не найдено</p>
        </div>
      )}
    </div>
  );
}
