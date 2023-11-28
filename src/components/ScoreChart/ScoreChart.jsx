import './scorechart.css';
import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
const ScoreChart = ({ Ncorrect, Nincorrect, Nunanswered }) => {

    const data = {
      labels: ['Correct', 'Incorrect', 'Unanswered'],
      datasets: [
        {
          data: [Ncorrect, Nincorrect, Nunanswered],
          backgroundColor: ['#4CAF50', '#FF5252', '#E0E0E0'],
          borderColor: 'black',
          borderWidth: 1
        },
      ],
    };

    const options = {
      title: {
        display: true,
        text: 'Quiz Performance',
      },
    };

  return (
    <div className='ScoreChart'>
      <Bar
        data = {data}
        options = {options}
      ></Bar>
    </div>
  );
};

export default ScoreChart;
