import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useShopData from "hooks/useShopData";
import { categories_text } from "utils/textDecorate";
import { useGetCategoriesQuery } from "./../.../../../../../redux/services/categoriesService";
import Dropdown from "./../Dropdown";

const CategoriesDropdown = () => {
  const { handleFilterChange } = useShopData();
  const filterParams = useSelector((state) => state.product.filterParams);
  const { data: categories } = useGetCategoriesQuery();

  const handleCategoryChange = (selectedCategories) => {
    handleFilterChange(
      "categories",
      selectedCategories.map((id) => parseInt(id))
    );
  };

  const selectedCategories = useMemo(
    () => filterParams.categories?.map((id) => id.toString()) || [],
    [filterParams.categories]
  );

  return (
    <Dropdown
      options={categories || []}
      selectedOptions={selectedCategories}
      onSelect={handleCategoryChange}
      placeholder="Выбрать категории"
      label={categories_text}
    />
  );
};

export default CategoriesDropdown;
