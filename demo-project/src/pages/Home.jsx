import React, { useEffect, useState } from "react";
import Card from "../components/sharedComponents/Card";
import axios from "axios";
import Search from "../components/Search";
import Gallery from "./Gallery";

import Com from "../components/Props/Com";
import AppProvider from "../Context/AppContext";
import { useCounter } from "../hooks/useCounter";

const Home = () => {
  const { count, increase, decrease } = useCounter();
  // const greet = "Hello World!";
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("Nature");

  const fetchPhotos = async () => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
          headers: {
            Authorization:
              "AR6IwmyLUc6VPbxRqnJxtBmOpsQfzjpfaDqapwEIrsdJkj1Taf6DaZcw",
          },
        },
      );
      setPhotos(res.data.photos);
      console.log(res.data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [query]);

  return (
    <div className="main">
      <button onClick={increase}>Increase</button>
      <h3>{count}</h3>
      <button onClick={decrease}>Decrease</button>
      {/* <Search setQuery={setQuery} />
      <Gallery photos={photos} /> */}

      {/* <Com /> */}
    </div>
  );
};

export default Home;
