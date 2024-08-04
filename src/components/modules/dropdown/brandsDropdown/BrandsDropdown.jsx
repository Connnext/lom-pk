import { Dropdown } from "antd";
import useShopData from "hooks/useShopData";
import React, { useMemo, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "./../../../../redux/services/categoriesService";
import { brands_text, categories_text } from "utils/textDecorate";
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

  // Функция для обработки выбора брендов
  const handleBrandChange = (selectedBrands) => {
    handleFilterChange(
      "brands",
      selectedBrands.map((name) => name)
    );
  };

  // Сброс брендов при изменении категорий
  const prevCategoriesRef = useRef(filterParams.categories);

  useEffect(() => {
    if (prevCategoriesRef.current !== filterParams.categories) {
      handleFilterChange("brands", []);
      prevCategoriesRef.current = filterParams.categories;
    }
  }, [filterParams.categories, handleFilterChange]);

  const brandsToDisplay = useMemo(() => {
    if (categoriesEmpty) {
      // Если категории пусты, возвращаем все бренды
      return brandsFromCategories;
    }

    // Получаем идентификаторы выбранных категорий
    const selectedCategoryIds = filterParams.categories;

    // Защита от `undefined` для `categories`
    if (!categories) {
      return [];
    }

    // Находим выбранные категории и собираем бренды из них
    const filteredBrands = (categories || [])
      .filter((category) => selectedCategoryIds.includes(category.id)) // Фильтруем категории по выбранным ID
      .flatMap((category) => category.brands || []) // Объединяем бренды из всех выбранных категорий
      .map((brand) => brand.name); // Извлекаем имена брендов

    return filteredBrands;
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

  return (
    <DropdownBrands
      options={brandsToDisplay}
      selectedOptions={selectedBrands}
      onSelect={handleBrandChange}
      placeholder="Выбрать бренды"
      label={brands_text}
    />
  );
}
