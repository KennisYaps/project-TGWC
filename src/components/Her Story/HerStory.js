import React, { Component } from "react";
import Timeline from "./Timeline";
import '../../CSS/HerStory.css';

class HerStory extends Component {
  constructor() {
    super();
    this.state = {
      timelines: []
    };
  }

  render() {
    const displayTimelines = this.state.timelines.map(
      (timeline, timelineIndex) => {
        return <Timeline key={timelineIndex} timelineDatas={timeline} />;
      }
    );
    return (
      <div id="HerStory">
        <h1>Her Story</h1>
        <div id="timelines">{displayTimelines}</div>
      </div>
    );
  }
 async componentDidMount() {
   await fetch("http://localhost:3000/timelines")
      .then(data => {
        return data.json();
      })
      .then(data =>
        this.setState({
          timelines: data
        })
      );
  }
}
export default HerStory;
