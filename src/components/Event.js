import React from "react";

const Event = props => (
  <div>
    <h4> {props.eventdata.title} </h4>
    <p>{props.eventdata.text}</p>
  </div>
);

export default Event;
