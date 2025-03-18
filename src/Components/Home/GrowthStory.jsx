import React from "react";
import pic from "../../assets/Images/growthpic.png";
import img1 from "../../assets/Images/img1.png";
import img2 from "../../assets/Images/img2.png";
import img3 from "../../assets/Images/img3.png";
import img4 from "../../assets/Images/img4.png";
import img5 from "../../assets/Images/img5.png";
import img6 from "../../assets/Images/img6.png";
import img7 from "../../assets/Images/img7.png";
import img8 from "../../assets/Images/img8.png";
import img9 from "../../assets/Images/img9.png";

function GrowthStory() {
  const pictures = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className=" max-w-screen-2xl mx-auto px-16 py-20">
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

      <div className="grid grid-cols-3 gap-6 pt-6">
        {pictures.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img src={image} alt={`growth-img-${index}`} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrowthStory;
