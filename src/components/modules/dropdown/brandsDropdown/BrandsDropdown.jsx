import { Dropdown } from "antd";
import useShopData from "hooks/useShopData";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "./../../../../redux/services/categoriesService";
import { categories_text } from "utils/textDecorate";
import DropdownBrands from "./DropdownBrands";

const getUniqueBrandsFromCategories = (categories) => {
  // Собираем все бренды из всех категорий
  const allBrands = categories.flatMap((category) => category.brands || []);

  // Извлекаем названия брендов и удаляем дубликаты
  const uniqueBrandNames = [...new Set(allBrands.map((brand) => brand.name))];

  return uniqueBrandNames;
};

export default function BrandsDropdown() {
  const { handleFilterChange } = useShopData();
  const filterParams = useSelector((state) => state.product.filterParams);
  const { data: categories } = useGetCategoriesQuery();
  const categoriesEmpty = filterParams.categories.length < 1;
  // Извлечение брендов из категорий
  const brandsFromCategories = useMemo(
    () => getUniqueBrandsFromCategories(categories || []),
    [categories]
  );
  console.log(brandsFromCategories);

  // Функция для обработки выбора брендов
  const handleCategoryChange = (selectedBrands) => {
    handleFilterChange(
      "brands",
      selectedBrands.map((name) => name)
    );
  };

  // Подготовка списка брендов для отображения
  const brandsToDisplay = useMemo(() => {
    if (categoriesEmpty) {
      return brandsFromCategories;
    }

    // Отфильтровать бренды по выбранным категориям
    const selectedCategoryIds = filterParams.categories.map((cat) => cat.id);
    return brandsFromCategories.filter((brand) =>
      categories.some(
        (cat) =>
          cat.id === brand.categoryId &&
          selectedCategoryIds.includes(brand.categoryId)
      )
    );
  }, [
    categoriesEmpty,
    brandsFromCategories,
    filterParams.categories,
    categories,
  ]);

  const selectedBrands = useMemo(
    () => filterParams.brands?.map((name) => name) || [],
    [filterParams.brands]
  );
  console.log("select", selectedBrands);
  console.log("brandsToDisplay", brandsToDisplay);
  return (
    <DropdownBrands
      options={brandsToDisplay}
      selectedOptions={selectedBrands}
      onSelect={handleCategoryChange}
      placeholder="Выбрать бренды"
      label={categories_text}
    />
  );
}
