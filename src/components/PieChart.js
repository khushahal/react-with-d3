import React, { PureComponent } from 'react';
import { PieChart, Pie} from 'recharts';
import {pie_data01, pie_data02} from '../Constant/Constant.js';

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie data={pie_data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
        <Pie data={pie_data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
    );
  }
}
