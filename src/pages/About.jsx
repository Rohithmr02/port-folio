import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import aboutimage from "../assests/Aboutimage.JPG";
import { ScrollTrigger } from "gsap/all";
import { IoBag } from "react-icons/io5";
import { BsAirplaneFill } from "react-icons/bs";


gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from("#abouthead", {
      x: "130%",
      duration: 2,
      scrollTrigger: {
        trigger: "#abouthead",
        scrub: true,
        start: "bottom bottom",
        end: "top 10%",
      },
    });
    const contents = gsap.utils.toArray("#horizontal .content");
    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      scrollTrigger: {
        trigger: ".about-section",
        pin: true,
        scrub: true,
        start: "top -15%",
      },
    });
    gsap.fromTo('.aboutimage',{
        duration:2,
        opacity:0,
        x:'-100%'
    },{
        x:0,
        opacity:1,
        duration:2,
        scrollTrigger:{
            trigger:'.About-head',
            scrub:true,
        }
    }
   )
   gsap.fromTo('.about-content',{
    x:'100%',
    duration:2,
    opacity:0
   },
  {
    x:'0%',
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.About-head',
      scrub:true,
      start:"top 40%"
    }
  }
  )
  gsap.from('.aboutsecondhead',{
    x:"130%",
    scale:10,
    duration:2,
    scrollTrigger:{
      trigger:'.about-section',
      scrub:true,
      start:"top 70%"
    }
  })
  // gsap.to('.about-section',{
  //   x:'21%',
  //   scale:6,
  //   duration:2,
  //   scrollTrigger:{
  //     trigger:'.about-section',
  //     scrub:true,
  //     start:"top 70%"
  //   }
  // })
  
  }, []);
  return (
    <div className="about-section" id="Aboutsection">
      <div className="About-head">
        <h1 id="abouthead">
          Hi, I’m <span>Rohith M R</span>
        </h1>
      </div>
      <section id="horizontal">
        <div className="content">
          <div className="about-image">
            <img src={aboutimage} className="aboutimage" alt="aboutsectionimage"/>
          </div>
          <div className="about-content">
            <div className="about-content-head">
              <h1 className="abouthead">
                About Me
              </h1>
            </div>
            <div className="about-content-para">
              <p className="aboutpara">
                I am a passionate Full Stack Web Developer from Ooty, skilled in
                creating dynamic and responsive web applications. With expertise
                in Python, SQL, HTML, CSS, JavaScript, React.js, MongoDB, and
                Express.js, I have a strong foundation in both front-end and
                back-end development. I am dedicated to writing clean, efficient
                code and continuously improving my skills to build innovative
                and scalable web solutions.
              </p>
            </div>
            <div className="about-content-projectcount">
                <div className="about-content-projectcount-section">
                    <p><IoBag/></p>
                    <h1>10+<br></br>Projects Done</h1>
                </div>
                <div className="about-content-projectcount-section">
                   <p><BsAirplaneFill /></p> 
                   <h1>4+<br></br>Years of experience</h1>
                </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about-second-content-wrapper">
            <h1 className="aboutsecondhead">Let's show my technical <span>skills!</span></h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
