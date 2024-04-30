import React from "react";
import "./carousel.css";
import Carousel from "nuka-carousel";
import image from "./../../../img/1440_440.jpg";
import leftArrowIcon from "./../../../img/left_galka.svg";
import rightArrowIcon from "./../../../img/rigth_galka.svg";

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
      <span className="custom-dot"></span>
    </button>
  ));

  return <div className="custom-bottom-buttons">{buttons}</div>;
};

const SliderStocks = () => {
  return (
    <div className="carousel carousel__stocks">
      <Carousel
        autoplay
        wrapAround
        transitionMode="fade"
        autoplayInterval={5000}
        pauseOnHover={true}
        slideWidth={"100%"}
        speed={1000}
        easing={(t) => t * t}
        edgeEasing={(t) => 1 - Math.pow(1 - t, 3)}
        renderCenterLeftControls={({ previousSlide }) => (
          <CustomLeftArrow previousSlide={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CustomRightArrow nextSlide={nextSlide} />
        )}
        renderBottomCenterControls={(props) => (
          <CustomBottomButtons {...props} />
        )}
        className="carousel__container"
      >
        <img src={image} alt="Slide 1" className="carousel-image" />
        <img src={image} alt="Slide 2" className="carousel-image" />
        <img src={image} alt="Slide 3" className="carousel-image" />
      </Carousel>
    </div>
  );
};

export default SliderStocks;
