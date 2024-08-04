import React from "react";

export default function SearchButton({ correctSearch }) {
  return (
    <button
      disabled={!correctSearch}
      type="submit"
      className="search-button"
    ></button>
  );
}
