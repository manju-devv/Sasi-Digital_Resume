import React, { useContext } from 'react';
import './Skills.css'
import { assets } from '../assets/assets';
import { skills } from './skillsContainer';
import { Store } from '../Store/Store';

const Skills = () => {
  const {menu} = useContext(Store)

  return (
    <div className='skill-details'>
      <div className={`skill-heading ${menu==='Skills'?'came':''}`}><h1>My Skills</h1></div>
      <div className='card-items'>
        {skills.map((skills,index)=>{
          return(
            <div class={`car${index}`} key={skills.id}>
              <img class="logo" src={skills.img} alt="Logo" />
              <div class="text">{skills.name}</div>
            </div>
          )}) 
        }
      </div>
    </div> 
  )
}

export default Skills;
