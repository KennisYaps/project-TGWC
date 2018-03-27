import React from "react";
import SkillsChart from "./SkillsChart";

const AboutHer = () => (
  <div>
    <h1>About Her</h1>
    <span id="about-her-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugiat
      voluptatum, aliquid illum natus veniam nulla ducimus assumenda sed quaerat
      obcaecati illo suscipit laudantium quidem doloribus magnam odit cum.
      Quasi!
    </span>
    <span id="about-her-barChart">
      <h3>Her Skills</h3>
      <SkillsChart />
    </span>
  </div>
);

export default AboutHer;
