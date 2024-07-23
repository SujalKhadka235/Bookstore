import React from "react";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import Course from "./courses/Course";
import Signup from "./components/Signup";
import Contactpage from "./components/Contactpage";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
