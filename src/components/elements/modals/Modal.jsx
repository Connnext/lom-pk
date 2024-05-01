import React, { useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "store/slices/modalSlice";
import "./modal.css";
import CloseButton from "../buttons/CloseButton";

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  console.log(`modaleddddddddddd ${showModal}`);
  const handleCloseModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    dispatch(setShowModal(false));
  };

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".modal__content")) {
      handleCloseModal();
    }
  }, []);

  useLayoutEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, handleClickOutside]);
  return (
    <div className={showModal ? "modal active" : "modal"}>
      <div className={showModal ? "modal__content active" : "modal__content"}>
        <div className="modal__button">
          <CloseButton onClick={handleCloseModal} />
        </div>
        {children}
      </div>
    </div>
  );
}
