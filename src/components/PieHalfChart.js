import * as React from "react";
import { Chart } from "react-google-charts";
import GaugeChart from 'react-gauge-chart' 
import { PieChart } from 'react-minimal-pie-chart';
 
const ExampleChart = () => {
  return (
    <div className="justify-content-center">

<PieChart
  data={[
    { title: 'One', value: 76, color: '#E38627' },
    { title: 'Two', value: 24, color: '#C13C37' },
  ]}
  lengthAngle={-360} animate
  
  startAngle={-180}
  lengthAngle={180}
  lineWidth={20}
  viewBoxSize={[100, 50]}
  label={({ dataEntry }) => dataEntry.value}
/>
</div>


  );
};
 
export default ExampleChart;