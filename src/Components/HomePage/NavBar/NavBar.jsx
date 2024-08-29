import logo from "../../../assets/images/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="p-4 bg-green-600 fixed z-50 w-full flex items-center h-[70px] justify-center">
      <div className="container flex justify-between">
        <img src={logo} alt="Logo" className="h-[46px] w-[50px]" />
        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-12 text-white cursor-pointer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/eService">E-Services</Link>
            </li>
            <li>ENSG</li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
          {/* <button className="bg-green-500 p-4 rounded-lg hover:bg-green-700 text-white font-bold ">
            Login
          </button> */}
          <FiShoppingCart className="text-white h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

import React from "react";

