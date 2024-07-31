import React, { useState, useRef } from "react";
import useOutsideClickAndEsc from "hooks/useOutsideClickAndEsc";
import "./dropdown.css";
import {
  getSelectedLabels,
  renderOptions,
  updateParents,
} from "helpers/updateParents";

const Dropdown = ({
  options,
  selectedOptions,
  onSelect,
  placeholder,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ссылка на элемент dropdown

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOutsideClickAndEsc(dropdownRef, closeDropdown);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
            ? getSelectedLabels(options, selectedOptions)
            : placeholder}
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-menu-inner">
            <DropdownOptions
              options={options}
              selectedOptions={selectedOptions}
              onSelect={onSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Компонент для отображения опций в dropdown
const DropdownOptions = ({ options, selectedOptions, onSelect }) => {
  // Состояние для отслеживания развернутых категорий
  const [expandedCategories, setExpandedCategories] = useState({});

  // Проверка, выбрана ли опция
  const handleChecked = (optionId) => {
    console.log(optionId);
    return selectedOptions.includes(optionId.toString());
  };

  // Обработка изменения выбора опции
  const handleChange = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    let newSelectedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);

    onSelect(newSelectedOptions);
  };

  // Переключение состояния развернутости категории
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Отображение опций с использованием функции renderOptions
  return renderOptions(
    options,
    0,
    handleChecked,
    handleChange,
    toggleCategory,
    expandedCategories,
    selectedOptions
  );
};

export default Dropdown;
