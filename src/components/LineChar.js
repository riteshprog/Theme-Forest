import React from "react";
import { Line } from "react-chartjs-2";

class BarChart extends React.Component {
  state = {
     data : {
      labels: ["2000-06-05", "2000-06-11", "2000-06-17", "2000-06-23", "2000-06-29", "2000-07-05", "2000-07-11", "2000-07-17", "2000-07-23"],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ["#fff"],
          fill: false,
          data: [110, 60, 250, 300, 80,85,73, 40, 30,50,110, 60, 250, 300, 80,85,73, 40, 30,50]
          }
      ],
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  
    }
  }


  render() {
    return (
        <Line data={this.state.data} options={this.state.options} />
    );
  }
}

export default BarChart;