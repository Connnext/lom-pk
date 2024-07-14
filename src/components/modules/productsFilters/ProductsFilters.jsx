import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useShopData from "hooks/useShopData";
import { brands_text, categories_text } from "utils/textDecorate";
import Dropdown from "../dropdown/Dropdown";
import { useGetCategoriesQuery } from "./../../../redux/services/categoriesService";
import "./productsFilters.css";

const ProductsFilters = () => {
  const { handleFilterChange } = useShopData();
  const filterParams = useSelector((state) => state.product.filterParams);
  const { data: categories } = useGetCategoriesQuery();

  const handleCategoryChange = (selectedCategories) => {
    handleFilterChange(
      "categories",
      selectedCategories.map((id) => parseInt(id))
    );
  };

  const categoryOptions = useMemo(() => {
    return (
      categories
        ?.filter((category) => category.level_nesting === 1)
        .map((category) => ({
          id: category.id.toString(),
          name: category.name,
          children:
            category.children?.map((child) => ({
              id: child.id.toString(),
              name: child.name,
            })) || [],
        })) || []
    );
  }, [categories]);

  console.log(categories);

  const selectedCategories = useMemo(
    () => filterParams.categories?.map((id) => id.toString()) || [],
    [filterParams.categories]
  );

  return (
    <div className="product-filters">
      <Dropdown
        options={categoryOptions}
        selectedOptions={selectedCategories}
        onSelect={handleCategoryChange}
        placeholder="Выбрать категории"
        label={categories_text}
      />
      {/* <Dropdown
        options={brandOptions}
        selectedOptions={selectedBrands}
        onSelect={handleBrandChange}
        placeholder="Выбрать бренды"
        label={brands_text}
      /> */}
    </div>
  );
};

export default ProductsFilters;
