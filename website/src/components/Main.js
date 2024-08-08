import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Podcasts from "./Podcasts";
import About from "./About";
import Navbar from "./Navbar";
import Devin from "./Devin";
import Dewayne from "./Dewayne";
import Aminah from "./Aminah";
import Ashlon from "./Ashlon";
import Chandler from "./Chandler";
import Jordan from "./Jordan";

function Main() {

  return (
    <div className = "App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element = {<Podcasts />}/>
        <Route path="/about" element = {<About />}/>
        <Route path = "/podcast/devin" element = {<Devin />}/>
        <Route path = "/podcast/dewayne" element = {<Dewayne />}/>
        <Route path = "/podcast/aminah" element = {<Aminah />}/>
        <Route path = "/podcast/ashlon" element = {<Ashlon />}/>
        <Route path = "/podcast/chandler" element = {<Chandler />}/>
        <Route path = "/podcast/jordan" element = {<Jordan />}/>
        </Routes>
    </div>
  )
}

export default Main