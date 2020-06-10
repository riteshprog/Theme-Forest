import React, { Component } from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
//import Rating from '@material-ui/lab/Rating';
//import StarRatingComponent from 'react-star-rating-component';
//import StarRatingComponent from './StarRatingComponent'
import RatingHalf from './RatingHalf';
import DefaultRating from './DefaultRating';
import PreesetStar from './PreesetStar';
//import FluidStar from './FluidStar';

export default class Comparative extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div>
         <MDBCard className="comparitive-card">

  <MDBCardBody>
    <div className="card-title">
      <p className="float-right">&lt; &gt;</p>
      <p>Basic</p></div>
      <p>Default</p>
      <DefaultRating />
      <p>Half Stars</p>
<RatingHalf />
<p>Preset Stars</p>
<PreesetStar />
{/* <p>Fluid Stars</p>
<FluidStar />  */}
  </MDBCardBody>
  </MDBCard>


      </div>
    )
  }
}
