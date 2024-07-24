import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Coursecontent = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you
            <span className="text-pink-500"> here! :)</span>
          </h1>
          <p className="mt-12">
            Welcome to our platform! Here, you'll find a wealth of resources
            designed to help you grow and succeed. Whether you're looking for
            detailed guides, insightful articles, or hands-on tutorials, we've
            got you covered. Dive in and explore the endless possibilities that
            await you. Your journey to knowledge and excellence starts here!
          </p>
          <Link to="/">
            <button className="mt-6 btn bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Coursecontent;
