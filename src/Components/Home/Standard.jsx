import React from "react";
import img from "../../assets/Svg/thirty.svg";
import arrow from "../../assets/Svg/arrow.svg";
import img2 from "../../assets/Svg/twnety.svg";
import blueup from "../../assets/Svg/blueup.svg";
import twentyfive from "../../assets/Svg/twentyfive.svg";
import smallup from "../../assets/Svg/smallup.svg";

function Standard() {
  const emptycircle = Array(16).fill(null);
  const fullcircle = Array(16).fill(null);
  return (
    <div className="max-w-screen-2xl mx-auto px-16 pt-20">
      <div className="pt-20 ">
        <div className="upper bg-[#485F75] px-12 py-10 flex justify-between ">
          <div className="px-5">
            <h1 className="font-poppins font-medium text-white text-[54px] text-center">
              Standard Model
            </h1>
            <h1 className="font-poppins font-medium text-white text-[54px] text-center">
              Vs
            </h1>
            <h1 className="font-poppins font-medium text-white text-[54px] text-center">
              VIPP Model
            </h1>
          </div>
          <div className="space-y-10 ">
            <div className="rounded-full size-[186px] bg-white/20 relative z-0">
              <img src={img} alt="" className="absolute z-2" />
            </div>

            <div className="flex-col items-center">
              <h1 className="font-poppins font-bold text-white text-[29px] text-center ">
                30 MIN
              </h1>
              <h1 className="font-poppins font-medium text-white text-[29px] text-center ">
                Per Patient
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white/20 rounded-full size-[70px]   ">
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-8 gap-2 pt-16">
              {" "}
              {/* Grid with 8 columns */}
              {emptycircle.map((_, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  <div className="rounded-full size-[28px] border-white border-2"></div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <h1 className="font-poppins text-white font-normal text-[26px]">
                  <span className="font-poppins text-[30px] font-bold">20</span>{" "}
                  Patients Per day
                </h1>
              </div>

              <div className="grid grid-cols-8 gap-2">
                {" "}
                {/* Grid with 8 columns */}
                {fullcircle.map((_, idx) => (
                  <div key={idx} className="flex justify-center items-center">
                    <div className="rounded-full size-[28px] bg-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lower bg-[#2E3E4D] px-20 p-10 flex justify-between">
          {/* White Box Moved Slightly Up */}
          <div className="bg-white size-[390px] relative -mt-30 shadow-lg">
            <div className="flex justify-center items-center pt-5">
              <img src={blueup} alt="" />
            </div>
            <div className="flex justify-center items-center py-10">
              <img src={twentyfive} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-poppins text-black text-[20px] font-medium">
                Patients Per Day
              </h1>
            </div>
          </div>

          {/* Middle Circle + Image */}
          <div className="space-y-10 flex flex-col items-center pt-10">
            <div className="relative">
              {/* White Circle */}
              <div className="rounded-full size-[186px] bg-white relative z-0"></div>

              {/* Image Positioned on the Right Side */}
              <img
                src={img2}
                alt=""
                className="absolute right-[-10px] top-[80px] -translate-y-1/2 z-10"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center">
              <h1 className="font-poppins font-bold text-white text-[29px] text-center">
                20 MIN
              </h1>
              <h1 className="font-poppins font-medium text-white text-[29px] text-center">
                Per Patient
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center">
            <div className="bg-white/20 rounded-full size-[70px]">
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="space-y-3 flex-col flex items-center justify-center">
            <div className="flex">
              <img src={smallup} alt="" />
              <h1 className="font-poppins text-white font-normal text-[26px]">
                <span className="font-poppins text-[30px] font-bold">20</span>{" "}
                Patients Per day
              </h1>
            </div>

            <div className="grid grid-cols-8 gap-2">
              {/* Grid with 8 columns */}
              {fullcircle.map((_, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  <div className="rounded-full size-[28px] bg-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Standard;
