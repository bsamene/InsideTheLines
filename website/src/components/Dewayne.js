import React from 'react'
import dewayne_image from "../images/Dewayne.png"
import '../styles/Dewayne.css'
function Dewayne() {
  return (
    <div>
      <div className='dewayne-container'>
    <img src = {dewayne_image} className = "dewayne-image"></img>
    <div className="button-container">
          <a href="https://www.youtube.com/watch?v=LlE3fchu1uo" target="_blank" rel="noopener noreferrer" className="button watch-button">Watch</a>
          <a href="https://open.spotify.com/episode/6P25hFBxs3pfdD64NvD5y1?si=8b9b1c05786e4027" target="_blank" rel="noopener noreferrer" className="button listen-button">Listen</a>
        </div>
  </div></div>
  )
}

export default Dewayne