import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "pages/basket/Basket";
import ItemPage from "pages/itemPage/ItemPage";
import Compare from "pages/compare/Compare";
import Account from "pages/account/Account";
import Favorites from "pages/favorites/Favorites";
import Pay from "pages/pay/Pay";
import Delivery from "pages/delivery/Delivery";
import AboutUs from "pages/aboutUs/AboutUs";
import Admin from "pages/admin/Admin";
import Guarantees from "pages/guarantees/Guarantees";
import Contacts from "pages/contacts/Contacts";
import Home from "pages/home/Home";
import Shop from "pages/shop/Shop";
import Confirm from "pages/confirm/Confirm";
import Order from "pages/order/Order";
import Reset from "pages/reset/Reset";
import {
  ABOUT_ROUTE,
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  COMPARE_ROUTE,
  FAVORITES_ROUTE,
  ITEM_ROUTE,
  PAY_ROUTE,
  DELIVERY_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  CONTACTS_ROUTE,
  GUARANTEES_ROUTE,
  SHOP_ROUTE,
  CONFIRM_ROUTE,
  ORDER_ROUTE,
  RESET_ROUTE,
} from "./../utils/constants";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={SHOP_ROUTE} element={<Shop />} />
      <Route path={ADMIN_ROUTE} element={<Admin />} />
      <Route path={ITEM_ROUTE} element={<ItemPage />} />
      <Route path={COMPARE_ROUTE} element={<Compare />} />
      <Route path={ACCOUNT_ROUTE} element={<Account />} />
      <Route path={FAVORITES_ROUTE} element={<Favorites />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={PAY_ROUTE} element={<Pay />} />
      <Route path={DELIVERY_ROUTE} element={<Delivery />} />
      <Route path={ABOUT_ROUTE} element={<AboutUs />} />
      <Route path={CONTACTS_ROUTE} element={<Contacts />} />
      <Route path={GUARANTEES_ROUTE} element={<Guarantees />} />
      <Route path={CONFIRM_ROUTE} element={<Confirm />} />
      <Route path={ORDER_ROUTE} element={<Order />} />
      <Route path={RESET_ROUTE} element={<Reset />} />
    </Routes>
  );
}
