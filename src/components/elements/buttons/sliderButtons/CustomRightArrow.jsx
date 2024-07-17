import React from "react";
import rightArrowIcon from "./../../../../img/rigth_galka.svg";

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

export default CustomRightArrow;
