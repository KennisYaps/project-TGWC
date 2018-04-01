import React from "react";
import '../../CSS/HerMistakes.css';
const Mistake = props => (
  <div id="individual-Mistake">
    <h2 id="Mistake-title">{props.mistakeData.title}</h2>
    <p id="Mistake-date">{props.mistakeData.date}</p>
    <p>{props.mistakeData.text}</p>
  </div>
);

export default Mistake;
