import React from 'react'
import chandler_image from "../images/Chandler.png"
function Chandler() {
  return (
    <div>
      <div className='chandler-container'>
        <img src = {chandler_image} className = "chandler-image"></img>
      </div>
    </div>
  )
}

export default Chandler