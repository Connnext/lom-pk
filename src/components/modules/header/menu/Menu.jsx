import React, { useState } from "react";
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
import Login from "components/modules/auth/login/Login";
import { setShowModal } from "store/slices/modalSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const handleLoginClick = (event) => {
    event.stopPropagation();
    dispatch(setShowModal(true));
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
            <button className="menu__catalog">Каталог</button>
            <SearchBar />
          </div>
          <div className="menu__actions">
            <Link to={FAVORITES_ROUTE}>
              <img className="menu__image" src={favorites} alt="favorites" />
            </Link>
            <Link to={COMPARE_ROUTE}>
              <img className="menu__image" src={compare} alt="compare" />
            </Link>
            <Link to={BASKET_ROUTE}>
              <img className="menu__image" src={basket} alt="basket" />
            </Link>
            {isAuthenticated ? (
              <Link to={ACCOUNT_ROUTE}>
                <img className="menu__image" src={account} alt="account" />
              </Link>
            ) : (
              <div onClick={handleLoginClick}>
                <img className="menu__image" src={account} alt="account" />
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
