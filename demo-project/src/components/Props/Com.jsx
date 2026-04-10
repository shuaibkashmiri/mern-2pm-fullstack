import axios from "axios";
import React, { useState, useEffect } from "react";
import SubComp from "./SubComp";

const NewsComponent = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = axios(
      "https://newsdata.io/api/1/latest? apikey=pub_11d7e6a17e1b43caa6076c5b558d88f7&country=in&language=en",
    );
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div><SubComp/></div>;
};

export default NewsComponent;
