import React from "react";
import { Link as RouteLink } from "react-router-dom";

import logo from "../images/LOGOfinal1.png";
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={logo} height="100px" width="100px" alt=""></img>
            </div>
          </ul>
          {toggle ? (
            <ul className="navbar__right">
              <li>
                <RouteLink
                  to="home"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Home
                </RouteLink>
              </li>
              <li>
                <RouteLink
                  to="project"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Projects
                </RouteLink>
              </li>
              <li>
                <RouteLink
                  to="about1"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  About
                </RouteLink>
              </li>
              <li>
                <RouteLink
                  to="lang"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Language Known
                </RouteLink>
              </li>
              <li>
                <RouteLink
                  to="SandC"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Specializations and Certifications
                </RouteLink>
              </li>
              <li>
                <RouteLink
                  to="additional"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Additional Information
                </RouteLink>
              </li>
              <li>
                <RouteLink to="contact" activeClass="active" spy={true}>
                  Get in Touch!
                </RouteLink>
              </li>
           
            </ul>
          ) : null}

          <div className="toggle" onClick={() => setToggle(!toggle)}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
