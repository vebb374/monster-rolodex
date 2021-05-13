import React from "react";
import "./search-box.styles.css";

function Searchbox({ placeholder, handleChange }) {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default Searchbox;
