import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "C", Level: 4000 },
  { name: "C++", Level: 3000 },
  { name: "Python", Level: 2000 },
  { name: "Javascript", Level: 2780 },
  { name: "React", Level: 1890 },
  { name: "TDD", Level: 2390 }
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
        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false}/>
        <Tooltip />
        <Bar dataKey="Level" fill="black" />
      </BarChart>
    );
  }
}

export default SkillsChart;
