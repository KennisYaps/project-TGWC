import React from "react";

const Mistake = props => (
  <div>
    <p>{props.mistakeData.title}</p>
    <p>{props.mistakeData.date}</p>
    <p>{props.mistakeData.text}</p>
  </div>
);

export default Mistake;
