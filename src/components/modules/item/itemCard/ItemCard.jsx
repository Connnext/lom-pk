import React from "react";
import AddToBasketButton from "components/elements/buttons/addToBasketButton/AddToBasketButton";
import { Link } from "react-router-dom";
import { ITEM_ROUTE } from "utils/constants";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";
import "./itemCard.css";

const style = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "5px",
  paddingTop: "10px",
};

export default function ItemCard(item) {
  const isLongTitle = item.title.length > 23;
  return (
    <div className="card">
      <Link className="card__link" to={`${ITEM_ROUTE.replace(":id", item.id)}`}>
        <div className="img__wrapper">
          <ImageWithFallback
            src={item.preview_img}
            alt={item.title}
            style={style}
            item={item}
            className="card__image"
          />
        </div>
        <div className="card__info--content">
          <div className="card__info--main">
            <h3 className="card__category">{item.category_name}</h3>
            <h2
              className={`card__title ${
                isLongTitle ? "long-title" : "short-title"
              }`}
            >
              {item.title}
            </h2>
            <h3 className="card__brand">{item.brand}</h3>
          </div>
          <div className="card__price--wrapper">
            <h2 className="card__price">{item.price} ₽</h2>
            {item.old_price && (
              <h2 className="card__oldprice">{item.old_price} ₽</h2>
            )}
          </div>
        </div>
      </Link>
      <AddToBasketButton id={item.id} />
    </div>
  );
}
