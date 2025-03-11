import React from "react";
import logo from "../assets/Svg/logo.svg";

function Header() {
  return (
    <nav className="absolute top-4 left-0 w-full z-10 max-w-screen-2xl mx-auto px-20 flex justify-center gap-16 ">
    <div className="one flex justify-center gap-20 py-5">
      <div className="text-white font-roboto font-medium text-[20px] cursor-pointer">
        <h1>About US</h1>
      </div>
      <div className="text-white font-roboto font-medium text-[20px] cursor-pointer">
        <h1>Leadership</h1>
      </div>
      <div className="text-white font-roboto font-medium text-[20px] cursor-pointer">
        <h1>Growth Story</h1>
      </div>
    </div>

    <div className="logo flex flex-col justify-center items-center">
      <img src={logo} alt="Logo" className="h-12" />
    </div>

    <div className="second flex justify-center gap-16 py-5">
      <div className="text-white font-roboto font-medium text-[20px] cursor-pointer">
        <h1>Why VIPP?</h1>
      </div>
      <div className="text-white font-roboto font-medium text-[20px] cursor-pointer">
        <h1>Join Our Team</h1>
      </div>
     
     
    </div>
    <div className="cursor-pointer py-2">
      <button className="bg-[#F17E2D] rounded-[60px] py-3 px-8 text-white font-roboto font-medium text-[20px] cursor-pointer">
        Contact
      </button>
    </div>
    

    
  </nav>
  );
}

export default Header;
