import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skill'
import Contact from './pages/Contact';
import Navbar from '../src/common/Navbar';



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
