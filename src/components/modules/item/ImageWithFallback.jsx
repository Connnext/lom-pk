import React from "react";
const style = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "5px",
  paddingTop: "10px",
};
const ImageWithFallback = ({ src, alt, fallbackSrc }) => {
  const handleError = (event) => {
    event.target.src = fallbackSrc;
  };

  return <img style={style} src={src} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;
