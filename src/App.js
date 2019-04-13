import React, { Component } from 'react';
import './App.css';
import { Chart } from "react-google-charts";

const options = {
  hAxis: {
    title: 'Gün',
  },
  vAxis: {
    title: 'Dolar Kuru',
  },
};
const data = [
  ['Gün', 'Dolar Kuru'],
  [1, 5.69],
  [2, 5.69],
  [3, 5.68],
  [4, 5.72],
  [5, 5.76],
]

class App extends Component {
  render() {
    return (
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Yükleniyor</div>}
        data={data}
        options={options}
      />
    );
  }
}

export default App;
