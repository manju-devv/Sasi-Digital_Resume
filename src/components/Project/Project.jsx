import React, { useContext, useEffect, useRef, useState } from 'react';
import './Project.css';
import img from './kakashi.jpg';
import { Store } from '../Store/Store';
import { projects } from './ProjectContainer';
import { FaPlus,FaMinus } from 'react-icons/fa6';

const Project = () => {
  const [hover,setHover] = useState([]);
  const [type,setType] = useState('all');
  const projectCardsRef = useRef(null);
  const {menu} = useContext(Store);
  const [width,setWidth] = useState(false);
  const [open,setOpen] = useState(false);

  const [visibleProjects, setVisibleProjects] = useState(6); 
  const fileteredArray = type === 'all'? projects:
  projects.filter((project)=>project.type === type);

  useEffect(() => {
    if (projectCardsRef.current) {
      projectCardsRef.current.scrollTop = projectCardsRef.current.scrollHeight;
    }
  }, [visibleProjects]);

  useEffect(()=>{
    const size = () =>{
      if(window.innerWidth <= 760){
        setWidth(false)
      } else {
        setWidth(true)
      }
    }
    size()
    window.addEventListener('resize',size);
    return ()=> window.removeEventListener('resize',size)
  },[]);

  // const handleSelect = (e) =>{
  //   setType(e.target.value)
  // }

  const mouseEnter = (index) =>{
    const updatedStates = [...hover];
    updatedStates[index] = true;
    setHover(updatedStates);
  }

  const mouseLeave = (index) =>{
    const updatedStates = [...hover];
    updatedStates[index] = false;
    setHover(updatedStates);
  }

  const loadMore = () => {
    if(visibleProjects < fileteredArray.length){
      setVisibleProjects(prev => prev+3)
    }
  }
  
  const loadLess = () => {
    if(visibleProjects > 6){
      setVisibleProjects(prev => prev - 3)
    }
  }
  console.log(hover);

  return (
    <div className='myProjectDetails'>
      <div className='project-heading'>
        <h1 className={menu === 'Projects'?'ali':''}>My Projects</h1>
      </div>
      <div className='project-lists'>
      {
        width? 
        <ul className='unl'>
          <li onClick={()=>setType('all')} className={type === 'all'?'activee':''}>All</li>
          <li onClick={()=>setType('python')} className={type === 'python'?'activee':''}>Python</li>
          <li onClick={()=>setType('web')} className={type === 'web'?'activee':''}>Web Development</li>
        </ul>:
        <div className='dropdown'>
          <button onClick={()=>{setOpen(!open)}} className="dropdown-button">{type}</button>
          <div className='up-down' onClick={()=>setOpen(!open)}>{open?'V':'∧'}</div>
          {open &&(
            <ul className='dropdown-menu'>
              <li onClick={()=>{setType('all');setOpen(!open)}} className={type === 'all'?'act':''}>All</li>
              <li onClick={()=>{setType('python');setOpen(!open)}} className={type === 'python'?'act':''}>Python</li>
              <li onClick={()=>{setType('web');setOpen(!open)}} className={type === 'web'?'act':''}>Web Development</li>
          </ul>
          )}
        </div>
        // <select className='select' value={type} onChange={handleSelect}>
        //   <option  value='all' className={type === 'all'?'activee':''}>All</option>
        //   <option value='python' className={type === 'python'?'activee':''}>Python</option>
        //   <option  value='web' className={type === 'web'?'activee':''}>Web Development</option>
        // </select>
      }
      </div>
      <div className='project-cards' ref={projectCardsRef}>
        {fileteredArray.slice(0,visibleProjects).map((project,index)=>{
          return(
            <div className={`curd${index}`} key={project.id}>
              <img onMouseOver={()=>mouseEnter(index)} onMouseOut={()=>mouseLeave(index)} className={`img${index}`}  src={project.img} alt='img'/>
              <a href={project.projectlink} target='_blank'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoIRwZ1c3Mw1CUHBsHiyrOkvJjbS6SX5oQg&s' className={`alive ${hover[index] ?'visible':''}`}/></a>
              <div className='card-description'>
                <p>{project.description}</p>
              </div>
            </div>
          )
        })}
      </div>
        {visibleProjects > 5 ?<div className='buttons'>
          {visibleProjects <=6?'':<button className='less' onClick={()=>{loadLess()}}><FaMinus /></button>}
          {visibleProjects < fileteredArray.length?<button className='more' onClick={()=>{loadMore()}}><FaPlus /></button>:''}
        </div>:''}
    </div>
  )
}
export default Project;
