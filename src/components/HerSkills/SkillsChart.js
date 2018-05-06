import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "HTML/CSS", Level: 6 },
  { name: "Javascript", Level: 5 },
  { name: "React", Level: 5 },
  { name: "Express.js", Level: 4 },
  { name: "TDD", Level: 5 }
];

class SkillsChart extends Component {
  render() {
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        barSize={25}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        layout="vertical"
      >
        <XAxis type="number" hide={true} />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="Level" fill="black" />
      </BarChart>
    );
  }
}

export default SkillsChart;
