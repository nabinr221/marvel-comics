import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarDiagram = (props) => {
  return (
    <div className="max-w-full barchart-box">
      <h3 className="mt-5 mb3 px-5 font-bold text-lg">
        Marvel charaters based on comics
      </h3>
      <div className="container max-w-full h-96">
        <ResponsiveContainer>
          <BarChart
            data={props.data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              textAnchor="end"
              sclaeToFit="true"
              verticalAnchor="start"
              interval={0}
              angle="-15"
              stroke="#8884d8"
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="availableComics" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarDiagram;
