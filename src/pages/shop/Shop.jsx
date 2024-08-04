import React from "react";
import { Link } from "react-router-dom";
import InfoTitle from "../../components/elements/titles/InfoTitle";
import SliderStocks from "../../components/elements/carousel/SliderStocks";
import Layout from "components/modules/layouts/Layout";
import ItemCards from "components/modules/item/ItemCards";
import SortProducts from "components/elements/sort/SortProducts";
import MoreProductsButton from "components/elements/buttons/moreProductsButton/MoreProductsButton";
import Spinner from "components/elements/spinners/Spinner";
import ProductsFilters from "components/modules/productsFilters/ProductsFilters";
import useShopData from "hooks/useShopData";
import { HOME_ROUTE } from "utils/constants";
import useScrollPosition from "hooks/useScrollPosition";

export default function Shop() {
  const { data, error, isLoading, limit } = useShopData();

  useScrollPosition();
  const allProductsLoaded = limit < data?.total_count;

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
      <SliderStocks />
      <InfoTitle title={"Товары"} />
      <ProductsFilters />
      <SortProducts />
      <ItemCards data={data} />
      {allProductsLoaded && <MoreProductsButton />}
    </Layout>
  );
}
