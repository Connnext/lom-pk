import React, { useEffect, useCallback, useRef, useState } from "react";
import { ITEM_ROUTE, SHOP_ROUTE } from "utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSearchQuery } from "./../../../redux/services/productService";
import debounce from "lodash/debounce";
import useOutsideClickAndEsc from "hooks/useOutsideClickAndEsc";
import SearchForm from "components/elements/forms/searchForm/SearchForm";
import { setSearchName } from "./../../../redux/store/slices/productSlice";
import "./searchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // Локальные состояния для управления поисковым запросом, результатами и отображением результатов
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    page_limit: 8,
    query: "",
  });
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Получение данных поиска из Redux-сервиса
  const {
    data: dataSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
    refetch,
  } = useSearchQuery(searchQuery);

  // Ссылка для отслеживания кликов вне компонента
  const wrapperRef = useRef(null);

  // Хук для скрытия результатов поиска при клике вне компонента или нажатии ESC
  useOutsideClickAndEsc(wrapperRef, (isVisible) => {
    setShowResults(isVisible);
  });

  // Дебаунс-функция для задержки выполнения поиска
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

  // Обновление поиска при изменении значения searchName из Redux
  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  // Обновление результатов при получении новых данных из поиска
  useEffect(() => {
    if (dataSearch) {
      setResults(dataSearch.products);
    }
  }, [dataSearch]);

  // Обработчик изменения значения поля ввода
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchName(value));
    setInputValue(value);
    if (value.length <= 3) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    if (location.pathname == SHOP_ROUTE) setShowResults(false);
  }, [location.pathname, showResults]);

  // Обработчик отправки формы поиска
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
            {correctSearch ? (
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
          {correctSearch ? (
            <div className="show-all-container">
              <button className="show-all-button" onClick={handleSubmit}>
                Показать больше
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
