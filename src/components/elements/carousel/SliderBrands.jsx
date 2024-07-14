import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";
import brand_teplodar from "./../../../img/brand_teplodar.jpg";
import brand_aston from "./../../../img/brand_aston.jpg";
import brand_everest from "./../../../img/brand_everest.jpg";
import brand_litkom from "./../../../img/brand_litkom.jpg";
import brand_vezuviy from "./../../../img/brand_vezuviy.jpg";
import brand_grilld from "./../../../img/brand_grilld.jpg";
import brand_konvetika from "./../../../img/brand_konvetika.jpg";
import brand_kratki from "./../../../img/brand_kratki.jpg";
import brand_etna from "./../../../img/brand_etna.jpg";
import brand_compact from "./../../../img/brand_compact.jpg";
import brand_zota from "./../../../img/brand_zota.jpg";
import brand_varvara from "./../../../img/brand_varvara.jpg";
import brand_meta from "./../../../img/brand_meta.jpg";
import brand_ecocamin from "./../../../img/brand_ecocamin.jpg";
import brand_ermak from "./../../../img/brand_ermak.jpg";
import leftArrowIcon from "./../../../img/left_galka.svg";
import rightArrowIcon from "./../../../img/rigth_galka.svg";
import "./carousel.css";

export default function SliderBrands() {
  const CustomLeftArrow = ({ previousSlide }) => (
    <button
      onClick={previousSlide}
      className="custom-arrow-button arrow__brandicon--left"
    >
      <div className="arrow-circle">
        <img
          src={leftArrowIcon}
          alt="Left Arrow"
          className="custom-arrow-icon"
        />
      </div>
    </button>
  );
  const CustomRightArrow = ({ nextSlide }) => (
    <button
      onClick={nextSlide}
      className="custom-arrow-button arrow__brandicon--right"
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

  return (
    <div className="slider-container">
      <div className="carousel">
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <CustomLeftArrow previousSlide={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <CustomRightArrow nextSlide={nextSlide} />
          )}
          renderBottomCenterControls={() => null}
          // slideWidth={"100px"}
          slidesToScroll={5}
          cellSpacing={100}
          slidesToShow={5}
          autoplay={true}
          wrapAround={true}
          transitionMode="fade"
          autoplayInterval={5000}
          pauseOnHover={true}
          speed={1000}
          easing={(t) => t * t}
          edgeEasing={(t) => 1 - Math.pow(1 - t, 3)}
          // withoutControls={true}
          className="carousel__container"
        >
          <Link to={"/"}>
            <img
              src={brand_teplodar}
              alt="Teplodar"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_aston}
              alt="Aston"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_everest}
              alt="Everest"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_litkom}
              alt="Litkom"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_vezuviy}
              alt="Vezuviy"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_grilld}
              alt="Grilld"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_konvetika}
              alt="Konvetika"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_kratki}
              alt="Kratki"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_etna}
              alt="Etna"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_compact}
              alt="Compact"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_zota}
              alt="Zota"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_varvara}
              alt="Varvara"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_meta}
              alt="Meta"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_ecocamin}
              alt="Ecocamin"
              className="carousel-image carousel-slide"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={brand_ermak}
              alt="Ermak"
              className="carousel-image carousel-slide"
            />
          </Link>
        </Carousel>
      </div>
    </div>
  );
}
