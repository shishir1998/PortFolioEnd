import React from 'react'
import aboutpic  from "../images/About1.png";

const About = () => {
  
    const [header] = React.useState({
    subHeading: "About Me",
    text:
      "I'm a fast learner and am willing to learn a lot about the working environment and will be giving my 100% to every task I'm assigned.  ",
  });
  
  return (
    <div id="about1">
    <div class="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
            <div className="col-6">
                <div className="about__img">
                <img src={aboutpic}  alt="" ></img>
                </div>
            </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              I have worked on WordPress and know various tools like HTML, CSS, JavaScript and am familiar with libraries and frameworks like ReactJs, VueJs and I too know a little about redux, I'm pretty good with Python also. 
              </div>
              <div className="about__info-p2">
              I'm seeking to work and to learn in a professional environment to nurture my skills and to get the best out of them. My goal is to become associated with a company where I can utilize my skills and gain further experience while enhancing the company’s productivity and reputation.
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
                  
}

export default About
