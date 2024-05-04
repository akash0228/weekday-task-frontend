import React from "react";
import { TextField } from "@mui/material";
import "./Input.css";

const InputSearch = ({ height, width, placeholderText }) => {
  return (
    <TextField
      className="Input"
      sx={{ height: height, width: width }}
      id="outlined-basic"
      variant="outlined"
      placeholder={placeholderText}
      InputProps={{
        style: { fontSize: "0.7rem" },
      }}
    />
  );
};

export default InputSearch;
