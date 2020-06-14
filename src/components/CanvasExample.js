import React, { Component } from 'react';
import { Canvas } from 'react-canvas-js';

export default class CanvasExample extends Component {
constructor(props){
  super(props)
this.state = {
  dataPoints:[],
}
}

  componentDidMount(){
    let currentComponent = this;
    var chart = this.chart;
    fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var temparray = [];
      for (var i = 0; i < data.length; i++) {
        temparray.push({
          x: new Date(data[i].x),
          y: data[i].y
        });
        currentComponent.setState({
          dataPoints:temparray,
        })
           
      }
  });

  }
  

  render() {
  const {dataPoints} = this.state;
  console.log(Object.keys(dataPoints).map(d =>{
    console.log(d.x)
  }))
    const options = {
			theme: "light2",
			title: {
				text: "Stock Price of NIFTY 50"
			},
			axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: dataPoints.x,
      }]
    }

    return (

      <Canvas options={options} 
       />
    )
  }
}

