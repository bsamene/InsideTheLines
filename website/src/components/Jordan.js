import React from 'react'
import jordan_image from "../images/Jordan.png"
import '../styles/Jordan.css'
function Jordan() {
  return (
    <div>
      <div className='jordan-container'>
    <img src = {jordan_image} className = "jordan-image"></img>
    <div className="button-container">
          <a href="https://www.youtube.com/watch?v=GjOgBYZYALU&t=165s" target="_blank" rel="noopener noreferrer" className="button watch-button">Watch</a>
          <a href="https://open.spotify.com/episode/067MoBb80d3eAwzgtqKBLI?si=f16983f623b34f5c" target="_blank" rel="noopener noreferrer" className="button listen-button">Listen</a>
        </div>
  </div>
  </div>
  )
}

export default Jordan