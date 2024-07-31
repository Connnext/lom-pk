import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  useGetProductsQuery,
  useSearchQuery,
} from "./../redux/services/productService";
import {
  addProducts,
  setFilterParams,
  setSortParams,
} from "./../redux/store/slices/productSlice";
import { SHOP_ROUTE } from "utils/constants";

const useShopData = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isShopPage = location.pathname === SHOP_ROUTE;

  //RTK
  const limit = useSelector((state) => state.product.limit);
  const searchName = useSelector((state) => state.product.searchName);
  const sortParams = useSelector((state) => state.product.sortParams);
  const filterParams = useSelector((state) => state.product.filterParams);

  const productObj = {
    limit,
    searchName,
    sortParams,
    filterParams,
  };

  useEffect(() => {
    if (isShopPage) {
      localStorage.setItem("product", JSON.stringify(productObj));
    }
  }, [productObj, isShopPage]);

  const filters = useMemo(
    () => ({
      page: 1,
      page_limit: limit,
      ...sortParams,
      ...filterParams,
    }),
    [limit, sortParams, filterParams]
  );

  const search = useMemo(
    () => ({
      page: 1,
      page_limit: limit,
      query: searchName,
    }),
    [limit, searchName]
  );

  // Запросы
  const {
    data: dataGetProducts,
    error,
    isLoading,
  } = useGetProductsQuery(filters);
  const {
    data: dataSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useSearchQuery(search);

  // Xендлеры
  const handleMoreProductsClick = () => {
    dispatch(addProducts());
  };

  const handleSortChange = (name, value) => {
    dispatch(setSortParams({ [name]: value }));
  };

  const handleFilterChange = (name, value) => {
    dispatch(setFilterParams({ [name]: value }));
  };

  const data =
    searchName && searchName.length > 0 ? dataSearch : dataGetProducts;

  return {
    data,
    error: error || errorSearch,
    isLoading: isLoading || isLoadingSearch,
    handleMoreProductsClick,
    handleSortChange,
    handleFilterChange,
    limit,
  };
};

export default useShopData;
