import React from "react";
import Home from "../Home/Home";
import HerWorks from "../Her Works/HerWorks";
import HerStory from "../Her Story/HerStory";
import HerSkills from "../Her Skills/HerSkills";
import AboutHer from "../About Her/AboutHer";
import HerMistakes from "../Her Mistakes/HerMistakes";

const Layout = () => (
  <div id="Layout">
    <Home />
    <AboutHer />
    <HerSkills />
    <HerStory />
    <HerMistakes />
    <HerWorks />
  </div>
);

export default Layout;
