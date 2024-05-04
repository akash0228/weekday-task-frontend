import React, { useState } from "react";
import MultiSelectDropdown from "../../components/DropDown/DropDown";
import "./dropdownstyle.css";
import InputSearch from "../../components/InputSearch/InputSearch";
import {
  EmployeRangeOptions,
  MinBasePay,
  MinExpOpt,
  OfficeRonsite,
  Rolesoptions,
} from "../../constant";

const ContainerDropDOwn = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (newOptions) => {
    setSelectedOptions(newOptions);
    console.log(newOptions);
  };

  return (
    <div className="dropdown_style">
      <MultiSelectDropdown
        options={Rolesoptions}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="120px"
        placeholderText="Roles"
        isMulti={true}
      />
      <MultiSelectDropdown
        options={EmployeRangeOptions}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="200px"
        placeholderText="Number of Employees"
        isMulti={true}
      />
      <MultiSelectDropdown
        options={MinExpOpt}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="160px"
        placeholderText="Experiences"
        isMulti={false}
      />
      <MultiSelectDropdown
        options={OfficeRonsite}
        value={selectedOptions}
        onChange={handleOptionChange}
        width="140px"
        height="40px"
        placeholderText="Remote"
        isMulti={true}
      />
      <MultiSelectDropdown
        options={MinBasePay}
        value={selectedOptions}
        onChange={handleOptionChange}
        height="40px"
        width="170px"
        isMulti={false}
        placeholderText="Minimum Base Salary"
      />
      <InputSearch
        height="45px"
        width="200px"
        placeholderText="Search Company Name"
      />
    </div>
  );
};

export default ContainerDropDOwn;
