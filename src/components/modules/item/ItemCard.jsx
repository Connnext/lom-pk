import React from "react";
import AddToBasketButton from "components/elements/buttons/addToBasketButton/AddToBasketButton";
import { Link } from "react-router-dom";
import { ITEM_ROUTE } from "utils/constants";
import zaglushka from "./../../../img/zaglushka.jpg";
import ImageWithFallback from "./ImageWithFallback";
import "./itemCard.css";
// 23 если больше тогда одни стили а иначе меньше
export default function ItemCard(item) {
  const isLongTitle = item.title.length > 23;
  return (
    <div className="card" to={`${ITEM_ROUTE}/${item.id}`}>
      <Link className="card__link" to={`${ITEM_ROUTE}/${item.id}`}>
        <div className="img__wrapper">
          <ImageWithFallback
            src={item.preview_img}
            alt={item.title}
            fallbackSrc={zaglushka}
            className="card__image"
          />
          {item.is_hit && <div className="card__is-hit">Хит</div>}
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
            <h2 className="card__price">{item.price}₽</h2>
            {item.old_price && (
              <h2 className="card__oldprice">
                <s>{item.old_price}</s>₽
              </h2>
            )}
          </div>
        </div>
      </Link>
      <AddToBasketButton />
    </div>
  );
}
