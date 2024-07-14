import React from "react";
import { useSelector } from "react-redux";
import useShopData from "hooks/useShopData";
import "./sortProducts.css";

const SortProducts = () => {
  const { handleSortChange } = useShopData();
  const sortParams = useSelector((state) => state.product.sortParams);
  console.log(sortParams);
  const handleSortChanges = (event) => {
    const { name, value } = event.target;
    handleSortChange(name, value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleSortChange(name, checked);
  };

  return (
    <div className="sort-products">
      <div className="sort__wrapper">
        <label className="sort__label" htmlFor="sort-by">
          Сортировать по:{" "}
        </label>
        <select
          className="sort__select"
          id="sort-by"
          name="sort_by"
          onChange={handleSortChange}
        >
          <option value="price">Цена</option>
        </select>
      </div>
      <div className="sort__wrapper">
        <label className="sort__label" htmlFor="sort-order">
          Порядок:{" "}
        </label>
        <select
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
            checked={sortParams.is_hit}
            onChange={handleCheckboxChange}
          />
          Хиты
        </label>
        <label className="sort__wrapper">
          <input
            className="sort__input"
            type="checkbox"
            name="is_new"
            checked={sortParams.is_new}
            onChange={handleCheckboxChange}
          />
          Новинки
        </label>
        <label className="sort__wrapper">
          <input
            className="sort__input"
            type="checkbox"
            name="is_sale"
            checked={sortParams.is_sale}
            onChange={handleCheckboxChange}
          />
          Акции
        </label>
      </div>
    </div>
  );
};

export default SortProducts;
