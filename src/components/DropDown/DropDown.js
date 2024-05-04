import React, { useState } from "react";
import { Autocomplete, TextField, Box, styled } from "@mui/material";

const SmallTextTextField = styled(TextField)({
  "& input::placeholder": {
    fontSize: "0.7rem",
  },
});

const MultiSelectDropdown = ({
  options,
  value,
  onChange,
  height,
  width,
  placeholderText,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(value || []);

  const handleChange = (event, newValue) => {
    setSelectedOptions(newValue);
    onChange(newValue);
  };

  const filteredOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Autocomplete
      multiple
      options={filteredOptions}
      getOptionLabel={(option) => option}
      value={selectedOptions}
      onChange={handleChange}
      renderInput={(params) => (
        <SmallTextTextField
          {...params}
          placeholder={placeholderText}
          style={{ height: height, minWidth: width }}
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option}
        </Box>
      )}
    />
  );
};

export default MultiSelectDropdown;
