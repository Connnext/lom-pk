import React from "react";
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
import CustomLeftArrow from "../buttons/sliderButtons/CustomLeftArrow";
import CustomRightArrow from "../buttons/sliderButtons/CustomRightArrow";
import "./carousel.css";

import { useMediaQuery } from "react-responsive";
import { SHOP_ROUTE } from "utils/constants";
import useShopData from "hooks/useShopData";

const SliderBrands = () => {
  const { handleFilterChange } = useShopData();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isVerySmallScreen = useMediaQuery({ query: "(min-width: 576px)" });

  const handleCategoryChange = (selectedBrand) => () => {
    handleFilterChange("brands", [selectedBrand]);
  };

  let slidesToShow = 1;
  if (isBigScreen) slidesToShow = 5;
  else if (isMediumScreen) slidesToShow = 4;
  else if (isSmallScreen) slidesToShow = 3;
  else if (isVerySmallScreen) slidesToShow = 2;

  return (
    <div className="carousel">
      <Carousel
        wrapAround={true}
        slidesToScroll={slidesToShow}
        slidesToShow={slidesToShow}
        autoplay={true}
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
        renderBottomCenterControls={() => null}
        className="carousel__container carousel__images--wrapper"
      >
        <Link onClick={handleCategoryChange("Теплодар")} to={SHOP_ROUTE}>
          <img
            src={brand_teplodar}
            alt="Теплодар"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("ASTON")} to={SHOP_ROUTE}>
          <img
            src={brand_aston}
            alt="ASTON"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Эверест")} to={SHOP_ROUTE}>
          <img
            src={brand_everest}
            alt="Эверест"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Литком")} to={SHOP_ROUTE}>
          <img
            src={brand_litkom}
            alt="Литком"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Везувий")} to={SHOP_ROUTE}>
          <img
            src={brand_vezuviy}
            alt="Везувий"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("GRILL'D")} to={SHOP_ROUTE}>
          <img
            src={brand_grilld}
            alt="GRILL'D"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link
          onClick={handleCategoryChange("Термофор (Конвектика)")}
          to={SHOP_ROUTE}
        >
          <img
            src={brand_konvetika}
            alt="Термофор (Конвектика)"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Kratki")} to={SHOP_ROUTE}>
          <img
            src={brand_kratki}
            alt="Kratki"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Этна")} to={SHOP_ROUTE}>
          <img
            src={brand_etna}
            alt="Этна"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Компакт")} to={SHOP_ROUTE}>
          <img
            src={brand_compact}
            alt="Компакт"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("ZOTA")} to={SHOP_ROUTE}>
          <img
            src={brand_zota}
            alt="ZOTA"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Варвара")} to={SHOP_ROUTE}>
          <img
            src={brand_varvara}
            alt="Варвара"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Мета")} to={SHOP_ROUTE}>
          <img
            src={brand_meta}
            alt="Мета"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Экокамин")} to={SHOP_ROUTE}>
          <img
            src={brand_ecocamin}
            alt="Экокамин"
            className="carousel-image carousel-slide"
          />
        </Link>
        <Link onClick={handleCategoryChange("Ермак")} to={SHOP_ROUTE}>
          <img
            src={brand_ermak}
            alt="Ермак"
            className="carousel-image carousel-slide"
          />
        </Link>
      </Carousel>
    </div>
  );
};

export default SliderBrands;
