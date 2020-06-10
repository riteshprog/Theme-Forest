import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'



export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersdetails: [
        {_id: 1, 
          img: user2,
          Uname: 'Rockose',
        },
        {_id: 2, 
          img: user3,
          Uname: 'The Devil&#x2019;s',
        },
        {_id: 3, 
          img: user4,
          Uname: 'The Magician',
        },
        {_id: 4, 
          img: user5,
          Uname: 'AC/DC',
        },
        {_id: 5, 
          img: user6,
          Uname: 'Eat Hard',
        },
                ]

      }
    }



  render() {
    return (
      <div className="container-fluid">
<div className="row">
  <div className="col-md-4">
  <MDBCard className="summary-card">
          <MDBCardBody className='rounded-bottom '>
            <MDBCardTitle>About</MDBCardTitle>
            <MDBCardText>
            Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.
            </MDBCardText>
            <div className="summary-item">
              <h6>Joined:</h6>
              <p>November 15, 2015</p>
            </div>
            <div className="summary-item">
              <h6>Lives:</h6>
              <p>New York, USA</p>
            </div>
            <div className="summary-item">
              <h6>Email:</h6>
              <p>bucketful@fiendhead.org</p>
            </div>
            <div className="summary-item">
              <h6>Website:</h6>
              <p>www.pixinvent.com</p>
            </div>
          </MDBCardBody>
        </MDBCard>
        </div>
  <div className="col-md-4 ">
  <MDBCard className="suggestion-card">
  <MDBCardBody className='rounded-bottom '>
         
<h2>Suggested Page</h2>
  <div className="page-suggestion-list">
<ul className="list-unstyled">
  {this.state.usersdetails.map((user, index) =>{
    return (
      <li className="page-suggestion" key={index}>
      <div><img src={user.img} className="rounded-circle" alt="" /></div>
      <div className="leading-tight">
        <p className="font-medium">{user.Uname}</p>
      </div>
    </li>

    )
  })}
    </ul>
  </div>
  </MDBCardBody>
  </MDBCard>
  </div>
  <div className="col-md-4"> 
  <MDBCard className="suggestion-card">
  <MDBCardBody className='rounded-bottom '>
         
<h2>Suggested Page</h2>
  <div className="page-suggestion-list">
<ul className="list-unstyled">
{this.state.usersdetails.map((user, index) =>{
    return (
      <li className="page-suggestion" key={index}>
      <div><img src={user.img} className="rounded-circle" alt="" /></div>
      <div className="leading-tight">
        <p className="font-medium">{user.Uname}</p>
      </div>
    </li>

    )
  })}
    </ul>
  </div>
  </MDBCardBody>
  </MDBCard>
  </div>
  </div>
  
  
        </div>
    )
  }
}
