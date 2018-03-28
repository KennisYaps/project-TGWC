import React from "react";

const IndividualTimeline = props => (
    <div>
    {console.log(props.timelineDatas)} 
    <h2>{props.timelineDatas.topic}</h2>
    <div id="individualTimelineEvents">
      {props.timelineDatas.events.map((event, titleIndex) => {
        return (
          <div id="title" key={titleIndex}>
            <h4> {event.title} </h4>
            <p>{event.text}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default IndividualTimeline;
