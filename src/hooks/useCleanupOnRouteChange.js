import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  resetBrands,
  resetCategories,
  resetPrice,
  resetProductState,
} from "./../redux/store/slices/productSlice";
import { SHOP_ROUTE } from "utils/constants";

const useCleanupOnRouteChange = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname !== SHOP_ROUTE) {
      localStorage.removeItem("product");
      dispatch(resetProductState());
      dispatch(resetPrice());
      dispatch(resetCategories());
      dispatch(resetBrands());
    }
  }, [location.pathname, dispatch]);
};

export default useCleanupOnRouteChange;
