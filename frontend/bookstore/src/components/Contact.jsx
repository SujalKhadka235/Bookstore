import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    return console.log(data);
  };
  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center">
          <div className="w-[600px]">
            <div className="flex items-center justify-center">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div>
                  <h1 className=" text-3xl font-black">Contact Us</h1>
                </div>
                <div className="mt-2 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    {...register("name", { required: true })}
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    placeholder="Enter your name"
                    type="text"
                  />
                  <br />
                  {errors.name && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-2 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    {...register("email", { required: true })}
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-2 space-y-2">
                  <span>Message</span>
                  <br />
                  <div className="mt-2">
                    <textarea
                      {...register("message", { required: true })}
                      className="w-80 h-[100px] px-3 py-1 border rounded-md outline-none"
                      placeholder="Type your message"
                      type="message"
                    />
                  </div>

                  {errors.message && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <button className=" mt-2 bg-blue-500 text-white hover:cursor-pointer rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
