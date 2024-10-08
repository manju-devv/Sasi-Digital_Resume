import React, { useContext, useState } from 'react';
import './Resume.css';
import { FaSackDollar,FaBook ,FaCircle} from 'react-icons/fa6';
import { Store } from '../Store/Store';

const Resume = () => {

  const {menu} = useContext(Store)
  console.log(`is it working ${menu}`);
  return (
    <div className='resume-details'>
      <div className='resume-heading'>
        <h1 className={menu === 'Resume'?"active":''}>Internships & Education</h1>
      </div>
      <div className='internship-details'>
        <div className='internship'>
          <div className='line1'></div>
          <FaBook className='circle1'/>
          <h2 className='h2'>Internship</h2>
        </div>
        <div className='internship1'>
          <div className='first'>
            <FaCircle className='circle'/>
            <p>Worked in QxImpact</p>
          </div>
          <div>
            <div className='para1'>
              <p>During my Internship, I have worked in QxImpact for 6 months as a Data engineerin 2023-2024 from November to April.</p>
            </div>
          </div>
        </div>
        <div className='internship2'>
          <div className='second'>
            <FaCircle className='circle'/>
            <p>Working in QxImpact</p>
          </div>
          <div className='para2'>
            <p>As I performed well during my internship,The QxImpact company decided to make my data-engineer role permanent.</p>
          </div>
        </div>
      </div>
      <div className='education-details'>
        <div className='edu-heading'>
          <div className='line2'></div>
          <FaBook className='book-icon'/>
          <h2>Education</h2>
        </div>
        <div className='mca'>
          <div className='mca-details'>
            <FaCircle className='mca-icon'/>
            <p>SV University</p>
          </div>
          <div className='mca-duration'>
            <p>2021-2023</p>
            <p>Master of computer Applications</p>
          </div>
        </div>
        <div className='Bsc'>
          <div className='bsc-details'>
            <FaCircle className='bsc-icon'/>
            <p className='p'>SV University</p>
          </div>
          <div className='bsc-duration'>
            <p>2018-2021</p>
            <p>Bachelor of computer science</p>
          </div>
        </div>
        <div className='inter'>
          <div className='inter-details'>
            <FaCircle className='inter-icon'/>
            <p>Sai siddartha junior college</p>
          </div>
          <div className='inter-duration'>
            <p>2017-2018</p>
            <p>Maths Physics Chemistry</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
