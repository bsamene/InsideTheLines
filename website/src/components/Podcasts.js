import React from 'react'

import '../styles/Podcasts.css'
import podcast from '../images/itl-logo.png'
function Podcasts() {
  return (
    <div>
      <div className = "podcasts-container">

      <h1 className="podcasts-title">Podcasts</h1>
      <div className = "light-blue-box">
      <div className = "podcast-square-one">
        <img src = {podcast} className = "podcast-image-one"></img>
      </div>
      <div className = "podcast-square-two">
      <img src = {podcast} className = "podcast-image-two"></img>
      </div>
      <div className = "podcast-square-three">
      <img src = {podcast} className = "podcast-image-three"></img>
      </div>
      <div className = "podcast-square-four">
      <img src = {podcast} className = "podcast-image-four"></img>
      </div>
      <div className = "podcast-square-five">
      <img src = {podcast} className = "podcast-image-five"></img>
      </div>
      <div className = "podcast-square-six">
      <img src = {podcast} className = "podcast-image-six"></img>
      </div>
      </div>

      </div>

    </div>
  )
}

export default Podcasts