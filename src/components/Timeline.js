import React from "react";
import Event from "./Event";
// use vertical timeline
const Timeline = props => (
  
    <div>
    <h2>{props.timelineDatas.TimelineTitle}</h2>
    <p>{props.timelineDatas.date}</p>
    <div id="TimelineDataEvents">
      {props.timelineDatas.events.map((event, titleIndex) => {
        return (
          <Event eventdata={event} key={titleIndex}/>
        );
      })}
    </div>
  </div>
);

export default Timeline;
