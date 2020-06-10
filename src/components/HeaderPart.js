import React, { Component } from 'react';
import Cover from '../assets/Cover.jpg'
import coverlogo from '../assets/rsz_coverlogo.png'

export default class HeaderPart extends Component {
  render() {
    return (
      <div className="container-fluid header fixed">
       <div className="row">
        <img src={Cover} className="responsive" alt="" />
        </div>
        <div className="row">
          <div className="col-md-12">
          <div className="card-block header-logo"><img src={coverlogo} alt="" /></div>
          <div className="header-logo-right header-right-logo"></div>
          

          </div> 
        </div>

            </div>
    )
  }
}
