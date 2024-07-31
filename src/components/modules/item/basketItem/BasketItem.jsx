import React from "react";
import useBasketItem from "hooks/useBasketItem";
import { useGetSingleProductQuery } from "./../../../../redux/services/productService";
import CheckboxBasket from "components/elements/checkbox/checkboxBasket/CheckboxBasket";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";
import { ITEM_ROUTE } from "utils/constants";
import ControlButtons from "components/elements/buttons/addToBasketButton/ControlButtons";
import { Link } from "react-router-dom";
import deleteItem from "img/deleteItem.svg";
import "./basketItem.css";

const style = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "5px",
};

export default function BasketItem({
  product_id,
  amount,
  price,
  preview_img,
  title,
  category_name,
  brand,
  old_price,
  isSelected,
  onSelect,
  onUpdate,
}) {
  const { count, handleDeleteItem } = useBasketItem(product_id, amount);
  const { data: item } = useGetSingleProductQuery(product_id);

  const replaceNumberInUrl = (url, oldNumber, newNumber) => {
    const regex = new RegExp(`(${oldNumber})(\\.jpg)$`);
    return url.replace(regex, `${newNumber}$2`);
  };

  const modifiedUrl = preview_img
    ? replaceNumberInUrl(preview_img, 200, 600)
    : null;

  return (
    <div className="basket__item">
      <CheckboxBasket
        id={`checkbox-${product_id}`}
        value={isSelected}
        onChange={onSelect}
      />
      <Link to={ITEM_ROUTE.replace(":id", product_id)}>
        <div className="basket__item--wrapper">
          <ImageWithFallback
            className="basket__item--image"
            src={modifiedUrl}
            alt={title}
            style={style}
            item={item}
            isBig={false}
            isBasket={true}
          />
        </div>
      </Link>
      <div className="basket__item--info">
        <Link
          className="basket__item--link"
          to={ITEM_ROUTE.replace(":id", product_id)}
        >
          <h3 className="basket__item--title">
            {category_name}
            {title && ` ${title}`}
            {brand && ` ${brand}`}
          </h3>
        </Link>
        <div className="basket__item--details">
          {old_price != null ? (
            <div className="basket__price--wrapper">
              <p className="basket__item--price basket__price--new">
                {price} ₽
              </p>
              <p className="basket__item--price basket__price--old">
                {old_price} ₽
              </p>
            </div>
          ) : (
            <p className="basket__item--price">{price} ₽</p>
          )}
          <ControlButtons id={product_id} initialCount={count} />
          <button onClick={handleDeleteItem} className="basket__item--remove">
            <img
              className="basket__img--remove"
              src={deleteItem}
              alt="deleteItem"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
