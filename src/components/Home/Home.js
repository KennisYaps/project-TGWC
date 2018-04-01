import React from "react";
import "../../CSS/Home.css";

const Home = () => (
  <div id="Home">
    <nav>
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#AboutHer">About Her</a>
        </li>
        <li>
          <a href="#HerSkills">Her Skills</a>
        </li>
        <li>
          <a href="#HerStory">Her Story</a>
        </li>
        <li>
          <a href="#HerMistakes">Her Mistakes</a>
        </li>
        <li>
          <a href="#HerProjects">Her Projects</a>
        </li>
      </ul>
    </nav>
    <div className="background-image">
      <span id="TGWC-title">
        <h1>The girl who code</h1>
      </span>
    </div>
  </div>
);

export default Home;
