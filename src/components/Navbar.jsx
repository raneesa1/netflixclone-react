import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const logoUrl =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  const { user, sessionOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout= async()=>{
    try {
      await sessionOut();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="absolute w-full p-4 flex items-center z-50 justify-between">
      <Link to="/">
        <img src={logoUrl} alt="logo" className="w-36" />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize px-4 py-1 cursor-pointer">
              Profile
            </button>
          </Link>


            <button onClick={handleLogout} className="capitalize px-4 py-1 rounded cursor-pointer bg-red-600">
              Log out
            </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize px-4 py-1 cursor-pointer">
              login
            </button>
          </Link>

          <Link to="/signup">
            <button className="capitalize px-4 py-1 rounded cursor-pointer bg-red-600">
              Signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
