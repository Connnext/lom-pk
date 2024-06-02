// BackToTopButton.jsx
import React, { useState, useEffect } from "react";
import arrow from "./../../../../img/arrow_top.svg";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [scrolling, setScrolling] = useState(false);

  const scrollToTop = () => {
    setScrolling(true);
    hideButton();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const hideButton = () => {
    const btnUp = document.querySelector(".btn-up");
    if (
      !btnUp.classList.contains("btn-up_hide") &&
      !btnUp.classList.contains("btn-up_hiding")
    ) {
      btnUp.classList.add("btn-up_hiding");
      setTimeout(() => {
        btnUp.classList.add("btn-up_hide");
        btnUp.classList.remove("btn-up_hiding");
      }, 300);
    }
  };

  const showButton = () => {
    const btnUp = document.querySelector(".btn-up");
    if (
      btnUp.classList.contains("btn-up_hide") &&
      !btnUp.classList.contains("btn-up_hiding")
    ) {
      btnUp.classList.remove("btn-up_hide");
      btnUp.classList.add("btn-up_hiding");
      setTimeout(() => {
        btnUp.classList.remove("btn-up_hiding");
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrolling && scrollY > 0) {
        return;
      }
      setScrolling(false);
      if (scrollY > 400) {
        showButton();
      } else {
        hideButton();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div className="btn-up btn-up_hide" onClick={scrollToTop}>
      <img className="btn-up-icon" src={arrow} alt="Arrow" />
    </div>
  );
};

export default BackToTopButton;
