import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      <h2>Interests</h2>
      {props.Interests.map((int) => {
        return (
          <div key={int} className="int">
            {int}
          </div>
        );
      })}

      <div id="social">
        <div className="media">LinkedIn</div>
        <div className="media">Twitter</div>
      </div>
    </div>
  );
};

export default Card;
