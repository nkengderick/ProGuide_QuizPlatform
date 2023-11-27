import './scorechart.css'

import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const ScoreChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('scoreChart').getContext('2d');

    const data = {
      labels: ['Correct', 'Incorrect', 'Unanswered'],
      datasets: [{
        data: [5, 2, 3],
        backgroundColor: ['#4CAF50', '#FF5252', '#E0E0E0'],
      }],
    };

    // Chart configuration
    const options = {
      title: {
        display: true,
        text: 'Quiz Performance',
      },
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2>Performance Chart</h2>
      <canvas id="scoreChart" width="400" height="200"></canvas>
    </div>
  );
};

export default ScoreChart;
