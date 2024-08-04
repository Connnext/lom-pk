import React, { useState, useRef } from "react";
import {
  getSelectedLabelsBrands,
  renderOptionsBrands,
} from "helpers/updateParents";
import useOutsideClickAndEsc from "hooks/useOutsideClickAndEsc";
import "./../dropdown.css";

const DropdownBrands = ({
  options,
  selectedOptions,
  onSelect,
  placeholder,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // состояние для поля поиска
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOutsideClickAndEsc(dropdownRef, closeDropdown);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dropdown" ref={dropdownRef}>
      <label className="dropdown-label">{label}</label>
      <button
        type="button"
        onClick={handleToggleDropdown}
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
      >
        <span className="dropdown-text">
          {selectedOptions.length
            ? getSelectedLabelsBrands(options, selectedOptions)
            : placeholder}
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-menu-inner">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск..."
              className="dropdown-search-input"
            />
            <DropdownOptions
              options={filteredOptions}
              selectedOptions={selectedOptions}
              onSelect={onSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownOptions = ({ options, selectedOptions, onSelect }) => {
  const handleChecked = (option) => {
    return selectedOptions.includes(option);
  };

  const handleChange = (e) => {
    const { target } = e;
    if (!target) return;

    const { value, checked } = target;
    let newSelectedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);

    onSelect(newSelectedOptions);
  };

  return renderOptionsBrands(options, 0, handleChecked, handleChange);
};

export default DropdownBrands;
