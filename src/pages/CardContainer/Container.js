import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Container.css";
import { getCompanys } from "../../Redux/companySlice";
import Loader from "../../components/Loader/Loader";
import useInfiniteScroll from "../../hooks/Customhooks";
import ContainerDropDOwn from "../DropDownContainer/DropDownContainer";
import { useSelector } from "react-redux";

const Container = () => {
  const { isLoading } = useInfiniteScroll();

  //companyData.filter((data) => dropdownArray.includes(data?.jobRole);
  const companyData = useSelector((state) => state.company.company);

  return (
    <>
      <div className="dropdown">
        <ContainerDropDOwn />
      </div>
      <div className="card_container">
        {companyData
          .filter((data) =>
            Object.values(data).every((value) => value !== null)
          )
          .map((data) => (
            <JobCard key={data.id} Data={data} />
          ))}

        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default Container;
