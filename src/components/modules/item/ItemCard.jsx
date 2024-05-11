import React from "react";
import AddToBasketButton from "components/elements/buttons/AddToBasketButton";
import { Link } from "react-router-dom";
import { ITEM_ROUTE } from "utils/constants";
import "./itemCard.css";

export default function ItemCard({
  id,
  title,
  price,
  description,
  images,
  category,
}) {
  console.log(images);
  return (
    <Link className="card" key={id} to={ITEM_ROUTE + `/${id}`}>
      <img src={images[0]} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <h2 className="card__category">{category}</h2>
      <div className="card__price--wrapper">
        <h2 className="card__price">{price}₽</h2>
        {/* <AddToBasketButton id={id} item={item} /> */}
      </div>
    </Link>
  );
}
