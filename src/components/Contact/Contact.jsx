import React, { useContext, useState } from 'react';
import './Contact.css';
import { FaTelegram} from 'react-icons/fa6';
import { Store } from '../Store/Store';


const Contact = () => {
  const {menu} = useContext(Store);
  
  const [typing,setIsTyping] = useState({
    name:false,
    email:false,
    message:false,
  });
  const isValid = typing.name === true && typing.email === true && typing.message === true;
  return (
    <div className='contact-details'>
      <div className='contact-heading'>
        <h1 className={menu === 'Contact'?'alive':''}>Contact</h1>
      </div>
        <div className='frame'>
          <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=78.48852%2C13.55632%2C78.50852%2C13.57632&layer=mapnik" className='map' loading='lazy' allowfullscreen></iframe>
          <a href='https://www.openstreetmap.org/#map=14/13.56632/78.50928' target='_blank'>View Larger map</a>
        </div>
        <div className='footer-details'>
          <h2>Contact Form</h2>
          <div className='form'>
            <form>
              <div className='user-details'>
                <input id={typing.name?'typing':''} onInput={()=>{setIsTyping((prev)=>({...prev,name:true}))}} type="name" placeholder='Full name' required/>
                <input id={typing.email?'typing1':''} onInput={()=>{setIsTyping((prev)=>({...prev,email:true}))}} type='email' placeholder='Email address' required/>
              </div>
              <div className='user-message'>
                <textarea onInput={()=>{setIsTyping((prev)=>({...prev,message:true}))}} id={typing.message ?'typing3':''} placeholder='Your Message' required></textarea>
              </div>
              <button disabled={!isValid} style={{cursor: isValid?'pointer':'not-allowed'}}><FaTelegram className='send-icon'/>Send Message</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
