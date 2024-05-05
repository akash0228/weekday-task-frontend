import React, { useState } from "react";
import "./Input.css";

const InputSearch = ({ height, width, placeholderText, handleCompany }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    handleCompany(e.target.value);
  };

  return (
    <input
      placeholder={placeholderText}
      style={{
        height: height,
        width: width,
        borderRadius: "5px",
        border: "1px solid #E2E2E2",
        color: "#E2E2E2",
      }}
      onChange={handleChange}
      value={search}
    />
  );
};

export default InputSearch;
