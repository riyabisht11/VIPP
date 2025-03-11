import React from "react";
import left from "../../assets/Svg/left.svg"
import right from "../../assets/Svg/right.svg"
function Whoweare() {
  return (
    <div className="max-w-screen-2xl mx-auto px-20 py-24">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="font-poppins text-[22px] font-medium text-[#F17E2D]">
            A Growing Healthcare Organization{" "}
          </h1>
        </div>
        <div>
          <h1 className="font-poppins font-medium text-[60px] text-[#2E3E4D]">
            Who we are?
          </h1>
        </div>
        <div className="max-w-[1339px] text-center pt-6">
          <p className="font-poppins font-normal text-2xl text-[#515151]/70">
            VIPP owns and operates a group of cardiovascular cath labs, surgical
            facilities and diagnostic centers. We employ leading interventional
            radiologists, cardiologists, vascular surgeons, and surgical
            podiatrists. Our state-of-the-art facilities and digital
            infrastructure simplifies care for our patients and helps our
            physicians improve their productivity.{" "}
          </p>
        </div>
      </div>

      <div className="pt-10 flex">
        <div className="left-blue bg-[#485F75] w-1/2 py-10 space-y-10">
        <div className="flex justify-center"><img src={left} alt="" /></div>
          <div>
            <p className="font-poppins font-medium text-[24px] text-white text-center">
              VIPP’s Mission
            </p>
            <p className="font-poppins font-normal text-white text-base px-12 text-center">
              Our mission is to prevent amputations by investing in the <br />{" "}
              right infrastructure, technology, and team of physicians.
            </p>
          </div>
        </div>
        <div className="right-blue bg-[#2E3E4D] w-1/2 py-10 space-y-10">
        <div className="flex justify-center"><img src={right} alt="" /></div>
          <div>
            <p className="font-poppins font-medium text-[24px] text-white text-center">
              VIPP’s Vision
            </p>
            <p className="font-poppins font-normal text-white text-base px-12 text-center">
              of become the largest provider of comprehensive care to <br /> patients
              with diabetes and leg wounds in California.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
