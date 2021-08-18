import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

import './slideshow.styles.scss';

//this is temporary, changed by the direct asignment above
/* const slideImages = [
  '../../assets/slide1.jpg',
  '../../assets/slide2.jpg',
  '../../assets/slide3.jpg'
]; */
 
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
            <Link to='/'>
              <div style={{'backgroundImage': `url(${slide1})`}}>
                <span>Slide 1</span>
              </div>
            </Link>
          </div>
          <div className="each-slide"> {/* link to plans based on the slide*/}
            <Link to='/plans'>
              <div style={{'backgroundImage': `url(${slide2})`}}>
                <span>Slide 2</span>
              </div>
            </Link>
          </div>
          <div className="each-slide">
            <Link to='/services'> {/* link to services based on the slide*/}
              <div style={{'backgroundImage': `url(${slide3})`}}>
                <span>Slide 3</span>
              </div>
            </Link>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;