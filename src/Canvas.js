import React from 'react';
import {Bar} from 'react-chartjs-2';

const MAX_RAND_VALUE = 10000;
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const CHART_COUNT = 15;
const DATASET_COUNT = 16;
const LABELS = new Array(DATASET_COUNT).fill('');
const OPTIONS = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

const data = [];

for(let j = 0; j < CHART_COUNT; j++) {
  const inner = {
    labels: LABELS,
    datasets:[
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      },
    ],
  };
  for (let i = 0; i < DATASET_COUNT; i++) {
    inner.datasets[0].data.push(getRandomInt(MAX_RAND_VALUE));
  }
  data.push(inner);
}

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {a: 0};
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({a: this.state.a + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <div>
        {data.map((item, index, origin) => {
          return (
            <div key={index}>
              <Bar
                data={data[(index + this.state.a)%CHART_COUNT]}
                width={100}
                height={300}
                options={OPTIONS}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Canvas;

