// this should be moved to an Timeline directory (i.e. src/Timeline/Timeline.js and src/Timeline/Timeline.test.js)

import React from "react";
import Event from "./Event";
// import PropTypes from "prop-types";

const Timeline = props => (
  <div>
    <h2>{props.timelineDatas.TimelineTitle}</h2>
    <p>{props.timelineDatas.date}</p>
    <div id="TimelineDataEvents">
      {props.timelineDatas.events.map((event, titleIndex) => {
        return <Event eventdata={event} key={titleIndex} />;
      })}
    </div>
  </div>
);

// Timeline.propTypes = {
//   TimelineTitle: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   events: PropTypes.array.isRequired
// };

export default Timeline;
