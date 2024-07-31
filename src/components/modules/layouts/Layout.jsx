import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Content from "../content/Content";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Content children={children} />
      <Footer />
    </>
  );
}
