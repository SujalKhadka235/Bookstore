import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="m-10 max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold ">
              Hello, welcome here to learn something
              <span className="text-pink-500"> new everyday!!! </span>
            </h1>
            <p className="text-xl">
              Join our community of lifelong learners! Here, you'll find a
              wealth of resources to help you expand your knowledge and skills.
              Whether you're looking to advance your career, explore a new
              hobby, or simply stay curious, we have something for everyone.
              Stay updated and never miss out on new and exciting courses
              tailored just for you.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <button className="btn mt-6 btn-active btn-secondary">
              Recieve Notifications for courses
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 md:mt-20 md:ml-10 relative">
          <img
            src={banner}
            className="w-full h-full object-cover"
            alt="Learning Banner"
          />
          <div className="absolute inset-0 bg-white opacity-0 dark:bg-black dark:opacity-50"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
