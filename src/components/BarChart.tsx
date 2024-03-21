import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Charts.css';

const BarChartComponent: React.FC = () => {
  const categoryDistribution = useSelector((state: any) => state.aiData?.category_distribution);
  const userSatisfaction = useSelector((state: any) => state.aiData?.user_satisfaction);

  if (!categoryDistribution || !userSatisfaction) {
    return <div>Loading...</div>;
  }

  // Transform data for category distribution
  const transformedCategoryData = Object.keys(categoryDistribution).map((category) => ({
    category,
    value: categoryDistribution[category],
  }));

  // Transform data for user satisfaction by ratings
  const transformedUserSatisfactionData = userSatisfaction.ratings.map((rating: any) => ({
    rating: rating.rating,
    count: rating.count,
  }));

  return (
    <div className="chart-container">
      <div className="chart">
        <h2>Category Distribution</h2>
        <BarChart width={400} height={300} data={transformedCategoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#457b9d" />
        </BarChart>
      </div>
      <div className="chart">
        <h2>User Satisfaction by Ratings</h2>
        <BarChart width={400} height={300} data={transformedUserSatisfactionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#e63946" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartComponent;
