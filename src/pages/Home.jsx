
import background from '../assests/Background.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home(){
    useGSAP(()=>{
    //     gsap.fromTo('#hero',{
    //         opacity:0,
    //         duration:1
    //     },
    //     {
    //         opacity:1,
    //         duration:1,
    //         delay:2.7
    //     }
    // )
    // gsap.fromTo('.wrapper',
    //     {
    //         opacity:0,
    //         duration:1
    //     },
    //     {
    //         opacity:1,
    //         duration:1,
    //     }
    //     ,'>'
    // )
    gsap.to('#head1',{
        y:0,
        duration:1,
        delay:1
    })
    gsap.to('#para1',{
        y:0,
        duration:1,
        delay:1.5
    })
    gsap.to('#b1',{
        y:0,
        duration:1,
        delay:2
    })
    

    },[])
    return(
        <div className="home-container" id='Homesection'>
            <div className="home-hero">
                <div className="wrapper">
                    <div className="wrapper-content">
                        <div className="wrapper-head">
                            <h1 id='head1'>Full Stack Web<br/> <span>Developer</span></h1>
                        </div>
                        <div className="wrapper-desc">
                        <p id='para1'>I am a skilled Full-Stack Developer specializing in creating scalable, efficient, and high-performance web applications using modern technologies.</p>

                        </div>
                        <div className="wrapper-button">
                            <button id='b1'><a href="#Aboutsection">View more</a></button>
                        </div>
                    </div>
                </div>
                <img src={background} alt="HeroImage" id='hero'/>
            </div>
        </div>
    )
}


export default Home