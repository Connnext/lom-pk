import React, { useState, useEffect, useRef } from "react";
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
  const [focus, setFocus] = useState({ min: false, max: false });
  const [priceRange, setPriceRange] = useState([
    filterParams.min_price || "",
    filterParams.max_price || MAX_PRICE,
  ]);
  const [maxInputValue, setMaxInputValue] = useState("");
  const [minInputValue, setMinInputValue] = useState("");
  const maxInputRef = useRef(null);
  const minInputRef = useRef(null);

  useEffect(() => {
    setPriceRange([
      filterParams.min_price || "",
      filterParams.max_price || MAX_PRICE,
    ]);
  }, [filterParams]);

  const handlePriceChange = (type, value) => {
    let minValue = type === "min" ? value : priceRange[0];
    let maxValue = type === "max" ? value : priceRange[1];

    if (type === "min") {
      setMinInputValue(value);
      if (value !== "" && value >= (maxValue || MAX_PRICE)) {
        minValue = (maxValue || MAX_PRICE) - 1;
      }
    }

    if (type === "max") {
      setMaxInputValue(value);
      if (value !== "" && value <= (minValue || 0)) {
        maxValue = (minValue || 0) + 1;
      }
    }

    setPriceRange([minValue, maxValue]);
    handleFilterChange(`${type}_price`, value);
  };

  const handleMinInputBlur = () => {
    setFocus({ ...focus, min: false });
    if (minInputValue === "") {
      setPriceRange([0, priceRange[1]]);
      handleFilterChange("min_price", 0);
    } else {
      const numValue = Number(minInputValue);
      if (numValue >= (priceRange[1] || MAX_PRICE)) {
        setPriceRange([priceRange[1] - 1, priceRange[1]]);
        handleFilterChange("min_price", priceRange[1] - 1);
      } else {
        setPriceRange([numValue, priceRange[1]]);
        handleFilterChange("min_price", numValue);
      }
    }
  };

  const handleMaxInputBlur = () => {
    setFocus({ ...focus, max: false });
    if (maxInputValue === "") {
      setPriceRange([priceRange[0], MAX_PRICE]);
      handleFilterChange("max_price", MAX_PRICE);
    } else {
      const numValue = Number(maxInputValue);
      if (numValue <= (priceRange[0] || 0)) {
        setPriceRange([priceRange[0], priceRange[0] + 1]);
        handleFilterChange("max_price", priceRange[0] + 1);
      } else {
        setPriceRange([priceRange[0], numValue]);
        handleFilterChange("max_price", numValue);
      }
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
            ref={minInputRef}
            type="number"
            value={focus.min ? minInputValue : priceRange[0]}
            placeholder={
              !focus.min && priceRange[0] === "" ? placeholderMin : ""
            }
            onFocus={() => {
              setFocus({ ...focus, min: true });
              setMinInputValue(priceRange[0]);
            }}
            onBlur={handleMinInputBlur}
            onChange={(e) =>
              handlePriceChange("min", Number(e.target.value) || "")
            }
            className="price__input"
          />
          <span> - </span>
          <input
            ref={maxInputRef}
            type="number"
            value={
              focus.max
                ? maxInputValue
                : priceRange[1] === MAX_PRICE
                ? ""
                : priceRange[1]
            }
            placeholder={
              !focus.max &&
              (priceRange[1] === MAX_PRICE || priceRange[1] === "")
                ? `Максимальная цена`
                : ""
            }
            onFocus={() => {
              setFocus({ ...focus, max: true });
              setMaxInputValue(
                priceRange[1] === MAX_PRICE ? "" : priceRange[1]
              );
            }}
            onBlur={handleMaxInputBlur}
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
