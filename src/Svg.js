import React, { Component } from 'react';
import * as Re from 'recharts';

const MAX_RAND_VALUE = 10000;
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const CHART_COUNT = 15;
const DATASET_COUNT = 8;
const IS_ANIMATING = true;

function  DataSet() {
  this.pv = getRandomInt(MAX_RAND_VALUE);
  this.uv = getRandomInt(MAX_RAND_VALUE);
};

const data = [];

for(let j = 0; j < CHART_COUNT; j++) {
  const inner = [];
  for (let i = 0; i < DATASET_COUNT; i++) {
    inner.push(new DataSet());
  }
  data.push(inner);
}

class Svg extends Component {
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
        {data.map((set, index) => {
          return (
            <Re.ResponsiveContainer key={index} width='100%' aspect={12.0/2.0}>
            <Re.BarChart width={1000} height={400} data={data[(index + this.state.a)%CHART_COUNT]}>
              <Re.CartesianGrid strokeDasharray='3 3' />
              <Re.XAxis dataKey='name' />
              <Re.YAxis />
              <Re.Bar isAnimationActive={IS_ANIMATING} dataKey='pv' fill='#8884d8' />
              <Re.Bar isAnimationActive={IS_ANIMATING} dataKey='uv' fill='#82ca9d' />
            </Re.BarChart>      
          </Re.ResponsiveContainer>
          )
        })}
      </div>
    );
  }
}

export default Svg;
