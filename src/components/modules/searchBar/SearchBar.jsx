import React, { useState, useEffect, useCallback, useRef } from "react";
import { ITEM_ROUTE, SHOP_ROUTE } from "utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchName } from "./../../../redux/store/slices/productSlice";
import "./searchBar.css";
import { useSearchQuery } from "./../../../redux/services/productService";
import Spinner from "components/elements/spinners/Spinner";
import debounce from "lodash/debounce";
import useOutsideClickAndEsc from "hooks/useOutsideClickAndEsc";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    page_limit: 8,
    query: "",
  });
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const {
    data: dataSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
    refetch,
  } = useSearchQuery(searchQuery);

  const wrapperRef = useRef(null);

  // Хук для обработки клика вне элемента и нажатия Esc
  useOutsideClickAndEsc(wrapperRef, (isVisible) => {
    setShowResults(isVisible);
  });

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.length >= 3) {
        setSearchQuery((prevSearchQuery) => ({ ...prevSearchQuery, query }));
        refetch();
        setShowResults(true);
      } else {
        setShowResults(false);
      }
    }, 500),
    [refetch]
  );

  useEffect(() => {
    debouncedSearch(valueSearch);
  }, [valueSearch, debouncedSearch]);

  useEffect(() => {
    if (dataSearch) {
      setResults(dataSearch.products);
    }
  }, [dataSearch]);

  const handleChange = (event) => {
    setValueSearch(event.target.value);
    if (event.target.value.length <= 3) {
      setShowResults(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(SHOP_ROUTE);
    if (valueSearch.split(" ").length >= 3) {
      dispatch(setSearchName(valueSearch));
    }
  };

  return (
    <div className="search-bar" ref={wrapperRef}>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Введите название товара"
          value={valueSearch}
          onChange={handleChange}
        />
        <button type="submit" className="search-button"></button>
      </form>
      {isLoadingSearch && <Spinner />}
      {showResults && (
        <ul className="search__items search-results">
          {results.length > 0 ? (
            results.map((item) => (
              <li key={item.id} className="search__item">
                <Link to={ITEM_ROUTE.replace(":id", item.id)}>
                  {item.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="search__item">Нет результатов</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
