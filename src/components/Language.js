import React from 'react'
import {
    FaHireAHelper,
    FaBuysellads,
  } from "react-icons/fa";
const Language = () => {
    const [header] = React.useState({ 
        mainHeader: "Languages",
        subHeading: "Languages Known",
       
      });
      const [state] = React.useState([
        {
          id: 1,
          icon: <FaHireAHelper className="commonIcons" />,
          heading: "Hindi",
          text:
            "Read, write and speak",
        },
        {
          id: 2,
          icon: <FaBuysellads className="commonIcons" />,
          heading: "English",
          text:
            "Read, write and speak",
        },
       
      ]);
      return (
        <div id="lang">
        <div className="All">
          <div className="container">
            <div className="Allheader">
              <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className="mainHeader">{header.subHeading}</h1>
                
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
export default Language
