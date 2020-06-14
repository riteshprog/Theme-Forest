import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import LineChart from './LineChar'
import ExampleChart from './PieHalfChart';
import WordCloud from './WordCloud';
import WordCloud2 from './WordCloud1';
import PngFile from '../assets/most-populated-cities-in.png';
import SvgFile from '../assets/most-populated-cities-in.svg';
import { MDBCard, MDBCardBody } from 'mdbreact';
import GoogleData from './GoogleData';
import RestApiContent from './RestApiContent';
import RestApiBar from './RestApiBar'
export default class Vizual extends Component {

  render() {
    const data = {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#404040"],
          data: [2478, 5267, 734, 784, 433]
          }
      ],
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  
    };
    const piedata = {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#404040"],
          data: [2478, 5267, 734, 784, 433]
          }
      ],
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  
    };


    return (
      <div className="container-fluid chart-type">
        <div className="row">
          <div className="col-md-12">
          <RestApiContent />
 <RestApiBar />   

          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
          <MDBCard>
          <div className="bar-chart">
            <p>Bar Chart</p> chart-type
            <p>&lt; &gt;</p>
            </div>
            <MDBCardBody>

             <Bar
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />

</MDBCardBody>
</MDBCard>
        </div>
        <div className="col-md-3">
        <MDBCard>
        <div className="bar-chart">
            <p>Bar Chart</p>
            <p>&lt; &gt;</p>
            </div>
<MDBCardBody>

             <Bar
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />

</MDBCardBody>
</MDBCard>
        </div>

        <div className="col-md-3">
        <MDBCard>
        <div className="bar-chart">
            <p>Bar Chart</p>
            <p>&lt; &gt;</p>
            </div>
<MDBCardBody>

             <Bar
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />

</MDBCardBody>
</MDBCard>
        </div>

        <div className="col-md-3">
        <MDBCard>
        <div className="bar-chart">
            <p>Bar Chart</p>
            <p>&lt; &gt;</p>
            </div>
<MDBCardBody>

             <Bar
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />

</MDBCardBody>
</MDBCard>
        </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
          <MDBCard>
          <div className="bar-chart">
            <p>Pie Chart</p>
            <p>&lt; &gt;</p>
            </div>
<MDBCardBody>

<Pie data={piedata} />

</MDBCardBody>
</MDBCard>

          </div>
          <div className="col-md-3">          <MDBCard>
          <div className="bar-chart">
            <p>Bar Chart</p>
            <p>&lt; &gt;</p>
            </div>
<MDBCardBody>

<Pie data={piedata} />

</MDBCardBody>
</MDBCard>
</div>
          <div className="col-md-6">
          <MDBCard>
          <div className="bar-chart">
            <p>Line Chart</p>
            <p>&lt; &gt;</p>
            </div>
<MDBCardBody>

<LineChart />

</MDBCardBody>
</MDBCard>
</div>
<div className="row">
  <div className="col-md-6">
  <h1>Half Circle Pie Chart With Arrow Key </h1>

    <MDBCard>
      <MDBCardBody>
        <ExampleChart />
      </MDBCardBody>
    </MDBCard>
  </div>
  <div className="col-md-6">
  <h1>Word Cloud1 </h1>

    <MDBCard>
      <MDBCardBody>
        <WordCloud />
      </MDBCardBody>
    </MDBCard>
  </div>
</div>
<div className="row">
  <div className="col-md-6">
  <h1>Word Cloud2 </h1>
    <MDBCard>
      <MDBCardBody>
      <WordCloud2 />
      </MDBCardBody>
    </MDBCard>
  </div>
  <div className="col-md-6">
    <h1>Word Cloud3 </h1>
    <MDBCard>
      <MDBCardBody>
        <WordCloud2 />
      </MDBCardBody>
    </MDBCard>
  </div>
</div>
<div className="row">
  <div className="col-md-6">
  <h1>PNG File From everviz </h1>
    <MDBCard>
      <MDBCardBody>
<img src={PngFile} width={500}  alt="Png file data" />
      </MDBCardBody>
    </MDBCard>
  </div>
  <div className="col-md-6">
    <h1>SVG File From everviz </h1>
    <MDBCard>
      <MDBCardBody>
      <img src={SvgFile} width={500}  alt="Png file data" />
      </MDBCardBody>
    </MDBCard>
  </div>
</div>
        </div>
 {/* <GoogleData /> */}
      </div>
    )
  }
}
