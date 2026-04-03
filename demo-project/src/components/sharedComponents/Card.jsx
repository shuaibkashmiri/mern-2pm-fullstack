import React from "react";

const Card = ({ image, desc, photographer }) => {
  return (
    <div>
      <div className="pexels-card">
        <div className="card-image">
          <img src={image} alt="Forest landscape" />
        </div>
        <div className="card-content">
          <p className="image-desc">{desc}</p>
          <div className="photographer-info">
            <span className="label">Photographer:</span>
            <span className="name">{photographer}</span>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Card;
