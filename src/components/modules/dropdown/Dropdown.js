import React, { useState, useRef } from "react";
import useOutsideClickAndEsc from "hooks/useOutsideClickAndEsc";
import "./dropdown.css";

const Dropdown = ({
  options,
  selectedOptions,
  onSelect,
  placeholder,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };
  useOutsideClickAndEsc(dropdownRef, closeDropdown);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChecked = (optionId) => {
    return selectedOptions.includes(optionId.toString());
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    let newSelectedOptions;
    if (isChecked) {
      newSelectedOptions = [...selectedOptions, value];
    } else {
      newSelectedOptions = selectedOptions.filter((option) => option !== value);
    }

    // Обновляем родительские категории
    const updateParents = (options, selectedIds) => {
      options.forEach((option) => {
        if (option.children) {
          const allChildrenSelected = option.children.every(
            (child) =>
              selectedIds.includes(child.id.toString()) ||
              (child.children && updateParents(child.children, selectedIds))
          );
          if (
            allChildrenSelected &&
            !selectedIds.includes(option.id.toString())
          ) {
            selectedIds.push(option.id.toString());
          } else if (
            !allChildrenSelected &&
            selectedIds.includes(option.id.toString())
          ) {
            selectedIds = selectedIds.filter(
              (id) => id !== option.id.toString()
            );
          }
          updateParents(option.children, selectedIds);
        }
      });
      return selectedIds;
    };

    newSelectedOptions = updateParents(options, newSelectedOptions);

    onSelect(newSelectedOptions);
  };
  const getSelectedLabels = () => {
    const getLabel = (id) => {
      for (const option of options) {
        if (option.id.toString() === id) return option.name;
        if (option.children) {
          const childLabel = option.children.find(
            (child) => child.id.toString() === id
          )?.name;
          if (childLabel) return childLabel;
        }
      }
    };

    return selectedOptions.map(getLabel).filter(Boolean).join(", ");
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };
  const hasSelectedSubcategories = (category) => {
    if (category.children) {
      return category.children.some(
        (child) =>
          selectedOptions.includes(child.id.toString()) ||
          (child.children && hasSelectedSubcategories(child))
      );
    }
    return false;
  };
  const renderOptions = (optionsToRender, level = 0) => {
    return optionsToRender.map((option) => (
      <React.Fragment key={option.id}>
        <div
          className={`dropdown-item level-${level}`}
          onClick={() => toggleCategory(option.id)}
        >
          <label>
            <input
              type="checkbox"
              name={label}
              value={option.id}
              checked={handleChecked(option.id)}
              onChange={handleChange}
            />
            {option.name}
            {hasSelectedSubcategories(option) && (
              <span className="selected-indicator"></span>
            )}
          </label>
          {option.children && option.children.length > 0 && (
            <button
              className={`toggle-subcategory ${
                expandedCategories[option.id] ? "open" : "closed"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleCategory(option.id);
              }}
            ></button>
          )}
        </div>
        {option.children &&
          option.children.length > 0 &&
          expandedCategories[option.id] && (
            <div className="subcategories">
              {renderOptions(option.children, level + 1)}
            </div>
          )}
      </React.Fragment>
    ));
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
          {selectedOptions.length ? getSelectedLabels() : placeholder}
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-menu-inner">{renderOptions(options)}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
