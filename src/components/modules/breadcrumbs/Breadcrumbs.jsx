import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../container/Container";
import { breadcrumbNameMap } from "utils/constants";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumb = localStorage.getItem("breadcrumb");
  return (
    <Container>
      <nav>
        <ul className="breadcrumb">
          <li className="breadcrumb__item">
            <Link className="breadcrumb__link breadcrumb__link--home" to="/">
              {breadcrumbNameMap["/"]}
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            if (value == Number(value)) value = breadcrumb;

            return isLast ? (
              <li className="breadcrumb__item" key={to}>
                {breadcrumbNameMap[`/${value}`] || value}
              </li>
            ) : (
              <li className="breadcrumb__item" key={to}>
                <Link className="breadcrumb__link" to={to}>
                  {breadcrumbNameMap[`/${value}`] || value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Breadcrumbs;
