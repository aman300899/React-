import React from "react";

const person = ["Aman", "Abhay", "Ankit", "Chirag"];

export default function () {
  return (
    <div>
      <h1>Map Function</h1>
      {person.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
}
