import React, { useEffect, useState } from "react";
import Card from "../components/sharedComponents/Card";
import axios from "axios";

const Home = () => {
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
    const timer = setTimeout(() => {
      if (query === "") return;
      fetchPhotos();
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="main">
      <div className="container">
        <input
          type="text"
          className="custom-input"
          placeholder="Enter your Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button class="btn-simple" onClick={fetchPhotos}>
          Search
        </button>
      </div>

      <div className="images">
        {photos.map((photo, index) => (
          <Card
            key={index}
            image={photo.src.medium}
            desc={photo.alt}
            photographer={photo.photographer}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
