import React, { Component } from "react";
import { shallow } from "enzyme";
import AboutHer from "./AboutHer";
import SkillsChart from "./SkillsChart";

describe("About Her", () => {
  it("should have 1 <h1> element", () => {
    // console.log(wrapper.debug());
    const wrapper = shallow(<AboutHer />);
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("#about-her-text")).toHaveLength(1);
    expect(wrapper.find("#about-her-barChart")).toHaveLength(1);
    expect(wrapper.find("#about-her-barChart>h3")).toHaveLength(1);
    expect(wrapper.find(SkillsChart)).toHaveLength(1);
  });
});
