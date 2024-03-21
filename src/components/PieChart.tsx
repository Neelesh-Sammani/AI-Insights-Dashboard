import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './Charts.css';

const UsageStatisticsComponent: React.FC = () => {
  const usageStatistics = useSelector((state: any) => state.aiData?.usage_statistics);

  if (!usageStatistics) {
    return <div>Loading...</div>;
  }

  // Data for platform usage
  const platformData = Object.entries(usageStatistics.by_platform).map(([platform, count]) => ({
    name: platform,
    value: count,
  }));

  // Data for country usage
  const countryData = Object.entries(usageStatistics.by_country).map(([country, count]) => ({
    name: country,
    value: count,
  }));

  // Define colors for pie chart sectors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div className="usage-statistics-container">
      <div className="usage-statistics-chart">
        <h2>Usage Statistics by Platform</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={platformData}
            cx={200}
            cy={150}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {platformData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
      <div className="usage-statistics-chart">
        <h2>Usage Statistics by Country</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={countryData}
            cx={200}
            cy={150}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {countryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default UsageStatisticsComponent;
