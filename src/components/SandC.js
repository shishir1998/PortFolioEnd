import React from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaVuejs,
    FaReact,
    FaDatabase,
    FaWordpress,
    FaBootstrap,
    FaAdobe,
    FaContao,
    FaPython,
    FaJava,
    FaGithub,

  } from "react-icons/fa";
const Language = () => {
    const [header] = React.useState({ 
        mainHeader: "Specializations & Certifications",
        subHeading: "Skills",
       
      });
      const [state] = React.useState([
        {
          id: 1,
          icon: <FaHtml5 className="commonIcons" />,
          heading: " Hypertext Markup Language",
         
        },
        {
          id: 2,
          icon: <FaCss3Alt className="commonIcons" />,
          heading: " Cascading Style Sheet",
          
        },
        {
            id: 3,
            icon: <FaJsSquare className="commonIcons" />,
            heading: " Java Script",
            
          },
          {
            id: 4,
            icon: <FaVuejs className="commonIcons" />,
            heading: "  VueJs",
            
          },
          {
            id: 5,
            icon: <FaReact className="commonIcons" />,
            heading: " ReactJs",
            
          },
          {
            id: 6,
            icon: <FaAdobe className="commonIcons" />,
            heading: "  Adobe Premiere Pro 2019 ",
            
          },
          {
            id: 7,
            icon: <FaWordpress className="commonIcons" />,
            heading: " WordPress",
            
          },
          {
            id: 8,
            icon: <FaBootstrap className="commonIcons" />,
            heading: "  BootStrap",
            
          },
          {
            id: 9,
            icon: <FaContao className="commonIcons" />,
            heading: " Canva",
            
          },
          {
            id: 10,
            icon: <FaPython className="commonIcons" />,
            heading: " Python",
            
          },
          {
            id: 11,
            icon: <FaDatabase className="commonIcons" />,
            heading: " DBMS",
            
          },
          {
            id: 12,
            // icon: <FaGithub className="commonIcons" />,
            // heading: " Git",
          },
       
      ]);
      return (
        <div id="SandC">
        <div className="SandCAll">
          <div className="container">
            <div className="SandCheader">
              <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className="mainHeader">{header.subHeading}</h1>
               
                <div className="commonBorder"></div>
              </div>
    
              <div className="row bgMain">
                {state.map((info) => (
                  <div className="col-4 bgSandC">
                    <div className="SandCbox" style={{height:160}}>
                      {info.icon}
                      <div className="SandCbox-header">{info.heading}</div>
                      <div className="SandCbox-p">{info.text}</div>
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
export default Language
