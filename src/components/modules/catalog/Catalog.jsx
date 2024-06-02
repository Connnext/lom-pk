import React, { useState } from "react";
import ModalCatalog from "components/elements/modals/modalCatalog/ModalCatalog";
import { useGetCategoriesQuery } from "./../../../redux/services/categoriesService";
import verticalDivider from "./../../elements/dividers/verticalDivider";
import "./catalog.css";
import { Link } from "react-router-dom";
import { categoriesInfo } from "utils/categoriesInfo";
import { SHOP_ROUTE } from "utils/constants";
import Spinner from "components/elements/spinners/Spinner";

export default function Catalog() {
  const body = {
    parent_id: 0,
    deep_level: 2,
  };

  const { data, isLoading } = useGetCategoriesQuery(body);
  const [activeCategory, setActiveCategory] = useState(2);

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <ModalCatalog>
      <h2 className="catalog__title">Каталог</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="colums__wrapper">
            <div className="colum__category">
              <h3 className="catalog__categories--title">Категории:</h3>
              <ul className="catalog__categories">
                {data.categories?.map((category) => (
                  <li key={category.id}>
                    <Link
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "rgb(133, 10, 10)",
                      }}
                      to={SHOP_ROUTE + `/products/?categories=${category.id}`}
                    >
                      <span
                        className={`catalog__category ${
                          activeCategory === category.id ? "active" : ""
                        }`}
                        onMouseEnter={() => handleCategoryHover(category.id)}
                      >
                        {category.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: "1px solid #ced4d7", height: "auto" }}></div>
            <div className="colum__category">
              <h3 className="catalog__categories--title">Подкатегории:</h3>
              <div className="colum__category--info">
                {data.categories?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.children.map((childCategory) => (
                          <li className="catalog__item" key={childCategory.id}>
                            <Link
                              className="catalog__item--link"
                              to={
                                SHOP_ROUTE +
                                `/products?categories=${childCategory.id}`
                              }
                            >
                              {childCategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                )}
              </div>
            </div>
            <div style={{ border: "1px solid #ced4d7", height: "auto" }}></div>
            <div className="colum__category">
              <h3 className="catalog__categories--title">Бренды:</h3>
              <div className="colum__category--info">
                {categoriesInfo.categories?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.brands.map((brand) => (
                          <li className="catalog__item" key={brand}>
                            <Link className="catalog__item--link" to="/">
                              {brand}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                )}
              </div>
            </div>
            <div style={{ border: "1px solid #ced4d7", height: "auto" }}></div>
            <div className="colum__category">
              <h3 className="catalog__categories--title">Особенности:</h3>
              <div className="colum__category--info">
                {categoriesInfo.categories?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.features.map((feature) => (
                          <li className="catalog__item" key={feature}>
                            <Link className="catalog__item--link" to="/">
                              {feature}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                )}
              </div>
            </div>
            <div style={{ border: "1px solid #ced4d7", height: "auto" }}></div>
            <div className="colum__category">
              <h3 className="catalog__categories--title">Аксессуары:</h3>
              <div className="colum__category--info">
                {categoriesInfo.categories?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.accessories.map((accessory) => (
                          <li className="catalog__item" key={accessory}>
                            <Link className="catalog__item--link" to="/">
                              {accessory}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </ModalCatalog>
  );
}
