import React, {useState, useRef, useEffect} from 'react'
import { SliderData } from './SliderData'
import {FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import './ImageSlider.css'

const ImageSlider = ({slides}) => {
  //Initiating Variables for index values and length of carousel 
  const [current, setCurrent] = useState(0);
  const length = slides.length

  const autoPlayRef = useRef()
  
  //Defining expression to loop carousel
  const nxt = () => {
    setCurrent(current === length-1 ? 0 : current+1)
  }
  const prv = () => {
    setCurrent(current === 0 ? length-1 : current-1)
  }

  //Defining a React hook for autoplay feature
  useEffect(() => {
    if(SliderData.[current].type !== 2) autoPlayRef.current = nxt;
  })
  useEffect(() => {
    const runn = () => {
      autoPlayRef.current()
    }
    const interval = setInterval(runn, 5000)
  }, [])

  //setting up a break case for when no items exist
  if (!Array.isArray(slides) || slides.length <=0) {
    return null;
  }

  return (
    <section className="slider">
      <FaAngleLeft className="left-arrow" onClick={prv}/>
      <FaAngleRight className="right-arrow" onClick={nxt}/>

      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <a className="bn b1" href="./Form1/Form1">F 1</a>
      <a className="bn b2" href="./Form2/Form2">F 2</a>

      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && ( SliderData[current].type === 2 ? (
              <video autoPlay muted className="vid" onEnded={nxt}>
                <source src={slide.image} type="video/mp4" />
              </video>
            ) : <img src={slide.image} alt="wallpaper" className="image"/>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider
