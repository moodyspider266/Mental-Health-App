import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "../components_styling/DoughnutChart.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function MoodDoughnutChart() {
  const moodData = [
    { date: '2023-06-01', moodScore: 8 },
    { date: '2023-06-02', moodScore: 4 },
    { date: '2023-06-03', moodScore: 5 },
    { date: '2023-06-04', moodScore: 9 },
    { date: '2023-06-05', moodScore: 3 },
    // Add more data points as needed
  ];

  const moodCounts = {
    sad: 0,
    neutral: 0,
    happy: 0,
  };

  moodData.forEach((data) => {
    if (data.moodScore >= 0 && data.moodScore <= 4) {
      moodCounts.sad++;
    } else if (data.moodScore === 5) {
      moodCounts.neutral++;
    } else if (data.moodScore >= 6 && data.moodScore <= 10) {
      moodCounts.happy++;
    }
  });

  const chartData = {
    labels: ['Sad', 'Neutral', 'Happy'],
    datasets: [
      {
        data: [moodCounts.sad, moodCounts.neutral, moodCounts.happy],
        backgroundColor: ['red', 'grey', 'green'],
        hoverBackgroundColor: ['darkred', 'darkgrey', 'darkgreen'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className="chart-container">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default MoodDoughnutChart;
