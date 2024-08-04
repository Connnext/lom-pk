import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updatePosition = useCallback(
    debounce(() => {
      setScrollPosition(window.pageYOffset);
    }, 100), // Задержка в миллисекундах
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Устанавливаем начальную позицию

    return () => window.removeEventListener("scroll", updatePosition);
  }, [updatePosition]);

  return scrollPosition;
};

export default useScrollPosition;
