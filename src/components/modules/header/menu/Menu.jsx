import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../searchBar/SearchBar";
import Logo from "../../../elements/logo/Logo";
import basketImg from "./../../../../img/basket.png";
import account from "./../../../../img/account.png";
import { ACCOUNT_ROUTE, BASKET_ROUTE } from "utils/constants";
import {
  setFormType,
  setShowCatalogModal,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import Form from "components/elements/forms/Form";
import Catalog from "components/modules/catalog/Catalog";
import { useGetBasketQuery } from "./../../../../redux/services/basketService";
import Container from "components/modules/container/Container";
import "./menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const { data: dataBasket, isError, isLoading } = useGetBasketQuery();
  const formType = useSelector((state) => state.modal.formType);
  const showModal = useSelector((state) => state.modal.showCatalogModal);
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  const is_auth =
    localStorage.getItem("is_auth") == "true" || is_auth_FromRedux;

  const basket = (is_auth && dataBasket?.items.length) || 0;
  const [basketCount, setBasketcount] = useState(basket);

  useEffect(() => {
    if (is_auth && dataBasket?.items.length) {
      setBasketcount(dataBasket?.items.length);
    } else setBasketcount(0);
  });

  const handleLoginClick = (e) => {
    e.stopPropagation();
    dispatch(setShowModal(true));
    if (!formType) dispatch(setFormType("login"));
  };
  const handleBasketClick = (e) => {
    e.stopPropagation();
    dispatch(setShowModal(true));
    dispatch(setFormType("emptyBasket"));
  };
  const handleCatalogClick = (e) => {
    e.stopPropagation();
    dispatch(setShowCatalogModal(true));
  };

  return (
    <div className="menu">
      <Container>
        <div className="menu__wrap">
          <div className="menu__main">
            <div className="menu__logo">
              <Logo />
            </div>
            <button onClick={handleCatalogClick} className="menu__catalog">
              Каталог
            </button>
            {showModal && <Catalog />}
          </div>

          <SearchBar />
          <div className="menu__actions">
            {basket > 0 ? (
              <Link className="menu__link" to={BASKET_ROUTE}>
                <div className="basket-icon">
                  <img className="menu__image" src={basketImg} alt="basket" />
                  <span className="basket-count">{basketCount}</span>
                </div>
                <span className="menu__label">Корзина</span>
              </Link>
            ) : (
              <div className="menu__link" onClick={handleBasketClick}>
                <img className="menu__image" src={basketImg} alt="basket" />
                <span className="menu__label">Корзина</span>
              </div>
            )}
            {is_auth ? (
              <Link className="menu__link" to={ACCOUNT_ROUTE}>
                <img className="menu__image" src={account} alt="account" />
                <span className="menu__label">Профиль</span>
              </Link>
            ) : (
              <div className="menu__link" onClick={handleLoginClick}>
                <img className="menu__image" src={account} alt="account" />
                <span className="menu__label">Войти</span>
              </div>
            )}

            {!is_auth || basket < 1 ? <Form /> : null}
          </div>
        </div>
      </Container>
    </div>
  );
}
