import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../searchBar/SearchBar";
import Logo from "../../../elements/logo/Logo";
import basketImg from "./../../../../img/basket.png";
// import compare from "./../../../../img/compare.png";
// import favorites from "./../../../../img/favorites.png";
import account from "./../../../../img/account.png";
import {
  ACCOUNT_ROUTE,
  BASKET_ROUTE,
  // COMPARE_ROUTE,
  // FAVORITES_ROUTE,
} from "utils/constants";
import {
  setFormType,
  setShowCatalogModal,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import Form from "components/elements/forms/Form";
import Catalog from "components/modules/catalog/Catalog";
import { useGetBasketQuery } from "./../../../../redux/services/basketService";
import "./menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const { data: dataBasket, isError, isLoading } = useGetBasketQuery();
  console.log(dataBasket);
  const formType = useSelector((state) => state.modal.formType);
  const showModal = useSelector((state) => state.modal.showCatalogModal);
  const is_auth_FromRedux = useSelector((state) => state.user.is_auth);
  const is_auth =
    localStorage.getItem("is_auth") == "true" || is_auth_FromRedux;

  const basket = (dataBasket?.items.length && is_auth) || 0;
  console.log(basket);

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
      <div className="container">
        <div className="menu__wrap">
          <div className="menu__main">
            <div className="menu__logo">
              <Logo />
              <span className="menu__logo--text">
                Ломоносовcкий <br /> печной клуб
              </span>
            </div>
            <button onClick={handleCatalogClick} className="menu__catalog">
              Каталог
            </button>
            {showModal && <Catalog />}
            <SearchBar />
          </div>
          <div className="menu__actions">
            {/* <Link to={FAVORITES_ROUTE}>
              <img className="menu__image" src={favorites} alt="favorites" />
            </Link>
            <Link to={COMPARE_ROUTE}>
              <img className="menu__image" src={compare} alt="compare" />
            </Link> */}
            {basket > 0 ? (
              <Link to={BASKET_ROUTE}>
                <img className="menu__image" src={basketImg} alt="basket" />
              </Link>
            ) : (
              <div onClick={handleBasketClick}>
                <img className="menu__image" src={basketImg} alt="basket" />
                {/* <Form /> */}
              </div>
            )}

            {is_auth ? (
              <Link to={ACCOUNT_ROUTE}>
                <img className="menu__image" src={account} alt="account" />
              </Link>
            ) : (
              <div onClick={handleLoginClick}>
                <img className="menu__image" src={account} alt="account" />
                {/* <Form /> */}
              </div>
            )}
            {!is_auth || basket < 1 ? <Form /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
