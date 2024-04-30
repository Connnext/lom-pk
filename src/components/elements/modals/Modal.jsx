import React, { useRef, useCallback, useLayoutEffect } from "react";
import "./modal.css";

export default function Modal({ active, setActive, children }) {
  const modalRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActive(false);
      }
    },
    [setActive]
  );

  useLayoutEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, setActive, handleClickOutside]);

  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal_content active" : "modal_content"}
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
}
