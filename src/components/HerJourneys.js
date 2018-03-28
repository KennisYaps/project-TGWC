import React, { Component } from "react";
import { TimelinesArray } from "../utils/JourneysSeedData";
import IndividualTimeline from './IndivdualTimeline';
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
          <IndividualTimeline key={timelineIndex} timelineDatas={timeline}/>
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
