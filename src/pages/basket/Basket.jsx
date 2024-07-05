import React, { useEffect, useState } from "react";
import SliderStocks from "components/elements/carousel/SliderStocks";
import InfoTitle from "components/elements/titles/InfoTitle";
import Layout from "components/modules/layouts/Layout";
import Spinner from "components/elements/spinners/Spinner";
import BasketItem from "components/modules/item/basketItem/BasketItem";
import { useGetBasketQuery } from "../../redux/services/basketService";
import BasketSum from "components/modules/basketSum/BasketSum";
import SelectAllButton from "components/elements/buttons/selectAllButton/SelectAllButton";
import ClearAllButton from "components/elements/buttons/clearAllButton/ClearAllButton";
import { Link, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "./../../redux/store/slices/userSlice";
import "./basket.css";

export default function Basket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: dataBasket, isError, isLoading, refetch } = useGetBasketQuery();
  console.log(`Наш баскет`, dataBasket);
  const [selectedItems, setSelectedItems] = useState([]);
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  useEffect(() => {
    const is_auth = localStorage.getItem("is_auth") || is_auth_FromRedux;
    if (!is_auth) navigate("/");
    if (dataBasket) dispatch(setBasket(dataBasket));
  }, [navigate, dataBasket]);

  useEffect(() => {
    if (dataBasket && dataBasket.items) {
      setSelectedItems(dataBasket.items);
    }
  }, [dataBasket]);

  const handleSelectAll = () => {
    const newSelectedItems = dataBasket.items.map((item) => ({
      ...item,
      amount: item.amount,
    }));
    setSelectedItems(newSelectedItems);
  };

  const handleUnselectAll = () => {
    setSelectedItems([]);
  };

  const handleItemSelect = (productId) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((item) => item.product_id === productId);
      if (isSelected) {
        return prev.filter((item) => item.product_id !== productId);
      } else {
        const selectedItem = dataBasket.items.find(
          (item) => item.product_id === productId
        );
        return [...prev, { ...selectedItem, amount: selectedItem.amount }];
      }
    });
  };
  const basketCount = dataBasket?.items?.length || 0;
  if (isError) console.error("Error fetching basket:", isError);
  return (
    <Layout>
      <div className="container">
        <SliderStocks />
        <InfoTitle title={"Корзина"} />
        {isLoading ? (
          <Spinner />
        ) : basketCount < 1 ? (
          <p>
            Корзина пуста, посмотрите наш ассортимент на{" "}
            <Link className="empty-basket-link" to={HOME_ROUTE}>
              «Главной»
            </Link>{" "}
            странице
          </p>
        ) : (
          <div className="basket__info">
            <div className="basket__items--wrapper">
              <div className="basket__select--actions">
                <SelectAllButton onClick={handleSelectAll} />
                <ClearAllButton onClick={handleUnselectAll} />
              </div>
              {console.log(`dataBasket`, dataBasket.items)}
              {dataBasket?.items?.map((item) => (
                <BasketItem
                  key={item.product_id}
                  product_id={item.product_id}
                  amount={item.amount}
                  price={item.price}
                  preview_img={item.preview_img}
                  title={item.title}
                  category_name={item.category_name}
                  brand={item.brand}
                  old_price={item.old_price}
                  is_hit={item.is_hit}
                  article={item.article}
                  isSelected={selectedItems.some(
                    (selectedItem) =>
                      selectedItem.product_id === item.product_id
                  )}
                  onSelect={() => handleItemSelect(item.product_id)}
                  onUpdate={refetch}
                />
              ))}
            </div>
            <div
              style={{
                borderLeft: "1px solid rgb(206, 212, 215)",
                height: "auto",
              }}
            />
            <BasketSum data={dataBasket} selectedItems={selectedItems} />
          </div>
        )}
      </div>
    </Layout>
  );
}
