import React from "react";
import Mycv from "./Mycv";
import "./Mynav.css";
import Myport from "./Myport";
import Myprofile from "./Myprofile";
import Myskills from "./Myskills";

const Mynav = () => {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1HCuYmO2Xur7QlF6eRHIpK-V0MfWTO9Tc/view?usp=sharing"
        target="_new"
      >
        <div className="c1">
          <div className="resume">My CV</div>
        </div>
      </a>
      <div className="container">
        <div className="name">Saurabh Kumar Singh</div>
        <p className="about">Software Developer </p>
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

        <div className="cv1">
          <Myskills />
        </div>
        <div className="cv1">
          <div className="cert">
            <div className="c1">
              <div className="certi">My MERN Certificate</div>
            </div>
            <a href="https://au-documents.s3.ap-south-1.amazonaws.com/course-complete/AUFS013035-course-complete.pdf" target="_">
            <Mycv />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mynav;
