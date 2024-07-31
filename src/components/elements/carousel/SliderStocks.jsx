import React from "react";
import Carousel from "nuka-carousel";
import image from "img/oblozhka_1.jpg";

import CustomRightArrow from "../buttons/sliderButtons/CustomRightArrow";
import CustomBottomButtons from "../buttons/sliderButtons/CustomBottomButtons";
import CustomLeftArrow from "../buttons/sliderButtons/CustomLeftArrow";
import "./carousel.css";

const SliderStocks = () => {
  return (
    <div className="carousel carousel__stocks">
      <Carousel
        autoplay
        wrapAround
        transitionMode="fade"
        autoplayInterval={5000}
        pauseOnHover={true}
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
