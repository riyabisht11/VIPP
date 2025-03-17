import React from 'react'
import pic from "../../assets/Images/growthpic.png"

function GrowthStory() {
  return (
    <div className=" max-w-screen-2xl mx-auto px-20 py-20">
      <div className="flex justify-center">
        <h1 className="font-poppins text-[#F17E2D] text-base font-normal">
          History of Success
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="font-poppins font-medium text-[40px] text-[#2E3E4D] whitespace-nowrap">
          Growth Story
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="font-poppins font-normal text-[20px] text-[#515151] py-10">
          VIPP owns and operates a group of cardiovascular cath labs, surgical
          facilities and diagnostic centers. We employ leading interventional
          radiologists, cardiologists, vascular surgeons, and surgical
          podiatrists. Our state-of-the-art facilities and digital
          infrastructure simplifies care for our patients and helps our
          physicians improve their productivity.{" "}
        </p>
      </div>

      <div><img src={pic} alt="" /></div>
    </div>
  )
}

export default GrowthStory
