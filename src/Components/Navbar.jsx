import React from "react";
import { FaSearch, FaHeart, FaStore } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-1 text-sm pl-12 bg-gray-100 "
       style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>
        {/* Left logos */}
        <div className="flex items-center gap-4">
          <img src="/jordan-logo.png" alt="Jordan" className="h-5 cursor-pointer" />
          <img src="/converse-logo.png" alt="Converse" className="h-7 cursor-pointer" />
        </div>

        {/* Right text */}
        <div className="flex items-center gap-2 text-black text-xs font-medium mr-8">
          <a href="#" className="hover:underline">Find a Store</a>
          <span className="text-black">|</span>
          <a href="#" className="hover:underline">Help</a>
          <span className="text-black">|</span>
          <a href="#" className="hover:underline">Join Us</a>
          <span className="text-black">|</span>
          <a href="#" className="hover:underline">Sign In</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="relative flex justify-between items-center px-6 py-2.5 ml-5"
      style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>
        {/* Nike Logo */}
        <div>
          <img src="/swoosh-logo.png" alt="Nike" className="h-10 cursor-pointer" />
        </div>

        {/* Center Links (absolute center) */}
        <ul className="hidden md:flex gap-6 font-medium text-base text-gray-800 absolute left-1/2 -translate-x-1/2">
          <li className="cursor-pointer hover:underline">New</li>
          <li className="cursor-pointer hover:underline">Men</li>
          <li className="cursor-pointer hover:underline">Women</li>
          <li className="cursor-pointer hover:underline">Kids</li>
          <li className="cursor-pointer hover:underline">Jordan</li>
          <li className="cursor-pointer hover:underline">Sport</li>
          <li className="cursor-pointer hover:underline">Sale</li>
        </ul>

        {/* Right Side - Search + Icons */}
        <div className="flex items-center gap-4 mr-8">
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-full w-32">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
          <FaHeart className="cursor-pointer text-gray-700" />
          <FaStore className="cursor-pointer text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
