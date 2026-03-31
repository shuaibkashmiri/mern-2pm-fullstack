import React, { useEffect, useState } from "react";
import Imagecard from "../sharedCompnents/Imagecard";
import axios from "axios";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  const getData = async () => {
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

  const viewChange = () => {
    console.log(query);
  };

  useEffect(() => {
    viewChange();
    // console.log(getData());
  }, [query]);

  return (
    <div className="main">
      {/* {users.map((user) => (

      ))} */}

      <input
        type="text"
        placeholder="Search The Images"
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />
      <button className="search-btn" onClick={getData}>
        Search
      </button>
      <div className="box">
        {photos.map((photo) => (
          <Imagecard
            name={photo.photographer}
            image={photo.src.medium}
            title={photo.alt}
          />
        ))}
        {/* {users.map((user) => (
          <p>{user.name}</p>
        ))} */}
        {/* <Imagecard /> */}
      </div>
    </div>
  );
};

export default Home;
