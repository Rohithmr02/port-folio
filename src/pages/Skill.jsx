import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import reactimage from "../assests/atom.png";
import programm from "../assests/programming.png";
import mongodbimage from "../assests/database.png";
import htmlimage from "../assests/html.png";
import javascriptimage from "../assests/java-script.png";
import cssimage from "../assests/css-3.png";
import expressimage from "../assests/express-js.png";
import pythonimage from "../assests/python.png";
import sqlimage from "../assests/sql-server.png";

function Skill() {
  const arr = [
    {
      img: htmlimage,
      title: "Html",
    },
    {
      img: cssimage,
      title: "Css",
    },
    {
      img: javascriptimage,
      title: "Javascript",
    },
    {
      img: reactimage,
      title: "React js",
    },
    {
      img: expressimage,
      title: "Express js",
    },
    {
      img: mongodbimage,
      title: "Mongodb",
    },
    {
      img: pythonimage,
      title: "Python",
    },
    {
      img: sqlimage,
      title: "Sql",
    },
  ];

  useGSAP(() => {
    const content = gsap.utils.toArray("#skillcontainer .skillcontent");
    console.log(content);
    gsap.to(content, {
      xPercent: -100 * (content.length - 1),
      scrollTrigger: {
        trigger: "#skillcontainer",
        pin: true,
        scrub: true,
        start: "top 2%",
      },
    });
    gsap.fromTo(
      ".skill-card",
      {
        y: "100%",
      },
      {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#skillcontainer",
          scrub: true,
          start: "top 59%",
          end: "top 20%",
        },
        stagger: {
          amount: 6,
          repeatDelay: 1,
        },
      }
    );
    gsap.fromTo(
      ".skillbox2image",
      {
        x: "-100%",
        duration: 1,
      },
      {
        x: "130%",
        scale: 1.7,
        duration: 2,
        rotate: "360",
        scrollTrigger: {
          trigger: "#skillcontainer",
          scrub: true,
        },
      }
    );
    gsap.from(".skillbox3head", {
      x: "130%",
      scale: 10,
      duration: 2,
      scrollTrigger: {
        trigger: ".skill-content-box2",
        scrub: true,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="skillcontainer">
      <div className="skillcontent">
        <div className="skill-content-box">
          {arr.map((item, index) => {
            return (
              <div className="skill-card">
                <div className="skill-icon">
                  <img src={item.img} alt="" />
                </div>
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skillcontent">
        <div className="skill-content-box2">
          <img src={programm} alt="skillimage" className="skillbox2image" />
        </div>
      </div>
      <div className="skillcontent">
        <div className="skill-content-box3">
          <h1 className="skillbox3head">
            Let's dive into <span>Projects!</span>
          </h1>
          <p className="skillbox3head">
            "Hey there! Get ready to witness a visually stunning, dynamic skills
            section that’s not just functional but bursting with personality and
            creativity—let’s bring your portfolio to life!" 🎉
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
