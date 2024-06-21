import React from "react";

import "../styles/Home.css";


import homevid from "../images/homevid.mp4";
function Home() {
  return (
    <div>

        <div className="homevid-container">
        <div className = "overlay"> </div>
          <video src={homevid} className="homevid" autoPlay loop muted />
        </div>
      </div>

  );
}

export default Home;
