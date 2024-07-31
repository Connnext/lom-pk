import React from "react";
import SearchButton from "components/elements/buttons/searchButton/SearchButton";

function SearchForm({
  valueSearch,
  handleChange,
  handleSubmit,
  correctSearch,
}) {
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Введите название товара"
        value={valueSearch}
        onChange={handleChange}
      />
      <SearchButton correctSearch={correctSearch} />
    </form>
  );
}

export default SearchForm;
