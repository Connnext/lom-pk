import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../../redux/services/productService";
import Spinner from "../../spinners/Spinner";
import "./showMoreButton.css";

const ShowMoreButton = ({ filter }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsQuery({ filter });
  const handleClick = () => {
    navigate(`/shop?filter=${filter}`);
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
