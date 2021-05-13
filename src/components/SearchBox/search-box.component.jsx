import React from "react";
import "./search-box.styles.css";

function Searchbox({ placeholder, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default Searchbox;
