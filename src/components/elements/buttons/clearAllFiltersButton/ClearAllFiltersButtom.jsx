import React from "react";
import { useDispatch } from "react-redux";
import {
  resetBrands,
  resetCategories,
  resetPrice,
} from "./../../../../redux/store/slices/productSlice";
import "./clearAllFiltersButton.css";

export default function ClearAllFiltersButtom() {
  const dispatch = useDispatch();
  const handleClearAllFilters = () => {
    dispatch(resetBrands());
    dispatch(resetCategories());
    dispatch(resetPrice());
  };
  return (
    <button onClick={handleClearAllFilters} className="clear__all--filter">
      Очистить фильтры
    </button>
  );
}
