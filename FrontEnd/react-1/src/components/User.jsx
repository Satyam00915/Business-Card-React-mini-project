import React from "react";
import Card from "./Card";
import { useState } from "react";

const User = () => {
  let [card, setCard] = useState([]);
  fetch("http://localhost:3000/card").then((resp) => {
    resp.json().then((data) => {
      setCard(data.users);
    });
  });

  return (
    <div className="card-box">
      {card.map((user) => {
        return (
          <Card
            title={user.title}
            description={user.description}
            Interests={user.Interests}
            key={user.title}
          ></Card>
        );
      })}
    </div>
  );
};

export default User;
