import SliderBrands from "components/elements/carousel/SliderBrands";
import SliderStocks from "components/elements/carousel/SliderStocks";
import Layout from "components/modules/layouts/Layout";
import React from "react";
import img from "./../img/phpeyjgaa-200.jpg";
import InfoTitle from "components/elements/titles/InfoTitle";
import ItemCards from "components/modules/item/ItemCards";
import { useGetProductQuery } from "../redux/services/productService";
import ShowMoreButton from "components/elements/buttons/showMoreButton/ShowMoreButton";
import Spinner from "components/elements/spinners/Spinner";

export default function Home() {
  // Ваши параметры для хитов
  const bodyHits = {
    min_price: 2,
    max_price: 200_000,
    page: 1,
    page_limit: 4,
    sort_by: "price",
    sort_order: "asc",
    is_hit: 1,
  };

  // Ваши параметры для новинок
  const bodyNews = {
    min_price: 10000,
    max_price: 1_000_000,
    page: 1,
    page_limit: 4,
    sort_by: "price",
    sort_order: "asc",
    is_hit: 0,
  };

  // Ваши параметры для акций
  const bodyActions = {
    // min_price: 10,
    // max_price: 200_000,
    page: 1,
    page_limit: 4,
    sort_by: "price",
    sort_order: "asc",
    is_hit: 0,
  };
  const { data: dataHits, isLoading: isLoadingHits } =
    useGetProductQuery(bodyHits);
  const { data: dataNew, isLoading: isLoadingNew } =
    useGetProductQuery(bodyNews);
  const { data: dataActions, isLoading: isLoadingActions } =
    useGetProductQuery(bodyActions);
  console.log(dataHits);
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        {isLoadingHits || isLoadingNew || isLoadingActions ? (
          <Spinner />
        ) : (
          <>
            <InfoTitle title="Хиты" />
            <ItemCards data={dataHits} />
            <ShowMoreButton filter="hits" />
            <InfoTitle title="Новинки" />
            <ItemCards data={dataNew} />
            <ShowMoreButton filter="news" />
            <InfoTitle title="Акции" />
            <ItemCards data={dataActions} />
            <ShowMoreButton filter="sales" />
            {/* <SliderBrands /> */}
            <div>отзывы</div>
          </>
        )}
      </div>
    </Layout>
  );
}
