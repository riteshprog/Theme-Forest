import React, {useState} from 'react';
  import Swiper from 'react-id-swiper';
  const CenteredSlides = () => {
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
     <div className="swiper-container"> 
     <Swiper {...params}>
        <div class="card">Slide #1</div>
        <div class="card">Slide #2</div>
        <div class="card">Slide #3</div>
        <div class="card">Slide #4</div>
        <div class="card">Slide #5</div>
        <div class="card">Slide #6</div>
        <div class="card">Slide #7</div>
        <div class="card">Slide #8</div>
        <div class="card">Slide #9</div>
        <div class="card">Slide #10</div>
      </Swiper>
      {/* <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button> */}
      </div>
    )
  };
  export default CenteredSlides;