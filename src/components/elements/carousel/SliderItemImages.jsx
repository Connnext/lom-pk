import React from "react";
import Carousel from "nuka-carousel";
import leftArrowIcon from "./../../../img/left_galka.svg";
import rightArrowIcon from "./../../../img/rigth_galka.svg";
import ImageWithFallback from "components/modules/item/imageWithFallback/ImageWithFallback";
import "./carousel.css";

const style = {
  width: "400px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "5px",
};

const CustomLeftArrow = ({ previousSlide }) => (
  <button
    onClick={previousSlide}
    className="custom-arrow-button arrow__icon--left"
  >
    <div className="arrow-circle">
      <img src={leftArrowIcon} alt="Left Arrow" className="custom-arrow-icon" />
    </div>
  </button>
);

const CustomRightArrow = ({ nextSlide }) => (
  <button
    onClick={nextSlide}
    className="custom-arrow-button arrow__icon--right"
  >
    <div className="arrow-circle">
      <img
        src={rightArrowIcon}
        alt="Right Arrow"
        className="custom-arrow-icon"
      />
    </div>
  </button>
);

const CustomBottomButtons = ({ slideCount, currentSlide, goToSlide }) => {
  const buttons = Array.from({ length: slideCount }, (_, i) => (
    <button
      key={i}
      className={`custom-bottom-button ${currentSlide === i ? "active" : ""}`}
      onClick={() => goToSlide(i)}
    >
      <span className="custom-dot dots__images"></span>
    </button>
  ));

  return <div className="custom-bottom-buttons buttons--images">{buttons}</div>;
};

const SliderItemImages = ({ data }) => {
  // Функция для замены числа в URL
  const replaceNumberInUrl = (url, oldNumber, newNumber) => {
    const regex = new RegExp(`(${oldNumber})(\\.jpg)$`);
    return url.replace(regex, `${newNumber}$2`);
  };

  const hasMultipleImages = data?.images?.length >= 2;

  return (
    <div className="carousel carousel__images">
      <Carousel
        autoplay={hasMultipleImages}
        wrapAround={hasMultipleImages}
        dragging={hasMultipleImages}
        transitionMode="fade"
        autoplayInterval={10000}
        pauseOnHover={true}
        slideWidth={"100%"}
        speed={1000}
        easing={(t) => t * t}
        edgeEasing={(t) => 1 - Math.pow(1 - t, 3)}
        renderCenterLeftControls={({ previousSlide }) =>
          hasMultipleImages && <CustomLeftArrow previousSlide={previousSlide} />
        }
        renderCenterRightControls={({ nextSlide }) =>
          hasMultipleImages && <CustomRightArrow nextSlide={nextSlide} />
        }
        renderBottomCenterControls={(props) =>
          hasMultipleImages && <CustomBottomButtons {...props} />
        }
        className="carousel__container"
      >
        {data?.images?.map((image, index) => {
          const modifiedUrl = replaceNumberInUrl(image.image_url, 100, 600);
          return (
            <div className="item__img--wrapper" key={index}>
              <ImageWithFallback
                className="item__img"
                src={modifiedUrl}
                alt={image.alt}
                style={style}
                item={data}
                isBig={true}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderItemImages;
