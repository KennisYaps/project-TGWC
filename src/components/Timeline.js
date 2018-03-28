import React from "react";
import Event from "./Event";

const Timeline = props => (
    <div>
    {console.log(props.timelineDatas)} 
    <h2>{props.timelineDatas.language}</h2>
    <div id="individualTimelineEvents">
      {props.timelineDatas.events.map((event, titleIndex) => {
        return (
          <Event eventdata={event} key={titleIndex}/>
        );
      })}
    </div>
  </div>
);

export default Timeline;
