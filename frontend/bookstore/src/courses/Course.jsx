import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Coursecontent from "../components/Coursecontent";
import list from "../../public/list.json";

const Course = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Coursecontent />
      </div>

      <Footer />
    </>
  );
};

export default Course;
