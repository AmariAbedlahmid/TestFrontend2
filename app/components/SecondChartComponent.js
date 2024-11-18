// SecondChartComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SecondChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.saison),
    datasets: [
      {
        label: 'Age par saison',
        data: data.map((item) => item.age), 
        backgroundColor: 'rgba(255, 165, 0, 0.5)', 
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default SecondChartComponent;
