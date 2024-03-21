import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions';
import { RootState } from './redux/reducers';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import InsightSummaryCard from './components/InsightSummary';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const aiData = useSelector((state: RootState) => state.aiData);

  useEffect(() => {
    dispatch(fetchData() as any); // Dispatch fetchData action on component mount
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1 className='title'>AI Insights Dashboard</h1>
      {/* Insight Summary Card */}
      {aiData && <InsightSummaryCard />}
      
      {/* Chart Containers */}
      <div className="charts-container">
        {aiData ? (
          <>
            <BarChart />
            <LineChart />
            <PieChart />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
