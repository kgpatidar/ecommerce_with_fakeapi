import React from "react";
import "./Card.css";

const Card = (props) => {
  const data = props.hotelData;

  const handleSubmit = () => {
    props.callFunc();
  };

  return (
    <div className="card-container" onClick={handleSubmit}>
      <center>
        <div className="card-image-container">
          <img src={data.images[0]} alt={data.name} className="card-image" />
        </div>
        <h4 className="card-name">{data.name}</h4>
        <small>
          {data.city}, {data.country}
        </small>
        <h2 className="card-price">
          &#36;<span>{data.price}</span>
        </h2>
      </center>
    </div>
  );
};

export default Card;
