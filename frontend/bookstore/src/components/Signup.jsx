import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
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
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Sign up</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  {...register("name", { required: true })}
                  className="w-80 px-3 py-1 border rounded-md ouline-none"
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
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  {...register("email", { required: true })}
                  className="w-80 px-3 py-1 border rounded-md ouline-none"
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
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  {...register("password", { required: true })}
                  className="w-80 px-3 py-1 border rounded-md ouline-none"
                  placeholder="Enter your password"
                  type="password"
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-start">
                  <button className=" bg-pink-500 text-white hover:cursor-pointer rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Sign up
                  </button>
                </div>
                <div className="flex justify-end">
                  <p>
                    Have an Account?
                    <a
                      onClick={() => {
                        return document
                          .getElementById("my_modal_3")
                          .showModal();
                      }}
                      className="underline text-blue-500 hover:cursor-pointer"
                    >
                      {" "}
                      Login here
                    </a>{" "}
                    <Login />
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
