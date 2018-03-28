import React from "react";

const Mistake = props => (
  <div>
    <h2>{props.mistakeData.title}</h2>
    <p>{props.mistakeData.date}</p>
    <p>{props.mistakeData.text}</p>
  </div>
);

export default Mistake;
