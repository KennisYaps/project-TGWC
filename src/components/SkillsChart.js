import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "C", uv: 4000 },
  { name: "C++", uv: 3000 },
  { name: "Python", uv: 2000 },
  { name: "Javascript", uv: 2780 },
  { name: "React", uv: 1890 },
  { name: "TDD", uv: 2390 }
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
        <XAxis type="number" hide="true" />
        <YAxis type="category" dataKey="name" axisLine="false" />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default SkillsChart;
