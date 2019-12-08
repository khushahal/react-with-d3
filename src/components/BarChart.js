import React, { PureComponent } from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {data} from '../Constant/Constant.js'

export default class Chart extends PureComponent {

    render() {

        return (
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 50, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart> );
    }
}
