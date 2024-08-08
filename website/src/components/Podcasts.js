import React from 'react'

import '../styles/Podcasts.css'
import Aminah from '../images/Aminah.png'
import Ashlon from '../images/Ashlon.png'
import Chandler from '../images/Chandler.png'
import Jordan from '../images/Jordan.png'
import Devin from '../images/Devin.png'
import Dewayne from '../images/Dewayne.png'
import { Link } from "react-router-dom";
import podcastvid from '../images/possible_background1.mp4'
function Podcasts() {
  return (
    <div>
      <div className = "podcasts-container">

      <h1 className="podcasts-title">Podcasts</h1>
      <div className = "background-box">
      <div className="podcast-video-container">
        <div className = "podcast-overlay"> </div>
          <video src={podcastvid} className="podcast-vid" autoPlay loop muted />
        </div>

      <div className = "podcast-square-one">
      <Link to="/podcast/devin">
        <img src = {Devin} className = "podcast-image-one"></img>
        <div className = "podcast-title-one">MLB Goals, National Ranking, Recruiting Process</div>
        </Link>
      </div>
      <div className = "podcast-square-two">
      <Link to="/podcast/dewayne">
      <img src = {Dewayne} className = "podcast-image-two"></img>
      <div className = "podcast-title-two">NFL Draft Process, Duke Legacy & Leadership</div>
      </Link>
      </div>
      <div className = "podcast-square-three">
      <Link to="/podcast/aminah">
      <img src = {Aminah} className = "podcast-image-three"></img>
      <div className = "podcast-title-three">Olympic National Team, Winning Culture, Walk Up Songs</div>
      </Link>
      </div>
      <div className = "podcast-square-four">
      <Link to="/podcast/ashlon">
      <img src = {Ashlon} className = "podcast-image-four"></img>
      <div className = "podcast-title-four">Team USA, Women in Sports & Recruiting Process</div>
      </Link>
      </div>
      <div className = "podcast-square-five">
      <Link to="/podcast/chandler">
      <img src = {Chandler} className = "podcast-image-five"></img>
      <div className = "podcast-title-five">2023 Season, Transfer Portal & Football Chemistry</div>
      </Link>
      </div>
      <div className = "podcast-square-six">
      <Link to="/podcast/jordan">
      <img src = {Jordan} className = "podcast-image-six"></img>
      <div className = "podcast-title-six">NFL Dreams, Brotherhood & New Era of Duke Football</div>
      </Link>
      </div>
      </div>

      </div>

    </div>
  )
}

export default Podcasts