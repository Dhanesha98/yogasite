import React, {useState} from 'react';
import './Instructors.css';
import {InstructorsData} from "../../data/InstructorsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from "framer-motion"


const Instructors = () => {
  const transition = { type: "spring",  duration:3};
    const [selected, setSelected] = useState(0);
    const tLength = InstructorsData.length;

  return (
    <div className='Instructors' id='instructors'>
      <div className="left-t">
      <span >Instructors</span>
        <span className='stroke-text'>What They</span>
        <span>Share with you</span>
        <motion.span
         key={selected}
         initial={{ opacity: 0, x:-100 }}
         animate={{ opacity: 1, x:0 }}
         exit={{ opacity: 0, x:100 }}
         transition={transition}
        >{InstructorsData[selected].review}
        </motion.span>
        <span>
            <span style={{color:'var(--green)'}}>
                {InstructorsData[selected].name }
            </span>{' '}
            <span> - {InstructorsData[selected].status}
            </span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x:-100}}
          transition={{...transition, duration:2}}
          whileInView={{ opacity: 1, x: 0}}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x:100}}
          transition={{...transition, duration:2}}
          whileInView={{ opacity: 1, x: 0}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{ opacity: 0, x:100}}
        animate={{opacity: 1, x:0}}
        exit={{ opacity: 0, x: -100}}
        transition={transition}
        src={InstructorsData[selected].image} alt="" />

        <div className="arrows">
            <img 
            onClick={()=>{
                selected===0
                ? setSelected(tLength-1)
                :  setSelected((prev)=>prev - 1);
            }}
            src={leftArrow} alt="" />
            <img 
            onClick={()=>{
                selected===tLength-1
                ? setSelected(0)
                :  setSelected((prev)=>prev + 1);
            }}
            src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Instructors;
