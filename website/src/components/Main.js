import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Podcasts from "./Podcasts";
import About from "./About";
import Navbar from "./Navbar";



function Main() {

  return (
    <div className = "App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element = {<Podcasts />}/>
        <Route path="/about" element = {<About />}/>
        </Routes>
    </div>
  )
}

export default Main