import React, { Component } from "react";
import Mistake from "./Mistake";
import { shallow } from "enzyme";

describe("<Mistake/>", () => {
  test("should display Mistake datas", () => {
    const sampleData = [
      { date: "1-July-2018", title: "test", text: "testing" }
    ];
    const wrapper = shallow(<Mistake mistakeData={sampleData} />);
    console.log(wrapper.debug());
    expect(wrapper.find("Col")).toHaveLength(1);
    expect(wrapper.find("Card")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(2);
  });
});
