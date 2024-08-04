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
      query: searchName.length > 3 ? searchName : undefined,
      ...sortParams,
      ...filterParams,
    }),
    [limit, sortParams, filterParams, searchName]
  );

  // Запрос
  const { data, error, isLoading } = useGetProductsQuery(filters);

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

  return {
    data,
    error,
    isLoading,
    handleMoreProductsClick,
    handleSortChange,
    handleFilterChange,
    limit,
  };
};

export default useShopData;
