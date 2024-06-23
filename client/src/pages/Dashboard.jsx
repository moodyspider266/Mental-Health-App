import React from 'react';
import MoodLineChart from '../charts/LineChart';
import "../components_styling/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <MoodLineChart />
    </div>
  );
}

export default Dashboard;