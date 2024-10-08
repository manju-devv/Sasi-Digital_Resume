
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
