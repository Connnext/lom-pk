import React, { useState, useEffect } from "react";
import zaglushka from "../../../../img/zaglushka.jpg";
import "./imageWithFallback.css";

const ImageWithFallback = ({ src, alt, style, item, isBig, isBasket }) => {
  const [className, setClassName] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    let classNames = "";
    let displayText = "";

    if (item?.is_hit) {
      classNames = "sliderCard__is-hit";
      displayText = "Хит";
    } else if (item?.is_new) {
      classNames = "sliderCard__is-new";
      displayText = "Новинка";
    } else if (item?.is_sale) {
      classNames = "sliderCard__is-sale";
      displayText = "Акция";
    }
    if (isBig) classNames += " big__Icon";
    if (isBasket) classNames += " basket__Icon";

    setClassName(classNames);
    setText(displayText);
  }, [item, isBig, isBasket]);

  const handleError = (event) => {
    event.target.src = zaglushka;
  };

  return (
    <div className="productItem__img--wrapper">
      <img style={style} src={src} alt={alt} onError={handleError} />
      {className && <div className={className}>{text}</div>}
    </div>
  );
};

export default ImageWithFallback;
