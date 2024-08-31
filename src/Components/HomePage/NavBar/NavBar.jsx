import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="p-4 bg-green-600 fixed z-50 w-full flex items-center h-[70px] justify-center shadow-md">
      <div className="container flex justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[46px] w-[50px]" />
        </Link>
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-12 text-white cursor-pointer">
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
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <a href={import.meta.env.VITE_LOGIN_URL} className="hidden md:block">
            <button className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-100 transition-colors">
              Login
            </button>
          </a>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-green-600 flex flex-col items-center justify-center z-40">
          <button className="absolute top-4 right-4 text-white" onClick={closeMobileMenu}>
            <FiX size={24} />
          </button>
          <ul className="flex flex-col items-center gap-8 text-white text-2xl cursor-pointer">
            <li onClick={closeMobileMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/services">Our Services</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/eService">E-Services</Link>
            </li>
            <li onClick={closeMobileMenu}>ENSG</li>
            <li onClick={closeMobileMenu}>
              <Link to="/project">Project</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <a href={import.meta.env.VITE_LOGIN_URL}>
                <button className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-100 transition-colors">
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
