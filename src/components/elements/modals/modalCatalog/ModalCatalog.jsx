import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCatalogModal } from "../../../../redux/store/slices/modalSlice";
import CloseButton from "../../buttons/closeButton/CloseButton";
import "./modalCatalog.css";

export default function ModalCatalog({ children }) {
  const dispatch = useDispatch();
  const showCatalogModal = useSelector((state) => state.modal.showCatalogModal);

  const handleCloseModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    dispatch(setShowCatalogModal(false));
  };

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".modalCatalog")) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    if (showCatalogModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showCatalogModal]);

  useLayoutEffect(() => {
    if (showCatalogModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCatalogModal, handleClickOutside]);

  return (
    <>
      {showCatalogModal && <div className="overlayCatalog"></div>}
      <div
        className={`${
          showCatalogModal
            ? "modalCatalog active"
            : !showCatalogModal
            ? "modalCatalog closing"
            : "modalCatalog"
        }`}
      >
        <div className="modalCatalog__content">
          <div className="modal__button">
            <CloseButton onClick={handleCloseModal} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
