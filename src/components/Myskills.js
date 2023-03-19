import React from "react";
import "./Myskills.css";

const Myskills = () => {
  return (
    <>
      <div class="container_skills">
        <div className="skills">Skills</div>
        <div class="bar learning" data-skill="HTML5"></div>
        <div class="bar back basic" data-skill="CSS"></div>
        <div class="bar back intermediate" data-skill="Javascript"></div>
        <div class="bar front advanced" data-skill="React.js"></div>
      
        <div class="bar front expert" data-skill="MaterialUi"></div>
        
      </div>
    </>
  );
};

export default Myskills;
