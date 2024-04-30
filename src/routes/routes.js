import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import ItemPage from "../pages/ItemPage";
import Shop from "../pages/Shop";
import Pay from "../pages/Pay";
import Delivery from "../pages/Delivery";
import AboutUs from "../pages/AboutUs";
import Favorites from "../pages/Favorites";
import Compare from "../pages/Compare";
import Stocks from "../pages/Stocks";
import Account from "../pages/Account";
import News from "../pages/News";
import Guarantees from "../pages/Guarantees";
import Contacts from "../pages/Contacts";

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  ITEM_ROUTE,
  SHOP_ROUTE,
  PAY_ROUTE,
  DELIVERY_ROUTE,
  ABOUT_ROUTE,
  FAVORITES_ROUTE,
  COMPARE_ROUTE,
  STOCKS_ROUTE,
  ACCOUNT_ROUTE,
  NEWS_ROUTE,
  CONTACTS_ROUTE,
  GUARANTEES_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  FORGOT_PASSWORD_ROUTE,
} from "../utils/constants";
import Login from "components/modules/auth/login/Login";
import Register from "components/modules/auth/register/Register";
import ForgotPassword from "components/modules/auth/forgotPassword/ForgotPassword";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: FAVORITES_ROUTE,
    Component: Favorites,
  },
  {
    path: COMPARE_ROUTE,
    Component: Compare,
  },
];
export const publicRoutes = [
  {
    path: ITEM_ROUTE,
    Component: ItemPage,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: PAY_ROUTE,
    Component: Pay,
  },
  {
    path: DELIVERY_ROUTE,
    Component: Delivery,
  },
  {
    path: ABOUT_ROUTE,
    Component: AboutUs,
  },
  {
    path: STOCKS_ROUTE,
    Component: Stocks,
  },
  {
    path: ACCOUNT_ROUTE,
    Component: Account,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
  {
    path: GUARANTEES_ROUTE,
    Component: Guarantees,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    Component: ForgotPassword,
  },
];
