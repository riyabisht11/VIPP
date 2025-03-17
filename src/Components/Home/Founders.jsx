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
    <div className="max-w-screen-2xl mx-auto px-20 py-5">
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

      {array.map((item,idx) =>(
          <div className="flex py-10 gap-44">
            <div className={` left w-3/4 order-first
                ${
              idx % 2 !== 0 ? "order-last" : "order-first"
            } `}>
              <div>
                <h1 className="font-poppins text-[#F17E2D] text-[30px] font-semibold">
                {item.name}
                </h1>
                <h1 className="font-poppins font-normal text-[20px] text-[#515151B2]">
                  {" "}
                {item.des}
                </h1>
              </div>
              <div>
                <p className="py-10 max-w-[781px] font-poppins font-normal text-[20px] text-[#515151B2]/70 ">
                  {item.cont}
                </p>
              </div>
            </div>

            <div className="right size-80">
              <img src={item.img} alt="" />
            </div>
          </div>
        
      ))}
    </div>
  );
}

export default Founders;
