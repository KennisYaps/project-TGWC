import React from "react";
import "../../index.css";
import "../../CSS/HerWorks.css";

const HerWorks = () => (
  <div id="HerWorks">
    <h1>HER WORKS</h1>
    <div id="Fetch-React-Lab-container">
      <p className="Work-Image" />
      <div className="Work-Description">
        <h2 className="Work-Title">Fetch React Lab</h2>
        <p className="Work-Link">
          <i class="material-icons">code</i>
          <a
            className="anchor-text"
            href="https://github.com/yappps/fetch-react-lab"
          >
            Click To View The Source Code
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default HerWorks;
