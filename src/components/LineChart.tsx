import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Charts.css';

const LineChartComponent: React.FC = () => {
  const dailyResponseTimes = useSelector((state: any) => state.aiData?.response_times?.day_wise);
  const weeklyResponseTimes = useSelector((state: any) => state.aiData?.response_times?.week_wise);

  if (!dailyResponseTimes || !weeklyResponseTimes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chart-container">
      <div className="chart line-chart">
        <h2>Response Times</h2>
        <div className="chart-inner">
          <h3>Daily</h3>
          <LineChart width={500} height={300} data={dailyResponseTimes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average_time" stroke="#3a5a40" />
          </LineChart>
        </div>
      </div>
      <div className="chart line-chart">
        <h2>Response Times</h2>
        <div className="chart-inner">
          <h3>Weekly</h3>
          <LineChart width={500} height={300} data={weeklyResponseTimes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average_time" stroke="#005f73" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default LineChartComponent;
