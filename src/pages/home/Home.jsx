import React from "react";
import { useGetProductsQuery } from "./../../redux/services/productService";
import InfoTitle from "components/elements/titles/InfoTitle";
import ItemCards from "components/modules/item/ItemCards";
import ShowMoreButton from "components/elements/buttons/showMoreButton/ShowMoreButton";
import Spinner from "components/elements/spinners/Spinner";
import SliderStocks from "components/elements/carousel/SliderStocks";
import Layout from "components/modules/layouts/Layout";
import { IS_HIT, IS_NEW, IS_SALE } from "utils/constants";

const getQueryParams = (feature) => {
  const baseParams = {
    min_price: 10_000,
    max_price: 200_000_000,
    page: 1,
    page_limit: 4,
    sort_by: "price",
    sort_order: "asc",
    categories: [],
  };
  switch (feature) {
    case IS_HIT:
      return { ...baseParams, is_hit: true };
    case IS_NEW:
      return { ...baseParams, is_new: true };
    case IS_SALE:
      return { ...baseParams, is_sale: true };
    default:
      return baseParams;
  }
};

const ProductSection = ({ title, data, feature }) => (
  <>
    <InfoTitle title={title} />
    <ItemCards data={data} />
    <ShowMoreButton feature={feature} />
  </>
);

export default function Home() {
  const { data: hitData, isLoading: isLoadingHit } = useGetProductsQuery(
    getQueryParams(IS_HIT)
  );
  const { data: newData, isLoading: isLoadingNew } = useGetProductsQuery(
    getQueryParams(IS_NEW)
  );
  const { data: saleData, isLoading: isLoadingSale } = useGetProductsQuery(
    getQueryParams(IS_SALE)
  );

  const isLoading = isLoadingHit || isLoadingNew || isLoadingSale;

  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ProductSection title="Хиты" data={hitData} feature={IS_HIT} />
            <ProductSection title="Новинки" data={newData} feature={IS_NEW} />
            <ProductSection title="Акции" data={saleData} feature={IS_SALE} />
            {/* <SliderBrands /> */}
            <div>отзывы</div>
          </>
        )}
      </div>
    </Layout>
  );
}
