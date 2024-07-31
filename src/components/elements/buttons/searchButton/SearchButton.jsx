import React from "react";

export default function SearchButton({ correctSearch }) {
  console.log(correctSearch);
  return (
    <button
      disabled={!correctSearch}
      type="submit"
      className="search-button"
    ></button>
  );
}
