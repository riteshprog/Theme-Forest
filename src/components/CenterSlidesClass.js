import React, { Component } from 'react'
import Swiper from 'react-id-swiper';

export default class CenterSlidesClass extends Component {
  constructor(props){
    super(props);
    this.state={
      slides: (function () {
        var slides = [];
        for (var i = 0; i < 600; i += 1) {
          slides.push('Slide ' + (i + 1));
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
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
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
          <div key={index}>{slide} </div>
          )
        })}
        </Swiper>
      </div>
    )
  }
}
