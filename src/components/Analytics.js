import React, { Component } from 'react'
//import CenteredSlides from './CenteredSlides';
import CenterSlidesClass from './CenterSlidesClass';
import CenterVideoSlide from './CenterVideoSlide';
import 'swiper/css/swiper.css'
import { Button } from '@material-ui/core';


export default class Analytics extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p className="ml-5">Slides <b>Pictures</b></p>
            <p><Button  className="bg-primary btn-good">Good</Button> <Button className="bg-primary btn-good">Bad</Button></p>
          <CenterSlidesClass />

          </div>
          <div className="col-md-6">
          <p className="ml-5">Slides <b>Videos</b></p>
            <p><Button  className="bg-primary btn-good">Good</Button> <Button className="bg-primary btn-good">Bad</Button></p>
          <CenterVideoSlide />
          </div>
        </div>
    </div>    )
  }
}
