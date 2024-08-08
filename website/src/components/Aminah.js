import React from 'react'
import aminah_image from "../images/Aminah.png"

import '../styles/Aminah.css'
function Aminah() {
  return (
    <div>
      <div className='aminah-container'>
        <img src = {aminah_image} className = "aminah-image"></img>
        <div className="button-container">
          <a href="https://www.youtube.com/watch?v=0mzYb7N6iGs" target="_blank" rel="noopener noreferrer" className="button watch-button">Watch</a>
          <a href="https://open.spotify.com/episode/2K1AqHDmWkVKNjyjv6lB1a?si=9cf4f933d23740ff" target="_blank" rel="noopener noreferrer" className="button listen-button">Listen</a>
        </div>
      </div>
    </div>
  )
}

export default Aminah