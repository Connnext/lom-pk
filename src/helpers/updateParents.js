import React from "react";

export const getSelectedLabels = (options, selectedOptions) => {
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
export const getSelectedLabelsBrands = (options, selectedOptions) => {
  return options
    .filter((option) => selectedOptions.includes(option))
    .join(", ");
};

export const renderOptionsBrands = (
  options,
  level,
  handleChecked,
  handleChange
) => {
  return options.map((option) => (
    <div key={option} className={`dropdown-item level-${level}`}>
      <input
        className="filter__checkbox"
        type="checkbox"
        id={`option-${option}`}
        value={option}
        checked={handleChecked(option)}
        onChange={handleChange}
      />
      <label className="dropdown__brands--label" htmlFor={`option-${option}`}>
        {option}
      </label>
    </div>
  ));
};
export const renderOptions = (
  optionsToRender,
  level,
  handleChecked,
  handleChange,
  toggleCategory,
  expandedCategories,
  selectedOptions
) => {
  return optionsToRender.map((option) => (
    <React.Fragment key={option.id}>
      <div
        className={`dropdown-item level-${level}`}
        onClick={() => toggleCategory(option.id)}
      >
        <label className="dropdown__categories--label">
          <input
            className="filter__checkbox"
            type="checkbox"
            value={option.id}
            checked={handleChecked(option.id)}
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
          />
          {option.name}

          {/* Точка показывающая что выбрана подкатегория в категории */}
          {option.children &&
            option.children.some(
              (child) =>
                selectedOptions.includes(child.id.toString()) ||
                (child.children &&
                  hasSelectedSubcategories(child, selectedOptions))
            ) && <span className="selected-indicator"></span>}
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
            {renderOptions(
              option.children,
              level + 1,
              handleChecked,
              handleChange,
              toggleCategory,
              expandedCategories,
              selectedOptions
            )}
          </div>
        )}
    </React.Fragment>
  ));
};

const hasSelectedSubcategories = (category, selectedOptions) => {
  if (category.children) {
    return category.children.some(
      (child) =>
        selectedOptions.includes(child.id.toString()) ||
        (child.children && hasSelectedSubcategories(child, selectedOptions))
    );
  }
  return false;
};
