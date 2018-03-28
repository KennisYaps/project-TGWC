import React from "react";
import IndividualTimelineEvent from "./individualTimelineEvent";

const IndividualTimeline = props => (
    <div>
    {console.log(props.timelineDatas)} 
    <h2>{props.timelineDatas.language}</h2>
    <div id="individualTimelineEvents">
      {props.timelineDatas.events.map((event, titleIndex) => {
        return (
          <IndividualTimelineEvent eventdata={event} key={titleIndex}/>
        );
      })}
    </div>
  </div>
);

export default IndividualTimeline;
