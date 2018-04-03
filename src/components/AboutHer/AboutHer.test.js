import React, { Component } from "react";
import { shallow } from "enzyme";
import AboutHer from "./AboutHer";

describe("About Her", () => {
  it("should have 1 <h1> element", () => {
    // console.log(wrapper.debug());
    const wrapper = shallow(<AboutHer />);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
  it("should have 1 #about-her-text", () => {
    const wrapper = shallow(<AboutHer />);
    expect(wrapper.find("#about-her-text")).toHaveLength(1);
  });
});
