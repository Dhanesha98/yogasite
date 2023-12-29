import React from 'react';
import './Classes.css';
import {programsData} from '../../data/programsData'; 
import RightArrow from '../../assets/right-Arrow.png'


const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      {/* header*/}
      <div className="programs-header">
        <span className='stroke-text'>Transform</span>
        <span>With our</span>
        <span className='stroke-text'>Programs</span>
      </div>

      <div className="program-categories">
        {programsData.map((program)=>(
            <div className="category">
              <img src={program.image} alt="" /> 
               <span>{program.heading}</span>
               <span>{program.details}</span> 
               <div className="join-now">
                <span>Join Now</span><img src={RightArrow} alt="" />
               </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
