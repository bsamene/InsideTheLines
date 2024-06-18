import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";


function Main() {
  return (
    <div className = "App">
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Main