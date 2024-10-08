import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Store } from '../Store/Store';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {menu,setMenu} = useContext(Store);
  // const [menu,setMenu] = useState('About');
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/');
  },[]);
  return (
    <div className='navbar'>
      <div className='navbar-elements'>
        <ul className='navbar-lists'>
          <Link to='/'><li onClick={()=>setMenu('About')} className={menu==='About'?'active':''}>About</li></Link>
          <Link to='/resume'><li onClick={()=>setMenu('Resume')} className={menu==='Resume'?'active':''}>Resume</li></Link>
          <Link to='/projects'><li onClick={()=>setMenu('Projects')} className={menu==='Projects'?'active':''}>Projects</li></Link>
          <Link to='/skills'><li onClick={()=>setMenu('Skills')} className={menu==='Skills'?'active':''}>Skills</li></Link>
          <Link to='/contact'><li onClick={()=>setMenu('Contact')} className={menu==='Contact'?'active':''}>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
