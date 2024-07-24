import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {
  const [freebook, setfreebook] = useState([]);
  useEffect(() => {
    const getFreeBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setfreebook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFreeBook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterData = freebook.filter((data) => {
    return data.category === "Free";
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
          <p className="font-light">
            Explore our selection of free courses, designed to provide you with
            valuable knowledge and skills at no cost. Whether you're looking to
            expand your expertise or learn something new, our free courses offer
            a wealth of resources to help you achieve your goals. Start your
            learning journey with us today and unlock new opportunities for
            growth and success!
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {filterData.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
