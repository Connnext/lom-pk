import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useShopData from "hooks/useShopData";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { placeholderMax, placeholderMin } from "utils/textDecorate";
import "./priceRangeSlider.css";

const PriceRangeSlider = () => {
  const { handleFilterChange } = useShopData();
  const filterParams = useSelector((state) => state.product.filterParams);
  const MAX_PRICE = 700_000;
  // Состояние для хранения фокуса полей ввода
  const [focus, setFocus] = useState({ min: false, max: false });

  const [priceRange, setPriceRange] = useState([
    filterParams.min_price || "",
    filterParams.max_price || MAX_PRICE,
  ]);

  useEffect(() => {
    setPriceRange([
      filterParams.min_price || "",
      filterParams.max_price || MAX_PRICE,
    ]);
  }, [filterParams]);

  const handlePriceChange = (type, value) => {
    const minValue = type === "min" ? value : priceRange[0];
    const maxValue = type === "max" ? value : priceRange[1];

    if (minValue !== "" && maxValue !== "" && minValue > maxValue) {
      if (type === "min") {
        setPriceRange([maxValue - 1, maxValue]);
        handleFilterChange("min_price", maxValue - 1);
      } else {
        setPriceRange([minValue, minValue + 1]);
        handleFilterChange("max_price", minValue + 1);
      }
    } else {
      setPriceRange([minValue, maxValue]);
      handleFilterChange(`${type}_price`, value);
    }
  };
  const handleChange = (newRange) => {
    setPriceRange(newRange);
  };
  const handleAfterChange = (newRange) => {
    handleFilterChange("min_price", newRange[0]);
    handleFilterChange("max_price", newRange[1]);
  };
  return (
    <div className="price__filter">
      <div className="price__title">Цена:</div>
      <div className="slider-container">
        <Slider
          range
          min={0}
          max={MAX_PRICE}
          value={priceRange}
          onChange={handleChange}
          onAfterChange={handleAfterChange}
          allowCross={false}
          trackStyle={[{ backgroundColor: "#c83237", height: 10 }]}
          dotStyle={{ backgroundColor: "white" }}
          handleStyle={[
            {
              backgroundColor: "white",
              borderColor: "#c83237",
              opacity: "1",
              marginTop: "-2px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            },
            {
              backgroundColor: "white",
              borderColor: "#c83237",
              opacity: "1",
              marginTop: "-2px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            },
          ]}
        />
        <div className="price-inputs">
          <input
            type="number"
            value={priceRange[0] || ""}
            placeholder={
              !focus.min && priceRange[0] === "" ? placeholderMin : ""
            }
            onFocus={() => setFocus({ ...focus, min: true })}
            onBlur={() => setFocus({ ...focus, min: false })}
            onChange={(e) =>
              handlePriceChange("min", Number(e.target.value) || "")
            }
            className="price__input"
          />
          <span> - </span>
          <input
            type="number"
            value={priceRange[1] || ""}
            placeholder={
              !focus.max && priceRange[1] === "" ? placeholderMax : ""
            }
            onFocus={() => setFocus({ ...focus, max: true })}
            onBlur={() => setFocus({ ...focus, max: false })}
            onChange={(e) =>
              handlePriceChange("max", Number(e.target.value) || "")
            }
            className="price__input"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
