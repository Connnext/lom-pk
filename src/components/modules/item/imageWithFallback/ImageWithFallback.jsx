import React from "react";
import zaglushka from "../../../../img/zaglushka.jpg";
import "./imageWithFallback.css";

const ImageWithFallback = ({ src, alt, style, item, isBig }) => {
  const handleError = (event) => {
    event.target.src = zaglushka;
  };

  let className = "";
  let text = "";

  if (item?.is_hit) {
    className = "sliderCard__is-hit";
    isBig ? (className += " big__Icon") : (className += "");
    text = "Хит";
  } else if (item?.is_new) {
    className = "sliderCard__is-new";
    isBig ? (className += " big__Icon") : (className += "");
    text = "Новинка";
  } else if (item?.is_promo) {
    className = "sliderCard__is-promo";
    isBig ? (className += " big__Icon") : (className += "");
    text = "Акция";
  }

  return (
    <div className="productItem__img--wrapper">
      <img style={style} src={src} alt={alt} onError={handleError} />
      {className && <div className={className}>{text}</div>}
    </div>
  );
};

export default ImageWithFallback;
