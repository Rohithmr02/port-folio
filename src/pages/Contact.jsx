import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Contact(){
    useGSAP(()=>{
        gsap.from('.contact-content',{
            y:"100%",
            duration:2,
            scale:2,
            scrollTrigger:{
                trigger:'.contact-container',
                scrub:true
            }
        })
    },[])
    return(
        <div className="contact-container" id="Contactsection">
            <div className="contact-content">
                <h1>Let’s Create <span>Together!</span></h1>
                <button><a href="mailto:rohith.ramesh2202@gamil.com">rohith.ramesh2202@gamil.com</a></button>
            </div>
        </div>
    )
}


export default Contact