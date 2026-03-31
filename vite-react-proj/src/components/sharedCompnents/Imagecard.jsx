import React from "react";

const Imagecard = ({ name, image, title }) => {
  return (
    <div className="imageCard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{name}</p>
    </div>
  );
};

export default Imagecard;
