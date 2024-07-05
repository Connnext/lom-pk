import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormType,
  setShowModal,
} from "./../../../../redux/store/slices/modalSlice";
import CloseButton from "../../buttons/closeButton/CloseButton";
import "./modal.css";

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const [closing, setClosing] = useState(false);
  const showModal = useSelector((state) => state.modal.showModal);

  const handleCloseModal = (event) => {
    if (event) event.stopPropagation();
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      dispatch(setShowModal(false));
      dispatch(setFormType(null));
    }, 100);
  };
  const handleClickOutside = useCallback(
    (event) => {
      if (!event.target.closest(".modal__content")) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);
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
    <>
      {closing && <div className="overlay"></div>}
      <div className={showModal ? "modal active" : "modal"}>
        <div className={showModal ? "modal__content active" : "modal__content"}>
          <div className="modal__button">
            <CloseButton onClick={handleCloseModal} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
