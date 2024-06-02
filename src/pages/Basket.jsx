import SliderStocks from "components/elements/carousel/SliderStocks";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import React from "react";
import { useGetBasketQuery } from "./../redux/services/basketService";
import Spinner from "components/elements/spinners/Spinner";

export default function Basket() {
  const basket = "Корзина";
  const { data, isError, isLoading } = useGetBasketQuery();

  const clearBasketStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
  };
  if (isError) {
    console.error("Error fetching basket:", isError);
    // Показать сообщение об ошибке пользователю
  }
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={basket} />
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            {data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
              <div style={clearBasketStyle}>
                <p style={{ textAlign: "center" }}>Корзина пуста...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
