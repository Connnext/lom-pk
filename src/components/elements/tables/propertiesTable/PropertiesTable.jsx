import React from "react";
import "./propertiesTable.css";

const propertyNameMap = {
  country: "Страна",
  guarantee: "Гарантия",
};

export default function PropertiesTable({ properties }) {
  if (!properties || properties.length === 0) return null;

  return (
    <table className="properties-table">
      <thead>
        <tr>
          <th>Свойство</th>
          <th>Значение</th>
        </tr>
      </thead>
      <tbody>
        {properties
          .filter((property) => property.value) // фильтрация пустых значений
          .map((property, index) => {
            const propertyName =
              propertyNameMap[property.name] || property.name;
            return (
              <tr key={index}>
                <td>{propertyName}</td>
                <td>{property.value}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
