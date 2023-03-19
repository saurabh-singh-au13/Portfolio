import React from 'react'
import "./Myprofile.css";

const Myprofile = () => {
  return (
    <>
    <div className="photo">
        <div className="avatar">
          <img
            src={require("../img/user.jpg")}
            width="200px"
            height="200px"
            alt="user"
          />
        </div>
      </div>
    </>
  )
}

export default Myprofile