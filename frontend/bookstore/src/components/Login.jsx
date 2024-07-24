import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        window.my_modal_3.close();
        window.location.reload();
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.msg);
        }
      });
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => window.my_modal_3.close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Login</h3>
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
                    Login
                  </button>
                </div>
                <div className="flex justify-end">
                  <p>
                    Not registered?
                    <Link
                      className="underline text-blue-500 hover:cursor-pointer"
                      to="/signup"
                    >
                      {" "}
                      Sign up
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
