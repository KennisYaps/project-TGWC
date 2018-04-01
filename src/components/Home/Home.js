import React from "react";
import "../../CSS/Home.css";

const Home = () => (
  <div id="Home">
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Her</a>
        </li>
        <li>
          <a href="#">Her Journey</a>
        </li>
        <li>
          <a href="#">Her Mistakes</a>
        </li>
        <li>
          <a href="#">Her Projects</a>
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
