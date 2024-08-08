import React from 'react';
import devin_image from '../images/Devin.png';
import '../styles/Devin.css';

function Devin() {
  return (
    <div>
      <div className='devin-container'>
        <img src={devin_image} className="devin-image" alt="Devin"></img>
        <div className="button-container">
          <a href="https://www.youtube.com/watch?v=AgfpIFimv7M" target="_blank" rel="noopener noreferrer" className="button watch-button">Watch</a>
          <a href="https://open.spotify.com/episode/1NM2tWNImknWJXe0UeHXgP?si=a53efb8c1a224489" target="_blank" rel="noopener noreferrer" className="button listen-button">Listen</a>
        </div>
      </div>
    </div>
  );
}

export default Devin;
