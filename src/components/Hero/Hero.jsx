import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/ooo.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header/>
{/* the best ad */}
        <div className='the-best-ad'>
            <div></div>
            <span>the best yoga studio in the town</span>
        </div>

{/* Hero heading */}
        <div className='hero-text'>
            <div >
                <span className='stroke-text'>Yoga </span><span>for </span>
            </div>
            <div>
               <span>
                heal stress</span> 
            </div>
            <div>
                <span>
                Yoga does not just change the way we see things, it transforms the person who sees.
                </span>
            </div>
        </div>

        {/* figures */}
        <div className="figures">
            <div>
              <span>+140</span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness programs</span>
            </div>
        </div>

         {/* hero buttons*/}
      <div className='hero-buttons'>
        <buttons className="btn">Get Stared</buttons>
        <buttons className="btn">Learn More</buttons>

      </div>

      </div>
      <div className='right-h'>
      <button className='btn'>Join Now</button>

      <div className='heart-rate'> 
        <img src={Heart} alt="" />
        <span >Heart Rate</span>
        <span>116 bpm</span>

      </div>

      {/* */}
      <img src={hero_image} alt="" className='hero-image' />
      <img src={hero_image_back} alt="" className='hero-image-back' />
      {/*calories*/}
      <div className="calories">
        <img src={Calories} alt="" />
       <div>
       <span>Calories Burned</span>
        <span>220 kcal</span>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
