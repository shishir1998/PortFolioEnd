import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
  
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Shishir Singh",
    text:
      "A technically savvy web developer, who has expertise in website development. I can produce long-term solutions for front-end problems.​",
   
  });
  return (
    <div id="home">
    <header className="appHeader">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                  <a href="https://www.facebook.com/shishirs1001"> <FaFacebookF className="headerIcon" /></a> 
                  </li>
                  <li>
                  <a href="https://twitter.com/Shishir56831726"><FaTwitter className="headerIcon" /></a> 
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/shishir-singh-9093b0174"><FaLinkedinIn className="headerIcon" /></a> 
                  </li>
                  <li>
                  <a href="https://www.instagram.com/shishir__07/"><FaInstagram className="headerIcon" /></a> 
                  </li>
                  <li>
                  <a href="https://join.skype.com/invite/u9Fb3QSxqCXp"><FaSkype className="headerIcon" /></a> 
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                 
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </header>
    </div>
  );
};

export default Banner;
