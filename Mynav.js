import React from "react";
import Hireme from "./Hireme";
import Mycv from "./Mycv";
import "./Mynav.css";
import Myport from "./Myport";
import Myprofile from "./Myprofile";
import Myskills from "./Myskills";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const Mynav = () => {
  const linkCV = "https://drive.google.com/file/d/1-KNAnaHCL5j4WMitKxTbB59M90hL7mo5/view?usp=sharing";
  const linkProject = "https://disneyplus-clone-1f559.web.app/";
  return (
    <>
      <a
        href={linkCV} download
        target="_new"
        
      >
        <div className="c1">
          <div className="resume"> My CV</div>
        </div>
       
      </a>
      <a href={linkProject} target="_new">
        <div className="c1">

          <div className="resume" title="Disney+ Hotstar">Project</div>
        </div>
      </a>
      <div className="container">
        <div className="name">Saurabh Kumar Singh</div>
        <p className="about">Software Developer </p>
          <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txts">
              <li>
                <span>Software Developer</span>
              </li>
              <li>
                <span>MERN Stack Developer</span>
              </li>
              <li>
                <span>Website Maker</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>
        <p className="about1">
          Experience of 1.4+ Years in Software Development. you can join me
          below!{" "}
        </p>
      </div>
      <div>
        <Myport />
        <Myprofile />
      </div>
      <div className="what_i_do">
        <Hireme />
        <div className="cv1">
          <Myskills />
        </div>

        <div className="cv1">
          <div className="cert">
            <div className="c1">
              <div className="certi">My MERN Certificate</div>
            </div>
            <a
              href="https://au-documents.s3.ap-south-1.amazonaws.com/course-complete/AUFS013035-course-complete.pdf"
              target="_"
            >
              <Mycv />
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="https://wa.me/7291089688" 
      //  
        target="_blank"
       
        >
          {/* <i className="fa fa-whatsapp whatsapp-icon"></i> */}
          <FloatingWhatsApp
          style={{ disply:"none"}}
          />
        </a>

      </div>
    </>
  );
};

export default Mynav;
