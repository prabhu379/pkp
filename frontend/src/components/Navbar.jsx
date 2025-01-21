import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/assets_frontend/logo.svg";
import dropdown_icon from "../assets/assets_frontend/dropdown_icon.svg";
import cross_icon from "../assets/assets_frontend/cross_icon.png";
import menu_icon from "../assets/assets_frontend/menu_icon.svg";
import profile_pic from "../assets/assets_frontend/profile_pic.png";
import { ParentContext } from "../context/ParentContext";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
 
   const {pToken,setPToken } = useContext(ParentContext)
  
      const logout = () => {
         pToken && setPToken('')
         pToken && localStorage.removeItem('pToken')
      }

  return (
    
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Logo"
        className="w-44 cursor-pointer"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="py-4">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/attendence" className="py-4">
          <li>ATTENDANCE</li>
        </NavLink>
        <NavLink to="/mark" className="py-4">
          <li>MARK</li>
        </NavLink>
        <NavLink to="/announcement" className="py-4">
          <li>ANNOUNCEMENT</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
       
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img
              className="w-8 rounded-full"
              src={profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={dropdown_icon} alt="Dropdown Icon" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 flex flex-col bg-stone-100 rounded gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/feedback")}
                  className="hover:text-black cursor-pointer"
                >
                  Feedback
                </p>
                <p
                 onClick={logout} 
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
       
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={menu_icon}
          alt="Menu Icon"
        />
        {/* Mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full h-full" : "hidden"
          } md:hidden right-0 top-0 z-20 bg-white`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              alt="Close Icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              HOME
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/attendence">
              ATTENDANCE
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/mark">
              MARK
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              CONTACT
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
