import React from "react";
import PropTypes from "prop-types";
const Mistake = props => (
  <div>
    <h2>{props.mistakeData.title}</h2>
    <p>{props.mistakeData.date}</p>
    <p>{props.mistakeData.text}</p>
  </div>
);
Mistake.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Mistake;
