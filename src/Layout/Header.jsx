import React from "react";
import logo from "../assets/Svg/logo.svg";

function Header() {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] z-10 px-16 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-28 flex-1">
        <h1 className="text-white font-roboto font-medium text-[24px] cursor-pointer whitespace-nowrap">About Us</h1>
        <h1 className="text-white font-roboto font-medium text-[24px] cursor-pointer">Leadership</h1>
        <h1 className="text-white font-roboto font-medium text-[24px] cursor-pointer whitespace-pre">Growth Story</h1>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center flex-1">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-28 flex-1 justify-end">
        <h1 className="text-white font-roboto font-medium text-[24px] cursor-pointer whitespace-nowrap">Why VIPP?</h1>
        <h1 className="text-white font-roboto font-medium text-[24px] cursor-pointer whitespace-nowrap">Join Our Team</h1>
      </div>

      {/* Contact Button */}
      <div className="ml-8  ">
        <button className="bg-[#F17E2D] rounded-full py-3 px-10 text-white font-roboto font-medium text-[22px] cursor-pointer shadow-lg hover:bg-[#d96d28] transition">
          Contact
        </button>
      </div>

    </nav>
  );
}

export default Header;
