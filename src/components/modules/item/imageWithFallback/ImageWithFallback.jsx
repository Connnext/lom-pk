import React from "react";
import zaglushka from "../../../../img/zaglushka.jpg";
import "./imageWithFallback.css";
import { getIconType } from "helpers/iconUtils";

const ImageWithFallback = ({
  src,
  alt,
  style,
  item,
  isBig,
  isBasket,
  isItemCard,
}) => {
  const iconType = isItemCard ? "" : getIconType(item);

  const handleError = (event) => {
    event.target.src = zaglushka;
  };

  return (
    <div
      className={`productItem__img--wrapper ${iconType} 
      `}
    >
      <img style={style} src={src} alt={alt} onError={handleError} />
    </div>
  );
};

export default ImageWithFallback;
