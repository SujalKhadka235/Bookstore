import React from "react";
import { useAuth } from "../context/Authprovider";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogOut = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      alert("Log out sucessfull");
      window.location.reload();
    } catch (e) {
      alert("Error" + e.message);
    }
  };
  return (
    <>
      <div>
        <button
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
