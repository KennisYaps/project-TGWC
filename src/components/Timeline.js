import React from "react";
import Event from "./Event";
// import PropTypes from "prop-types";

// use vertical timeline
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
