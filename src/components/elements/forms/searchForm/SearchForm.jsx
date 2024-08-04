import React from "react";
import SearchButton from "components/elements/buttons/searchButton/SearchButton";
import { useSelector } from "react-redux";

function SearchForm({
  valueSearch,
  handleChange,
  handleSubmit,
  correctSearch,
}) {
  const placeholder = useSelector((state) => state.product.searchName);
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Введите название товара или бренда"
        value={valueSearch}
        onChange={handleChange}
      />
      <SearchButton correctSearch={correctSearch} />
    </form>
  );
}

export default SearchForm;
