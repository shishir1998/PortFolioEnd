import React from 'react'
import {
    FaPython,
    FaWordpressSimple,
    FaCircleNotch,
    FaAndroid,
    FaReact,
    FaVuejs,
    
  } from "react-icons/fa";
const Project = () => {
    const [header] = React.useState({ 
        mainHeader: "Projects",
        subHeading: "My Projects",
       
      });
      const [state] = React.useState([
        {
          id: 1,
          icon: <FaPython className="commonIcons" />,
          heading: "Online Quiz System",
          text:
          "I've made a project using Python & pre-made question APIs keeping this quarantine process in mind.",
        },
        {
          id: 2,
          icon: <FaWordpressSimple className="commonIcons" />,
          heading: "Website",
          text:
            "Made dummy websites using WordPress, HTML, CSS, & javascript",
        },
        {
          id: 3,
          icon: <FaCircleNotch className="commonIcons" />,
          heading: "Web Desing",
          text:
            "I made multiple logos, designed images, customized banners, etc using canva.",
        },
        {
          id: 4,
          icon: <FaAndroid className="commonIcons" />,
          heading: "Android Application (Uttarakhand tourism App)",
          text:
            "This was my college final project in which I listed (Front end) all the tourism spots of Uttarakhand.",
        },
        {
          id: 5,
          icon: <FaVuejs className="commonIcons" />,
          heading: "Final Semester Project",
          text:
            "I'm working on a live project, It's a website of a travel insurance company & another website of an online trading company using VueJs, ReactJs and Redux",
        },
        {
          id: 6,
          icon: <FaReact className="commonIcons" />,
          heading: "Port-folio Website ",
          text:
            "I'm made this portfolio by myself using React js.",
        },
      
       
      ]);
      return (
      <div id="project">
        <div className="All">
          <div className="container">
            <div className="Allheader">
              <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className="mainHeader">{header.subHeading}</h1>
                <p className="mainContent">{header.text}</p>
                <div className="commonBorder"></div>
              </div>
    
              <div className="row bgMain">
                {state.map((info) => (
                  <div className="col-4 bgMain">
                    <div className="Allbox" style={{height:270}}>
                      {info.icon}
                      <div className="Allbox-header">{info.heading}</div>
                      <div className="Allbox-p">{info.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    };
export default Project
