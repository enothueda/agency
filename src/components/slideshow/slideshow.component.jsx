import React from 'react';
import { Slide } from 'react-slideshow-image';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';

import './slideshow.styles.css';

//this is temporary, changed by the direct asignment above
const slideImages = [
  '../../assets/slide1.jpg',
  '../../assets/slide2.jpg',
  '../../assets/slide3.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={
              {'backgroundImage': `url(${slide1})`}
            }>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slide2})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slide3})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slide4})`}}>
              <span>Slide 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slide5})`}}>
              <span>Slide 5</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;