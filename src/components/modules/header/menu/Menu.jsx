import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../searchBar/SearchBar";
import Logo from "../../../elements/logo/Logo";
import basket from "./../../../../img/basket.png";
import compare from "./../../../../img/compare.png";
import favorites from "./../../../../img/favorites.png";
import account from "./../../../../img/account.png";
import {
  ACCOUNT_ROUTE,
  BASKET_ROUTE,
  COMPARE_ROUTE,
  FAVORITES_ROUTE,
} from "utils/constants";
import "./menu.css";
import {
  setFormType,
  setShowCatalogModal,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import Form from "components/elements/forms/Form";
import Catalog from "components/modules/catalog/Catalog";

export default function Menu() {
  const dispatch = useDispatch();
  const roleFromRedux = useSelector((state) => state.user.role);
  const role = localStorage.getItem("role") || roleFromRedux;
  const showModal = useSelector((state) => state.modal.showCatalogModal);
  const handleLoginClick = (e) => {
    e.stopPropagation();
    dispatch(setShowModal(true));
    dispatch(setFormType("login"));
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
  console.log(role);
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
            <Link to={FAVORITES_ROUTE}>
              <img className="menu__image" src={favorites} alt="favorites" />
            </Link>
            <Link to={COMPARE_ROUTE}>
              <img className="menu__image" src={compare} alt="compare" />
            </Link>
            {basket > 0 ? (
              <Link to={BASKET_ROUTE}>
                <img className="menu__image" src={basket} alt="basket" />
              </Link>
            ) : (
              <div onClick={handleBasketClick}>
                <img className="menu__image" src={basket} alt="basket" />
                <Form />
              </div>
            )}
            {role != null ? (
              <Link to={ACCOUNT_ROUTE}>
                <img className="menu__image" src={account} alt="account" />
              </Link>
            ) : (
              <div onClick={handleLoginClick}>
                <img className="menu__image" src={account} alt="account" />
                <Form />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
