import React from "react";
import "../styles/About.css";
import saphal from '../images/saphal.png';
import matthew from '../images/matthew.png';
import christian from '../images/christian.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import trio from "../images/trio.png";
import { Link } from "react-router-dom";
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
        <img src = {matthew} alt = "saphal" className = "saphal" />
        <img src = {christian} alt = "matthew" className = "matthew" />
        <img src = {saphal} alt = "christian" className = "christian" />
        </div>
        <div className = "blue-box">
        <div className = "saphal-square">
          <div className = "saphal-title">Co-Founder</div>
          <div className = "saphal-name">Matthew Brathwaite</div>
          <div className = "saphal-description">Matthew Brathwaite, from the D.C. metro area, is a rising junior at Duke University studying public policy and economics. A former varsity baseball and basketball player, he now coaches youth basketball for Coach2Inspire, is a practice player for the women's basketball team, and was a recruiting assistant for Duke Football. Matthew’s passion for sports and career focus on sports business bring unique insights to the Inside The Lines podcast.</div>
          <a
    href="https://www.linkedin.com/in/matthew-brathwaite/"
    className="no-und"
    target="_blank"
    rel="noopener noreferrer"
  >
          <LinkedInIcon fontSize = "large" className = "saphal-linkedin"/>
          </a>
          <a
    href="https://www.instagram.com/matthewbrathwaitee/"
    className="no-und"
    target="_blank"
    rel="noopener noreferrer"
  >

          <InstagramIcon fontSize = "large" className="saphal-instagram"/>
        </a>
        </div>
        <div className = "christian-square">
        <div className = "christian-title">Co-Founder</div>
          <div className = "christian-name">Saphal Joshi</div>
          <div className = "christian-description">Saphal Joshi, originally from Nepal, moved to the USA at the age of 7 and has lived in Centreville, Virginia, for most of his life. He is an undergraduate student at Duke University and has been passionate about sports, especially basketball, throughout his life. Saphal is a practice player for the women's basketball team at Duke and aspires to work in the NBA.</div>
          <a
    href="https://www.linkedin.com/in/saphal-joshi-364411245/"
    className="no-und"
    target="_blank"
    rel="noopener noreferrer"
  ><LinkedInIcon fontSize = "large" className = "christian-linkedin"/>
            </a>
            <a
    href="https://www.instagram.com/saphal.j/"
    className="no-und"
    target="_blank"
    rel="noopener noreferrer"
  >
          <InstagramIcon fontSize = "large" className="christian-instagram"/>
</a>
        </div>
        <div className = "matthew-square">
        <div className = "matthew-title">Co-Founder</div>
          <div className = "matthew-name">Christian Dunbar</div>
          <div className = "matthew-description">Christian Dunbar, from Wyncote, PA, is a rising junior at Duke University studying public policy and pursuing a certificate in innovation & entrepreneurship. A former varsity baseball player with all-league honors at Germantown Friends School, he now serves as a Scouting/Recruiting Assistant for Duke Football and is a member of the Duke Sports Business Conference. Christian aspires to become a general manager in the NFL.</div>
          <a
    href="https://www.linkedin.com/in/christianadunbar/"
    className="no-und"
    target="_blank"
    rel="noopener noreferrer"
  >
          <LinkedInIcon fontSize = "large" className = "matthew-linkedin"/>
          </a>
          <a
    href="https://www.instagram.com/ceedeedunbar/"
    className="no-und"
    target="_blank"
    rel="noopener noreferrer"
  >
          <InstagramIcon fontSize = "large" className="matthew-instagram"/>
          </a>
        </div>
        </div>

        </div>

      </div>

    </div>
  );
}

export default About;
