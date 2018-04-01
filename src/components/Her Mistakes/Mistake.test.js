import React, { Component } from "react";
import Mistake from "./Mistake";
import { shallow } from "enzyme";

describe("<Mistake/>", () => {
  test("should display Mistake datas", () => {
    const sampleData = [
      { date: "1-July-2018", title: "test", text: "testing" }
    ];
    const wrapper = shallow(<Mistake mistakeData={sampleData} />);
    expect(wrapper.find("#individual-Mistake")).toHaveLength(1);
    expect(wrapper.find("h2#Mistake-title")).toHaveLength(1);
    expect(wrapper.find("p#Mistake-date")).toHaveLength(1);
  });
});
