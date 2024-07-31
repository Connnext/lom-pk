import React from "react";
import CategoriesDropdown from "../dropdown/categoriesDropdown/CategoriesDropdown";
import PriceRangeSlider from "../priceRangeSlider/PriceRangeSlider";
import BrandsDropdown from "../dropdown/brandsDropdown/BrandsDropdown";
import "./productsFilters.css";

const ProductsFilters = () => {
  return (
    <div className="product-filters">
      <CategoriesDropdown />
      <PriceRangeSlider />
      <BrandsDropdown />
    </div>
  );
};

export default ProductsFilters;
