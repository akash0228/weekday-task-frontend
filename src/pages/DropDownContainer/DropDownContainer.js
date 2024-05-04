import React, { useState } from "react";
import MultiSelectDropdown from "../../components/DropDown/DropDown";
import "./dropdownstyle.css";

const ContainerDropDOwn = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const OfficeRonsite = ["Remote", "OnSite"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (newOptions) => {
    setSelectedOptions(newOptions);
    console.log(newOptions);
  };

  return (
    <div className="dropdown_style">
      <MultiSelectDropdown
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="100px"
        placeholderText="Roles"
      />
      <MultiSelectDropdown
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="200px"
        placeholderText="Number of Employees"
      />
      <MultiSelectDropdown
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="100px"
        placeholderText="Experiences"
      />
      <MultiSelectDropdown
        options={OfficeRonsite}
        value={selectedOptions}
        onChange={handleOptionChange}
        // height="40px"
        width="100px"
        placeholderText="Remote"
      />
      <MultiSelectDropdown
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="120px"
        placeholderText="Tech Stack"
      />
      <MultiSelectDropdown
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="170px"
        placeholderText="Minimum Base Salary"
      />
      <MultiSelectDropdown
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="180px"
        placeholderText="Search Company Name"
      />
    </div>
  );
};

export default ContainerDropDOwn;
