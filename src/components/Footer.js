import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
   
    <div id="footer">
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://www.facebook.com/shishirs1001">
              {" "}
              <FaFacebookF className="headerIcon" />
            </a>
            <a href="https://twitter.com/Shishir56831726">
              <FaTwitter className="headerIcon" />
            </a>
            <a href="https://www.linkedin.com/in/shishir-singh-9093b0174">
              {" "}
              <FaLinkedinIn className="headerIcon" />
            </a>
            <a href="https://www.instagram.com/shishir__07/">
              <FaInstagram className="headerIcon" />
            </a>
            <a href="https://join.skype.com/invite/u9Fb3QSxqCXp">
              <FaSkype className="headerIcon" />
            </a>
          </div>
          <ul class="list-inline">
            <li>
              <Link
                class="list-inline-item"
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                class="list-inline-item"
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                class="list-inline-item"
                to="about1"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                class="list-inline-item"
                to="lang"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Language Known
              </Link>
            </li>
            <li>
              <Link
                class="list-inline-item"
                to="SandC"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Specializations and Certifications
              </Link>
            </li>
            <li>
              <Link
                class="list-inline-item"
                to="additional"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Additional Information
              </Link>
            </li>
            <li>
              <Link
                class="list-inline-item"
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Get in Touch!
              </Link>
            </li>
          </ul>
          <p class="copyright">Shishir Singh © 2021</p>
        </footer>
      </div>
    </div>
   
    
  );
};

export default Footer;
