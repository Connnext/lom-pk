import React, { useState, useEffect } from "react";

const StickyHeader = ({ children, threshold = 50 }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return (
    <header id="header" className={`header ${isSticky ? "fixed" : ""}`}>
      {children}
    </header>
  );
};

export default StickyHeader;
