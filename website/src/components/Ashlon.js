import React from 'react'
import ashlon_image from "../images/Ashlon.png"
import '../styles/Ashlon.css'
function Ashlon() {
  return (
    <div><div className='ashlon-container'>
    <img src = {ashlon_image} className = "ashlon-image"></img>
    <div className="button-container">
          <a href="https://www.youtube.com/watch?v=dxDsNJsKPeA&t=10s" target="_blank" rel="noopener noreferrer" className="button watch-button">Watch</a>
          <a href="https://open.spotify.com/episode/3Z1sj9aEjponOknvUZKXh3?si=04dc2575f915494d" target="_blank" rel="noopener noreferrer" className="button listen-button">Listen</a>
        </div>
  </div></div>
  )
}

export default Ashlon