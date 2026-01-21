import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSearch } from "react-icons/fi";
import Logo from "../assets/logo.webp";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between h-20 px-5">
        {/* Logo */}
        <Link
          to="/"
          className="hidden md:flex items-center space-x-2 text-gray-900 hover:text-gray-700"
        >
          <img className="w-10" src={Logo} alt="Logo" />
        </Link>

        {/* Navigation links */}
        <div className="w-full flex justify-between md:justify-center gap-5 md:gap-90">
          <Link
            to="/"
            className={`flex items-center justify-center gap-3 md:gap-5 px-6 py-2 md:px-4 md:py-2 rounded-md transition-colors ${isActive("/")
              ? "bg-accent text-white"
              : "text-black font-bold hover:text-gray-900 hover:bg-gray-100 border-black border-2 bg-blue-100"
              }`}
          >
            <FiHome size={20} />
            <span className="font-medium hidden md:block">Home</span>
          </Link>

          <Link
            to="/about"
            className={`flex items-center justify-center gap-3 md:gap-5 px-6 py-2 md:px-4 md:py-2 rounded-md transition-colors ${isActive("/about")
              ? "bg-accent text-white"
              : "text-black font-bold hover:text-gray-900 hover:bg-gray-100 border-black border-2 bg-blue-100"
              }`}
          >
            <FaRegUser size={20} />
            <span className="font-medium hidden md:block">About Us</span>
          </Link>

          <Link
            to="/search"
            className={`flex items-center justify-center gap-3 md:gap-5 px-6 py-2 md:px-4 md:py-2 rounded-md transition-colors ${isActive("/search")
              ? "bg-accent text-white"
              : "text-black font-bold hover:text-gray-900 hover:bg-gray-100 border-black border-2 bg-blue-100"
              }`}
          >
            <FiSearch size={20} />
            <span className="font-medium hidden md:block">Search</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
