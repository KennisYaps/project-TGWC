import React from "react";
import Home from "../Home/Home";
import HerProjects from "../Her Projects/HerProjects";
import HerJourney from "../Her Journey/HerJourney";
import HerSkills from "../Her Skills/HerSkills";
import AboutHer from "../About Her/AboutHer";
import HerMistakes from "../Her Mistakes/HerMistakes";

const Layout = () => (
  <div id="Layout">
    <Home />
    <AboutHer />
    <HerSkills />
    <HerJourney />
    <HerMistakes />
    <HerProjects />
  </div>
);

export default Layout;
