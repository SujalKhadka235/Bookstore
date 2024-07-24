import React from "react";
import Home from "./home/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./courses/Course";
import Signup from "./components/Signup";
import Contactpage from "./components/Contactpage";
import Aboutus from "./components/Aboutus";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";
import { useState } from "react";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
