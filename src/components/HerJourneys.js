import React, { Component } from "react";
import { TimelinesArray } from "../utils/JourneysSeedData";
class HerJourneys extends Component {
  constructor() {
    super();
    this.state = {
      timelines: TimelinesArray
    };
  }
  render() {
    const displayTimelines = this.state.timelines.map(
      (timeline, timelineIndex) => {
        return (
          <span id="individualTimeline" key={timelineIndex}>
            <h2>{timeline.topic}</h2>
            <div id="individualTimelineEvents">
              {timeline.events.map((event, titleIndex) => {
                return (
                  <div id="title" key={titleIndex}>
                    <h4> {event.title} </h4>
                    <p>{event.text}</p>
                  </div>
                );
              })}
            </div>
          </span>
        );
      }
    );
    return (
      <div>
        <h1>Her Journey</h1>
        <div id="timelines">{displayTimelines}</div>
      </div>
    );
  }
}
export default HerJourneys;
