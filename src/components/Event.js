import React from "react";
// import PropTypes from "prop-types";
const Event = props => (
  <div>
    <h4>{props.eventdata.title} </h4>
    <p>{props.eventdata.date}</p>
    <p>{props.eventdata.text}</p>
  </div>
);
// Event.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired
// };

export default Event;
