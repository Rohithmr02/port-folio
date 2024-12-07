import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaBookOpen } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import blog from '../assests/blog.png'
import farmer from '../assests/farmer.png'
import food from '../assests/food.png'


function Project(){
    const arr=[
        {
            icon:<FaBookOpen/>,
            img:blog,
            title:"Blog Site",
            technology:["React js","Css","MongoDb","Express js"]
        },
        {
            icon:<FaPizzaSlice/>,
            img:food,
            title:"Food Site",
            technology:["Angular js","Css","MongoDb","Express js"]
        },
        {
            icon:<FaHandsHelping/>,
            img:farmer,
            title:"Farmer Government Aided Scheme Site",
            technology:["React js","Css","MongoDb","Express js"]
        }
    ]

    return(
        <div className="project-container" id='Projectsection'>
            <div className="project-content">
                <h1 style={{textAlign:'center'}}>Projects</h1>
                <VerticalTimeline lineColor='white'>
                    {arr.map((item,index)=>{
                        return(
                            <VerticalTimelineElement key={index} iconStyle={{background:'white'}} icon={item.icon} className='vertical-timeline-elemet--work' contentStyle={{ background: 'rgb(0, 255, 255,.3)', color: '#ffff' }} 
                            contentArrowStyle={{ borderRight: '10px solid #ffff' }}>
                                <h2 style={{color:'white',fontSize:'25px',opacity:'0.8'}}>{item.title}</h2>
                                <img src={item.img} alt={item.title} width='370px' height='200px' style={{objectFit:'contain',objectPosition:'center'}} />
                                <div className="project-para">
                                {item.technology.map((skill)=>{
                                    return (
                                        
                                            <p style={{fontSize:'10px'}}>{skill}</p>
                                    )
                                })}
                                </div>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
        </div>
    )
}


export default Project