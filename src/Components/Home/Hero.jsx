import React from "react";
import bg from "../../assets/Images/herobg.png";
import down from "../../assets/Svg/downarrow.svg";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <img
        src={bg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="bg-black/20 absolute inset-0 w-full h-full"></div>

      <main className="relative z-10 text-center ">
        <p className="max-w-[1106px] text-white font-poppins font-normal text-[50px]">
          Join a growing healthcare organization committed to improving patient
          outcomes and physician productivity.
        </p>
        <div className="relative flex items-center justify-center pt-12">
          <div className="absolute w-[200px] h-[80px] border-4 border-white rounded-[100px] bg-black/30 cursor-pointer"></div>
          <h1 className="relative font-gothic text-white text-2xl font-semibold px-6 cursor-pointer">
            Play Video
          </h1>
        </div>
        </main>
      <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2">
        <img src={down} alt="Down Arrow" className="w-10 h-10 animate-bounce" />
      </div>
    </div>
  );
}

export default Hero;
