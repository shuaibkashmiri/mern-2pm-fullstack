import React from "react";

const Imagecard = ({ name, image, role }) => {
  return (
    <div className="imageCard">
      <img src={image} alt="" />
      <h6>{name}</h6>
      <p>{role}</p>
    </div>
  );
};

export default Imagecard;
