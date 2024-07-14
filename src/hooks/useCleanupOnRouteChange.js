import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetProductState } from "./../redux/store/slices/productSlice";
import { SHOP_ROUTE } from "utils/constants";
import { useEffect } from "react";

const useCleanupOnRouteChange = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const filterParams = useSelector((state) => state.product.filterParams);
  console.log(filterParams);
  const localStorag = localStorage.getItem("product");
  console.log(localStorag);
  useEffect(() => {
    if (location.pathname !== SHOP_ROUTE) {
      console.log("hi");
      localStorage.removeItem("product");
      dispatch(resetProductState());
    }
  }, [location.pathname, dispatch]);
};

export default useCleanupOnRouteChange;
