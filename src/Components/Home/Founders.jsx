import React from "react";
import pic1 from "../../assets/Images/pic1.png";
import pic2 from "../../assets/Images/pic2.png";
import pic3 from "../../assets/Images/pic3.png";

function Founders() {
  const array = [
    {
      name: "Ramesh Gupta",
      des: "Chairman",
      cont: "Dr. Gupta is a graduate of All India Institute of Medical Sciences in New Delhi, India. He completed his residency in Internal Medicine from Wayne State University and fellowship in Gastroenterology from University of Utah. As a physician leader with a strong business acumen, he has developed several highly successful medical enterprises over the last 30+ years.",
      img: pic1,
    },
    {
      name: "Vinod Kumar, MD",
      des: "Medical Director",
      cont: "Dr. Kumar is a graduate of Post-Graduate Institute of Medical Sciences, Rohtak, India. He completed his residency in Internal Medicine from Wayne State University and his fellowship in Cardiology from Baylor College of Medicine and a Fellowship in Interventional Cardiology from UCLA Medical Center. He is a pioneer in the field of peripheral vascular interventions.",
      img: pic2,
    },
    {
      name: "Amol Gupta, MD",
      des: "Executive Director",
      cont: "Dr. Gupta is a graduate of Post-Graduate Institute of Medical Sciences, Rohtak, India. He brings healthcare executive leadership and management experience, developing and operationalizing strategic growth imperatives, scaling value-add services, and engaging physicians to align with the transformative healthcare environment of consumer driven care.",
      img: pic3,
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-16 py-5">
      <div className="flex justify-center">
        <h1 className="font-poppins text-[#F17E2D] text-base font-normal">
          Physicians Leading Physicians
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="font-poppins font-medium text-[40px] text-[#2E3E4D] whitespace-nowrap">
          Our Founders
        </h1>
      </div>
      {array.map((item, idx) => (
  <div
    key={idx}
    className="flex flex-col md:flex-row py-4 xl:py-10 gap-10 xl:gap-44 items-center"
  >
    {/* Image First on Small Screens, Order Adjusted for Large Screens */}
    <div
      className={`w-full md:w-1/2 flex justify-center ${
        idx % 2 === 0 ? "md:order-last" : "md:order-first"
      }`}
    >
      <img src={item.img} alt={item.name} className="w-80 md:w-full" />
    </div>

    {/* Text Section */}
    <div
      className={`w-full md:w-1/2 text-center md:text-left ${
        idx % 2 === 0 ? "md:order-first" : "md:order-last"
      }`}
    >
      <h1 className="font-poppins text-[#F17E2D] text-[24px] xl:text-[30px] font-semibold">
        {item.name}
      </h1>
      <h1 className="font-poppins font-normal text-[16px] xl:text-[20px] text-[#515151B2]">
        {item.des}
      </h1>
      <p className="py-6 max-w-[781px] font-poppins font-normal text-base xl:text-[20px] text-[#515151B2]/70">
        {item.cont}
      </p>
    </div>
  </div>
))}


        
 
    </div>
  );
}

export default Founders;
