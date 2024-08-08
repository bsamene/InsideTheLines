import React from 'react'
import chandler_image from "../images/Chandler.png"
import '../styles/Chandler.css'
function Chandler() {
  return (
    <div>
      <div className='chandler-container'>
        <img src = {chandler_image} className = "chandler-image"></img>
        <div className="button-container">
          <a href="https://www.youtube.com/watch?v=KFTf_yc8prE" target="_blank" rel="noopener noreferrer" className="button watch-button">Watch</a>
          <a href="https://open.spotify.com/episode/5Uej37t5yHSbzm111vwcpY?si=2250bfdae67a4090" target="_blank" rel="noopener noreferrer" className="button listen-button">Listen</a>
        </div>
      </div>
    </div>
  )
}

export default Chandler