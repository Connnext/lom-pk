import React from "react";

const SortProducts = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const { name, value } = event.target;
    onSortChange(name, value);
  };

  return (
    <div className="sort-products">
      <label htmlFor="sort-by">Сортировать по: </label>
      <select
        style={{ marginRight: "20px" }}
        id="sort-by"
        name="sort_by"
        onChange={handleSortChange}
      >
        <option value="price">Цена</option>
        {/* Удаляем опцию популярности, если нам нужна только сортировка по цене */}
      </select>
      <label htmlFor="sort-order">Порядок: </label>
      <select id="sort-order" name="sort_order" onChange={handleSortChange}>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
};

export default SortProducts;
