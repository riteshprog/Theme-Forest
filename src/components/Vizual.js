import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import LineChart from './LineChar'
import { MDBCard, MDBCardBody } from 'mdbreact';
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
      <div className="container-fluid">
        <div className="row">
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
        </div>
        
      </div>
    )
  }
}
