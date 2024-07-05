import React from "react";
import useBasketItem from "hooks/useBasketItem";
import { useGetSingleProductQuery } from "./../../../../redux/services/productService";
import CheckboxBasket from "components/elements/checkbox/checkboxBasket/CheckboxBasket";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";
import { ITEM_ROUTE } from "utils/constants";
import ControlButtons from "components/elements/buttons/addToBasketButton/ControlButtons";
import { Link } from "react-router-dom";
import "./basketItem.css";

const style = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "5px",
};
const deleteItem = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="38px"
    height="38px"
  >
    {" "}
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
  </svg>
);

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
          />
        </div>
      </Link>
      <Link to={ITEM_ROUTE.replace(":id", product_id)}>
        <h3 className="basket__item--title">
          {category_name} {title[0]?.toLowerCase() + title?.slice(1)}{" "}
          {brand[0]?.toLowerCase() + brand?.slice(1)}
        </h3>
      </Link>
      <div className="basket__item--details">
        {old_price != null ? (
          <div className="basket__price--wrapper">
            <p className="basket__item--price basket__price--new">{price}₽</p>
            <p className="basket__item--price basket__price--old">
              {old_price}₽
            </p>
          </div>
        ) : (
          <p className="basket__item--price">{price}₽</p>
        )}
        <ControlButtons id={product_id} initialCount={count} />
        <button onClick={handleDeleteItem} className="basket__item--remove">
          {deleteItem}
        </button>
      </div>
    </div>
  );
}
