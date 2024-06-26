import React from 'react';
import "../components_styling/Dashboard.css";
import MoodLineChart from '../charts/LineChart';
import MoodDoughnutChart from '../charts/DoughnutChart';
import RatingSlider from '../components/RateSlider';
import ToDoList from '../components/ToDoList';

function Dashboard() {

  const userName = "Kushl";

  return (
    <div className="dashboard-container">
      <div className="section-1">
        <div className="rating-slider">
          <RatingSlider userName={userName}/>
        </div>
        <div className="to-do-list-container">
          <ToDoList userName={userName}/>
        </div>
      </div>
      <h1 className='monthly-title'>Monthly Analytics</h1>
      <div className="section-2">
        <div className='mood-line-chart'>
          <MoodLineChart userName={userName}/>
        </div>
        <div className="mood-doughnut-chart">
          <MoodDoughnutChart userName={userName}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;