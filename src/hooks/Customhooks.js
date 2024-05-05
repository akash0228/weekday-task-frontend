import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyApi } from "../Api/Apilist";
import { getRawJobs } from "../Redux/companySlice";

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.company.rawJobs);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const numberOfData = useSelector((state) => state.company.numberOfData);

  console.log("Number of Data Are");
  console.log(numberOfData);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(getCompanyApi, {
        limit: limit,
        offset: offset,
      });
      if (res) {
        dispatch(getRawJobs([...companyData, ...res?.data?.jdList]));
        setOffset(offset + limit);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (
        !isLoading &&
        scrollTop + clientHeight >= scrollHeight &&
        companyData.length > 0
      ) {
        fetchData();
      }
    };

    if (numberOfData < 4) {
      console.log(numberOfData);
      fetchData();
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [companyData, isLoading, fetchData, numberOfData]);

  useEffect(() => {
    fetchData();
  }, []);

  return { companyData, isLoading };
};

export default useInfiniteScroll;
