import { useEffect } from "react";

const useOutsideClickAndEsc = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) callback(false);
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") callback(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [ref, callback]);
};

export default useOutsideClickAndEsc;
