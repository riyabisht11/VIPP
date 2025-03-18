import React from "react";
import logo1 from "../../assets/Svg/logo1.svg";
import logo2 from "../../assets/Svg/logo2.svg";
import logo3 from "../../assets/Svg/logo3.svg";
import logo4 from "../../assets/Svg/logo4.svg";
import logo5 from "../../assets/Svg/logo5.svg";

function Join() {
  const array = [
    { img: logo1, name: "Join a Winning Team" },
    { img: logo2, name: "Impact Your Community" },
    { img: logo3, name: "Earn More Income" },
    { img: logo4, name: "Maintain Quality of Life" },
    { img: logo5, name: "Control Your Schedule" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-16 py-20">
      <div className="flex justify-center">
        <h1 className="font-poppins text-[#F17E2D] text-base font-normal">
          Impact Your Community. Maximize Your Potential. Optimize Your Quality
          of Life.
        </h1>
      </div>

      <div className="flex justify-center items-center py-4">
        <h1 className="font-poppins font-medium text-[40px] text-[#2E3E4D] whitespace-nowrap">
          Join our Team
        </h1>
      </div>

      <div className="flex gap-16 ">
        <div className="left w-[1056px] pl-10">
          <div className="pt-7">
            <h1 className="font-poppins text-[24px] font-normal text-[#515151]">
              VIPP has a proven track record of success and a management team
              that can help you maintain your quality of life while maximizing
              your economic potential. We provide you with a robust team of
              onsite & remote professionals to help you see more patients
              without the administrative headache.
            </h1>
            <h1 className="font-poppins text-[24px] font-normal text-[#515151] pt-10 pb-11">
              To apply, please email{" "}
              <span className="font-poppins text-[24px] font-normal text-[#F17E2D]">
                careers@vippllc.com
              </span>{" "}
              with a copy of your resume.
            </h1>
          </div>
          <div className="bg-[#2E3E4D] max-w-[1056px] px-14 py-14">
            <div className="">
              <div>
                <h1 className="font-poppins text-[36px] font-medium text-[#F17E2D]">
                  Physician Openings
                </h1>
              </div>
              <div>
                <h1 className="font-poppins text-[24px] text-white/70 font-normal">
                  Interventional Radiologist:{" "}
                  <span className="font-poppins text-[24px] text-white font-semibold">
                    $750,000 - $1,000,000
                  </span>{" "}
                  income, 10 weeks Paid Time Off. VIPP is seeking an
                  Interventional Radiologist with expertise in Peripheral
                  Arterial Disease procedures. To download full job description,
                  please click here (job advertisement is attached – need to
                  brand it with VIPP letterhead).{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className="py-7">
            <h1 className="font-poppins text-[36px] text-[#515151] font-medium">
              Management & Staff Openings
            </h1>
            <h1 className="font-poppins text-[24px] text-[#515151] font-normal">
              Multiple openings throughout Central California. Please email us
              with a copy of your resume.
            </h1>
          </div>
        </div>

        <div className="right w-1/2 pt-20 pl-30 space-y-11 ">
        {array.map((item,idx)=> ( <div className="flex ">
            <div className="bg-[#F17E2D] px-5 py-6 flex items-center justify-center size-[109px] ">
              <img src={item.img} alt="" className="" />
            </div>
            <div className="bg-[#2E3E4D] px-10 py-11 w-[353px]  h-[109px] flex items-center justify-center">
              <h1 className="font-poppins font-normal text-[21px] text-white whitespace-nowrap">
                {item.name}
              </h1>
            </div>
          </div>))}
         
        </div>
      </div>
    </div>
  );
}

export default Join;
