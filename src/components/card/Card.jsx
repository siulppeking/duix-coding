import React from "react";
import "./Card.css";
import Button from "../button/Button";

const Card = ({ title, description, image, buttonText }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {buttonText && <Button size="sm">{buttonText}</Button>}
      </div>
    </div>
  );
};

export default Card;
