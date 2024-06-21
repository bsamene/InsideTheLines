import React from "react";
import "../styles/About.css";
import saphal from '../images/saphal.png';
import matthew from '../images/matthew.png';
import christian from '../images/christian.png';

import trio from "../images/trio.png";
function About() {
  return (
    <div>
      <div className="about-container">

        <h1 className="about-title">Meet the Team</h1>
        <img src={trio} alt="trio" className="trio" />
        <div className="about-description">We are saphal</div>
        <div className="white-box">

        <div className = "white-box-text">
        Founded in August of 2020, ThreeFourTwo Productions aims to give an inside look at the stories and personalities in the worlds of sports, business, politics and entertainment. The company’s flagship show, “The Old Man and the Three”, is hosted by founders JJ Redick and Tommy Alter.  The show was the only podcast to broadcast from inside the NBA bubble in Orlando.
        </div>
        <div className = "team-container">
        <img src = {saphal} alt = "saphal" className = "saphal" />
        <img src = {matthew} alt = "matthew" className = "matthew" />
        <img src = {christian} alt = "christian" className = "christian" />
        </div>
        </div>

      </div>

    </div>
  );
}

export default About;
