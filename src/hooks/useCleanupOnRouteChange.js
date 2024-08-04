import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  resetBrands,
  resetCategories,
  resetPrice,
  resetProductState,
  resetSearchName,
} from "./../redux/store/slices/productSlice";
import { SHOP_ROUTE } from "utils/constants";

const useCleanupOnRouteChange = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const isShopPath = location.pathname.startsWith(SHOP_ROUTE);

    if (!isShopPath) {
      localStorage.removeItem("product");
      dispatch(resetProductState());
      dispatch(resetPrice());
      dispatch(resetCategories());
      dispatch(resetSearchName());
      dispatch(resetBrands());
    }
  }, [location.pathname, dispatch]);
};

export default useCleanupOnRouteChange;
