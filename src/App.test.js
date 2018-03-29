import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import fetchMock from "fetch-mock";
import { mount } from "enzyme";

it("renders without crashing", async () => {
  const myMock = fetchMock.mock("http://localhost:3000/timelines", {
    status: 200,
    body: []
  });

  const newMock = fetchMock.mock("http://localhost:3000/mistakes", {
    status: 200,
    body: []
  });

  const wrapper = mount(<App />);
});
