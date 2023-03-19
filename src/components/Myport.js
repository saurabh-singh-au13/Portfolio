import React from "react";
import "./Myport.css";

const Myport = () => {
  return (
    <>
      <nav className="social">
        <ul>
          <li>
            <a href="https://github.com/saurabh-singh-au13" target="_blank">
              Github <i className="fa fa-github"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/saurabh-kumar-singh-904a11190/"
              target="_blank"
            >
              LinkedIn <i className="fa fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/s.rajvansh.96/" target="_blank">
              Instagram <i className="fa fa-instagram"></i>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/S.Rajvansh001" target="_blank">
              Facebook <i className="fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </nav>
      
    </>
  );
};

export default Myport;
