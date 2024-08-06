import React, { useEffect, useCallback, useRef, useState } from "react";
import { ITEM_ROUTE, SHOP_ROUTE } from "utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "./../../../redux/services/productService";
import debounce from "lodash/debounce";
import useOutsideClickAndEsc from "hooks/useOutsideClickAndEsc";
import SearchForm from "components/elements/forms/searchForm/SearchForm";
import { setSearchName } from "./../../../redux/store/slices/productSlice";
import "./searchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [inputValue, setInputValue] = useState("");
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
  } = useGetProductsQuery(searchQuery);

  const wrapperRef = useRef(null);

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
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  useEffect(() => {
    if (dataSearch && dataSearch.products) {
      setResults(dataSearch.products);
    }
  }, [dataSearch]);

  useEffect(() => {
    if (location.pathname == SHOP_ROUTE) {
      setShowResults(false);
    }
  }, [location.pathname, showResults]);

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchName(value));
    setInputValue(value);
    if (value.length <= 3) {
      setShowResults(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(SHOP_ROUTE);
    dispatch(setSearchName(inputValue));
  };

  const correctSearch = results.length > 0;

  return (
    <div className="search-bar" ref={wrapperRef}>
      <SearchForm
        correctSearch={correctSearch}
        valueSearch={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {showResults && (
        <div className="search__bar--wrapper">
          <ul className="search__items search-results">
            {isLoadingSearch ? (
              <li className="search__item">Загрузка...</li>
            ) : errorSearch ? (
              <li className="search__item">Ошибка при загрузке</li>
            ) : correctSearch ? (
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
          {correctSearch && (
            <div className="show-all-container">
              <button className="show-all-button" onClick={handleSubmit}>
                Показать больше
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
