import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const ComparisonGraph = ({ data }) => {
  const graphData = {
    labels: data.percentiles,
    datasets: [
      {
        label: 'Number of Students',
        data: data.studentCounts,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 0.7)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Students: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
       <div className="mt-4 text-sm text-gray-600">
        <p>You scored {data.currentPercentile}% percentile which is lower than the average percentile of {data.averagePercentile}% of all engineers who took this assessment.</p>
        <p>Number of Students at {data.currentPercentile}% percentile: {data.currentStudentCount}</p>
      </div>
      <h3 className="text-xl font-bold mb-4">Comparison Graph</h3>
      <Line data={graphData} options={options} />
     
    </div>
  );
};

export default ComparisonGraph;
