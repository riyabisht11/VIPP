import React from "react";
import img from "../../assets/Svg/thirty.svg"

function Standard() {
  return (
    <div className="max-w-screen-2xl mx-auto px-16 py-20">
      <div className="py-20">
        <div className="upper bg-[#485F75] px-12 py-10 flex justify-between">
          <div className="px-5">
            <h1 className="font-poppins font-medium text-white text-[54px] text-center">Standard Model</h1>
            <h1 className="font-poppins font-medium text-white text-[54px] text-center">Vs</h1>
            <h1 className="font-poppins font-medium text-white text-[54px] text-center">VIPP Model</h1>
          </div>
          <div>
            <div className="rounded-full size-[186px] bg-white/20">
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className="font-poppins font-medium text-white text-[29px] ">30 MIN</h1>
                <h1 className="font-poppins font-medium text-white text-[29px] ">Per Patient</h1>
            </div>
          </div>
        </div>
        <div className="lower"></div>
      </div>
    </div>
  );
}

export default Standard;
