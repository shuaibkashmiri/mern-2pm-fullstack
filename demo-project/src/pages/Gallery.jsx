import axios from "axios";
import React, { useState, useEffect } from "react";

const NewsComponent = () => {
  const [data, setData] = useState(null);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://newsdata.io/api/1/latest?apikey=pub_11d7e6a17e1b43caa6076c5b558d88f7&country=in,pk&category=breaking,business,sports,science,technology&language=en",
      );
      setData(res.data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default NewsComponent;
