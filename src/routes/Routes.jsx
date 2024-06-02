import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "pages/Basket";
import ItemPage from "pages/ItemPage";
import Compare from "pages/Compare";
import Account from "pages/Account";
import Favorites from "pages/Favorites";
import Pay from "pages/Pay";
import Delivery from "pages/Delivery";
import News from "pages/News";
import AboutUs from "pages/AboutUs";
import Admin from "pages/Admin";

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
} from "./../utils/constants";
import Guarantees from "pages/Guarantees";
import Contacts from "pages/Contacts";
import Home from "pages/Home";
import Shop from "pages/Shop";
import Confirm from "pages/Confirm";

export default function AppRoutes() {
  return (
    <Routes>
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
      <Route path={NEWS_ROUTE} element={<News />} />
      <Route path={CONTACTS_ROUTE} element={<Contacts />} />
      <Route path={GUARANTEES_ROUTE} element={<Guarantees />} />
      <Route path={CONFIRM_ROUTE} element={<Confirm />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
