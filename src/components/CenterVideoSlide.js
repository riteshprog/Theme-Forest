import React, { Component } from 'react'
import { Player } from 'video-react';
//import 'video-react/dist/video-react.css';
import "video-react/dist/video-react.css";
import videocover from '../assets/rsz_videocover.png'

import Swiper from 'react-id-swiper';

export default class CenterVideoSlide extends Component {
  constructor(props){
    super(props);
    this.state={
      slides: (function () {
        var slides = [];
        for (var i = 0; i < 5; i += 1) {
          slides.push('http://vjs.zencdn.net/v/oceans.mp4');
        }
        return slides;
      }())
    }
  }

  
  render() {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
  
    }
    return (
      <div>
        <Swiper {...params}>
        {this.state.slides.map((slide, index) =>{
          return (
          <div key={index}><Player 
          poster={videocover}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </div>
          )
        })}
        </Swiper>
      </div>
    )
  }
}
