import React, { Component } from "react";
import Journey from "./Journey";
import { JourneyDetailsArray } from "../utils/JourneysSeedData";
class HerJourneys extends Component {
  constructor() {
    super();
    this.state = {
      journeys: JourneyDetailsArray
    };
  }
  render() {
    const displayJourneys = this.state.journeys.map((individualEvent, index) => {
      return <Journey key={index} individualJourney={individualEvent} />;
    });
    return (
      <div>
        <h1>Her Journey</h1>
        {displayJourneys}
      </div>
    );
  }
}
export default HerJourneys;
