import React from "react";
import Card from "../components/sharedComponents/Card";

const Gallery = ({ photos }) => {
  return (
    <>
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
    </>
  );
};

export default Gallery;
