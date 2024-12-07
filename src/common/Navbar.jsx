import { FaFilePdf } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import resume from '../assests/resume.pdf'



function Navbar(){
    
    
    useGSAP(()=>{
        gsap.to('.list',
        {
            y:0,
            stagger:0.1,
            delay:0.5,
            duration:0.5,
            ease:'power1.in'
        })
        gsap.to('#head',{
        y:0,
        opacity:1,
        duration:1,
        ease:'power1.in'
      })
      gsap.to('#btn',{
        y:0,
        stagger:0.25,
        delay:1,
        duration:0.5,
        ease:'power1.in'
      })
    },[])
    return(
        <div className="nav-container" id="navbar">
            <div className="nav-logo">
                <h1 id="head">Rohith <span>M R</span></h1>
            </div>
            <ul>
                <li className="list"><a href="#Homesection">Home</a></li>
                <li className="list"><a href="#Aboutsection">About</a></li>
                <li className="list"><a href="#skillcontainer">Skill</a></li>
                <li className="list"><a href="#Projectsection">Project</a></li>
            </ul>
            <div className="nav-button">
                <button id="btn"><a href={resume} download><FaFilePdf/></a></button>
                <button id="btn"><a href="#Contactsection">Contact</a></button>
            </div>
        </div>
    )
}


export default Navbar