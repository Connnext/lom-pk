import React, { useMemo, useState } from "react";
import ModalCatalog from "components/elements/modals/modalCatalog/ModalCatalog";
import { useGetCategoriesQuery } from "./../../../redux/services/categoriesService";
import { Link } from "react-router-dom";
import { categoriesInfo } from "utils/categoriesInfo";
import { SHOP_ROUTE } from "utils/constants";
import Spinner from "components/elements/spinners/Spinner";
import { catalog_text, categories_text } from "utils/textDecorate";
import { useDispatch, useSelector } from "react-redux";
import { setFilterParams } from "./../../../redux/store/slices/productSlice";
import { setShowCatalogModal } from "./../../../redux/store/slices/modalSlice";
import VerticalDivider from "components/elements/dividers/verticalDivider/VerticalDivider";
import "./catalog.css";

export default function Catalog() {
  const { data: categoriesData, isLoading } = useGetCategoriesQuery({
    parent_id: 0,
    deep_level: 2,
  });
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSetFilters = (name, value) => {
    dispatch(setFilterParams({ [name]: [value] }));
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
                      onClick={() =>
                        handleSetFilters("categories", category.id)
                      }
                      className="catalog__category--link"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "var(--primary-color)",
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
            <VerticalDivider hideAt={1070} />
            <div className="colum__category colum__subcategories">
              <h3 className="catalog__categories--title">Подкатегории:</h3>
              <div className="colum__category--info">
                {categoriesData?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.children.map((childCategory) => (
                          <li className="catalog__item" key={childCategory.id}>
                            <Link
                              onClick={() =>
                                handleSetFilters("categories", childCategory.id)
                              }
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
            <VerticalDivider hideAt={1070} />
            <div className="colum__category colum__brands">
              <h3 className="catalog__categories--title">Бренды:</h3>
              <div className="colum__category--info">
                {categoriesData?.map(
                  (category) =>
                    activeCategory === category.id && (
                      <ul className="catalog__subcategories" key={category.id}>
                        {category.brands.map((brand) => (
                          <li className="catalog__item" key={brand.id}>
                            <Link
                              onClick={() =>
                                handleSetFilters("brands", brand.name)
                              }
                              className="catalog__item--link"
                              to={SHOP_ROUTE}
                            >
                              {brand.name}
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
