import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Course from "./pages/Course";

function App() {
return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/courses" element={<Course />}/>
        </Routes>
    );
}

export default App;
