import React, { useMemo, useState } from "react";
import ModalCatalog from "components/elements/modals/modalCatalog/ModalCatalog";
import { useGetCategoriesQuery } from "./../../../redux/services/categoriesService";
import verticalDivider from "./../../elements/dividers/verticalDivider";
import { Link } from "react-router-dom";
import { categoriesInfo } from "utils/categoriesInfo";
import { SHOP_ROUTE } from "utils/constants";
import Spinner from "components/elements/spinners/Spinner";
import { catalog_text, categories_text } from "utils/textDecorate";
import { useDispatch, useSelector } from "react-redux";
import { setFilterParams } from "./../../../redux/store/slices/productSlice";
import { setShowCatalogModal } from "./../../../redux/store/slices/modalSlice";
import "./catalog.css";

export default function Catalog() {
  const { data: categoriesData, isLoading } = useGetCategoriesQuery({
    parent_id: 0,
    deep_level: 2,
  });
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(1);
  const filterParams = useSelector((state) => state.product.filterParams);
  console.log(filterParams);
  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSetFilters = (categoryId) => {
    dispatch(setFilterParams({ categories: [categoryId] }));
    dispatch(setShowCatalogModal(false));
  };

  return (
    <ModalCatalog>
      <h2 className="catalog__title">{catalog_text}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="colums__wrapper">
            <div className="colum__category">
              <h3 className="catalog__categories--title">{categories_text}</h3>
              <ul className="catalog__categories">
                {categoriesData.map((category) => (
                  <li key={category.id}>
                    <Link
                      onClick={() => handleSetFilters(category.id)}
                      className="catalog__category--link"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "rgb(133, 10, 10)",
                      }}
                      to={SHOP_ROUTE}
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
                {categoriesData?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.children.map((childCategory) => (
                          <li className="catalog__item" key={childCategory.id}>
                            <Link
                              onClick={() => handleSetFilters(childCategory.id)}
                              className="catalog__item--link"
                              to={SHOP_ROUTE}
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
          </div>
        </>
      )}
    </ModalCatalog>
  );
}
