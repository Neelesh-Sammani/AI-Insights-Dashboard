import React from 'react';
import { useSelector } from 'react-redux';
import './Charts.css';

const InsightSummaryCard: React.FC = () => {
  const insightSummary = useSelector((state: any) => state.aiData?.insight_summary);

  if (!insightSummary) {
    return <div>Loading...</div>; // Add loading indicator
  }

  return (
    <div className="summary-card">
      <h2 style={{color:'#0a6672'}}>Insight Summary</h2>
      <div>Total Queries: {insightSummary.total_queries}</div>
      <div>Successful Queries: {insightSummary.successful_queries}</div>
      <div>Failed Queries: {insightSummary.failed_queries}</div>
      <div>Average Response Time: {insightSummary.average_response_time}</div>
    </div>
  );
};

export default InsightSummaryCard;
