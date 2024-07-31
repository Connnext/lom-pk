import React from "react";
import { useSelector } from "react-redux";
import useShopData from "hooks/useShopData";
import "./sortProducts.css";

const SortProducts = () => {
  const { handleSortChange } = useShopData();
  const sortParams = useSelector((state) => state.product.sortParams || {});
  console.log(sortParams);

  const handleSortChanges = (event) => {
    const { name, type, value, checked } = event.target;
    const sortValue = type === "checkbox" ? checked : value;
    handleSortChange(name, sortValue);
  };

  return (
    <div className="sort-products">
      <div className="sort__wrapper">
        <label className="sort__label" htmlFor="sort-by">
          Сортировать по:{" "}
        </label>
        <select
          value={sortParams.sort_by}
          className="sort__select"
          id="sort-by"
          name="sort_by"
          onChange={handleSortChanges}
        >
          <option value="price">Цена</option>
        </select>
      </div>
      <div className="sort__wrapper">
        <label className="sort__label" htmlFor="sort-order">
          Порядок:{" "}
        </label>
        <select
          value={sortParams.sort_order}
          className="sort__select"
          id="sort-order"
          name="sort_order"
          onChange={handleSortChanges}
        >
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
      <div className="sort__features">
        <label className="sort__wrapper">
          <input
            className="sort__input"
            type="checkbox"
            name="is_hit"
            checked={sortParams.is_hit || false}
            onChange={handleSortChanges}
          />
          Хиты
        </label>
        <label className="sort__wrapper">
          <input
            className="sort__input"
            type="checkbox"
            name="is_new"
            checked={sortParams.is_new || false}
            onChange={handleSortChanges}
          />
          Новинки
        </label>
        <label className="sort__wrapper">
          <input
            className="sort__input"
            type="checkbox"
            name="is_sale"
            checked={sortParams.is_sale || false}
            onChange={handleSortChanges}
          />
          Акции
        </label>
      </div>
    </div>
  );
};

export default SortProducts;
