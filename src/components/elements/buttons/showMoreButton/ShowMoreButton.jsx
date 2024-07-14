import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../../redux/services/productService";
import Spinner from "../../spinners/Spinner";
import { useDispatch } from "react-redux";
import { setSortParams } from "./../../../../redux/store/slices/productSlice";
import "./showMoreButton.css";

const ShowMoreButton = ({ feature }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery({ [feature]: true });
  const handleClick = () => {
    navigate(`/shop`);
    dispatch(setSortParams({ [feature]: true }));
  };

  return (
    <div className="show__more--wrapper">
      <button
        className="show__more--button"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : "Показать больше"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
