import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Interests, setInterests] = useState([]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name Of the User"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Description"
        onChange={(e) => {
          let res = e.target.value;
          setDescription(res);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Interests"
        onChange={(e) => {
          const ans = e.target.value;
          setInterests(ans.split(" "));
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/create", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
              Interests: Interests,
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
        }}
      >
        Add The User
      </button>
    </div>
  );
};

export default Input;
