import React, { useState, useEffect, useCallback } from "react";
import { useSearchQuery } from "./../../../redux/services/productService";

const search = (
  <svg
    className="search__img"
    xmlns="http://www.w3.org/2000/svg"
    id="Outline"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
  </svg>
);

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryData, setQueryData] = useState(null);
  const { data, error, isLoading } = useSearchQuery(queryData, {
    skip: !queryData || queryData.query.length < 3,
  });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.length >= 3) {
        setQueryData({ query });
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.length >= 3) {
      setQueryData({ query: searchTerm });
    }
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Введите название товара"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          {search}
        </button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data</div>}
      {data && (
        <ul className="search-results">
          {data.results.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
