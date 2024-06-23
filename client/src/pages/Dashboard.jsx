import React from 'react';
import "../components_styling/Dashboard.css";
import MoodLineChart from '../charts/LineChart';
import MoodDoughnutChart from '../charts/DoughnutChart';
import RatingSlider from '../components/RateSlider';

function Dashboard() {

  const userName = "Kushl";
  return (
    <div className="dashboard-container">
      {/* <MoodLineChart userName={userName}/> */}
      {/* <MoodDoughnutChart userName={userName}/> */}
      {/* <RatingSlider userName={userName}/> */}
    </div>
  );
}

export default Dashboard;