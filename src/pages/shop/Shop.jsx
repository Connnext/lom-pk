import React, { useState } from "react";
import InfoTitle from "../../components/elements/titles/InfoTitle";
import SliderStocks from "../../components/elements/carousel/SliderStocks";
import Layout from "components/modules/layouts/Layout";
import { useGetProductsQuery } from "../../redux/services/productService";
import ItemCards from "components/modules/item/ItemCards";
import SortProducts from "components/elements/sort/SortProducts";
import { addProducts } from "../../redux/store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import MoreProductsButton from "components/elements/buttons/moreProductsButton/MoreProductsButton";
import { Link, useLocation } from "react-router-dom";
import Spinner from "components/elements/spinners/Spinner";
import { HOME_ROUTE } from "utils/constants";

export default function Shop() {
  const location = useLocation();
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.product.limit);
  // Получение параметра фильтра из URL
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");

  const [sortParams, setSortParams] = useState({
    sort_by: "price",
    sort_order: "asc",
  });
  const handleSortChange = (name, value) => {
    setSortParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };
  const filters = {
    min_price: 2,
    max_price: 200_000,
    page: 1,
    page_limit: limit,
    ...sortParams,
  };
  if (filter === "hits") filters.is_hit = 1; //1 == true
  else if (filter === "news") filters.is_new = true;
  else if (filter === "sales") filters.is_sales = true;

  // Запрос данных продуктов с применением фильтров
  const { data, error, isLoading } = useGetProductsQuery(filters);

  // Обработчик клика для загрузки дополнительных продуктов
  const handleMoreProductsClick = () => {
    dispatch(addProducts());
  };

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div>
        Ошибка загрузки продуктов, перейти на главную страницу{" "}
        <Link to={HOME_ROUTE} />
      </div>
    );
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={"Товары"} />
        <div>фильтры</div>
        <SortProducts onSortChange={handleSortChange} />
        <ItemCards data={data} />
        <MoreProductsButton onClick={handleMoreProductsClick} />
      </div>
    </Layout>
  );
}
