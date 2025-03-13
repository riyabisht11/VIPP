import React from "react";
import logo from "../assets/Svg/logo.svg";
import Contactus from "../Components/Footercomp/Contactus";

function Footer() {
  return (
    <>
      <div className=" mt-[600px] bg-[#2E3E4D]">
        <div className=" max-w-screen-2xl mx-auto px-20  flex items-center justify-center relative ">
          <div className="absolute w-[90%] -translate-x-1/2 left-1/2 -top-1/3 -translate-y-1/2">
            <Contactus />
          </div>
          <div className="pt-72 pb-8">
            <div className="logo flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
            <div className="pt-10 flex items-center justify-center">
              <h1 className="font-poppins font-normal text-white/70 text-xl ">
                About Us | Leadership |{" "}
                <span className="font-poppins font-normal text-[#F17E2D] text-base">
                  Growth Story{" "}
                </span>{" "}
                | Why VIPP? | Join Our Team | Contact{" "}
              </h1>
            </div>
            <div className="copyright flex items-center justify-center pt-5">
              <h1 className="font-poppins font-normal text-white/70 text-base">
                Copyright @2021. VIPPLLC. All Rights Reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
