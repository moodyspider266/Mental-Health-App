import React from 'react';
import { Line } from 'react-chartjs-2';
import "../components_styling/LineChart.css";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function MoodLineChart() {
  const moodData = [
    { date: '2023-06-01', moodScore: 10 },
    { date: '2023-06-02', moodScore: 5 },
    { date: '2023-06-03', moodScore: 4 },
    { date: '2023-06-04', moodScore: 6 },
    { date: '2023-06-05', moodScore: 2 },
    { date: '2023-06-06', moodScore: 9 },
    { date: '2023-06-07', moodScore: 8 },
    { date: '2023-06-08', moodScore: 0 },
    // Add more data points as needed
  ];

  const dayLabels = Array.from({ length: 30 }, (_, i) => i + 1); // For a 30-day month

  const scoreData = moodData.map((data) => ({
    x: new Date(data.date).getDate(),
    y: data.moodScore,
  }));

  const chartData = {
    labels: dayLabels,
    datasets: [
      {
        label: 'Mood Score',
        data: scoreData,
        borderColor: 'blue',
        backgroundColor: 'blue',
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Day of the Month',
        },
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Mood Score',
        },
        ticks: {
          beginAtZero: true,
          max: 10,
          stepSize: 1,
          min: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Mood Score: ${context.raw.y}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MoodLineChart;