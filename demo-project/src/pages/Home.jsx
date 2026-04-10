import React, { useEffect, useState } from "react";
import Card from "../components/sharedComponents/Card";
import axios from "axios";
import Search from "../components/Search";
import Gallery from "./Gallery";

import Com from "../components/Props/Com";
import AppProvider from "../Context/AppContext";

const Home = () => {
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
      {/* <Search setQuery={setQuery} />
      <Gallery photos={photos} /> */}
      <AppProvider>
        <Com />
      </AppProvider>
    </div>
  );
};

export default Home;
