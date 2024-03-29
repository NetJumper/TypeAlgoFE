import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const StatsChart = ({ userStats }) => {
  useEffect(() => {
    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Best Time', 'Best WPM', 'Best Accuracy'],
        datasets: [{
          label: 'User Stats',
          data: [userStats.bestTime, userStats.bestWPM, userStats.bestAccuracy],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [userStats]);

  return <canvas id="statsChart" width="400" height="400"></canvas>;
};

export default StatsChart;
