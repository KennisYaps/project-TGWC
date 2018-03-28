import React, { Component } from "react";
import { TimelinesArray } from "../utils/JourneysSeedData";
import Timeline from './Timeline';
class HerJourney extends Component {
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
          <Timeline key={timelineIndex} timelineDatas={timeline}/>
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
export default HerJourney;
