import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "./../../redux/services/productService";
import InfoTitle from "components/elements/titles/InfoTitle";
import ItemCards from "components/modules/item/ItemCards";
import ShowMoreButton from "components/elements/buttons/showMoreButton/ShowMoreButton";
import Spinner from "components/elements/spinners/Spinner";
import SliderStocks from "components/elements/carousel/SliderStocks";
import Layout from "components/modules/layouts/Layout";
import SliderBrands from "components/elements/carousel/SliderBrands";
import { useGetBasketQuery } from "./../../redux/services/basketService";
import { setBasket } from "./../../redux/store/slices/userSlice";
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
  const is_auth = useSelector((state) => state.user.is_auth);
  const dispatch = useDispatch();
  const { data: basketData, refetch } = useGetBasketQuery();

  useEffect(() => {
    if (is_auth) {
      refetch();
    }
  }, [is_auth, refetch]);

  useEffect(() => {
    if (basketData) {
      dispatch(setBasket(basketData));
    }
  }, [basketData, dispatch]);

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
      <SliderStocks />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductSection title="Хиты" data={hitData} feature={IS_HIT} />
          <ProductSection title="Новинки" data={newData} feature={IS_NEW} />
          <ProductSection title="Акции" data={saleData} feature={IS_SALE} />
          <SliderBrands />
          <div>отзывы</div>
        </>
      )}
    </Layout>
  );
}
