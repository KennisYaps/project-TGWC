// this should be moved to an Event directory (i.e. src/Event/Event.js and src/Event/Event.test.js)

import React from "react";
// import PropTypes from "prop-types";
const Event = props => (
  <div id="HerStory-Event">
    <h4>{props.eventdata.title} </h4>
    <p>{props.eventdata.date}</p>
    <p>{props.eventdata.text}</p>
  </div>
);
// Adding proptypes validation would have been an awesome thing to do!
// Event.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired
// };

export default Event;
