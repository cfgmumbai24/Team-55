import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const labels = data.map(item => `${item.month}/${item.year}`);
  const counts = data.map(item => item.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Assignments per Month',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Assignments per Month for the Last 12 Months',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
