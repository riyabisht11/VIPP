import React from 'react'
import pic1 from "../../assets/Images/health.png"
import pic2 from "../../assets/Images/art.png"
import pic3 from "../../assets/Images/digital.png"

function Whatsets() {
    const array = [
       {
         name: "Medical Focus",
         cont: "Our Physician-led leadership team has designed a unique 9:1 approach to provide diabetic patients with comprehensive lower extremity care under one roof. This has led to faster communication between physicians resulting in better care for our patients.",
         img: pic1,
       },
       {
         name: "State of the art facilities ",
         cont: "We invest in the latest technology and infrastructure, empowering our physicians to utilize full suite of cardiac & vascular testing in our accredited diagnostic labs, perform minimally invasive interventional procedures in our fully equipped cath labs and offer advanced wound healing therapies including hyperbaric oxygen therapy to our patients.",
         img: pic2,
       },
       {
         name: "Digital Infrastructure ",
         cont: "We support our physicians with a robust team in India that includes medical, IT, finance and management professionals. We have invested in a digital infrastructure that allows for seamless collaboration between India & the US in real-time. This has significantly reduced our costs of operation and increased the productivity of our doctors, from seeing 16 patients/day in the past to today seeing more than 20 patients/day.",
         img: pic3,
       },
     ];
  return (
    <div className="max-w-screen-2xl mx-auto px-16 py-5">
      <div className="flex justify-center">
        <h1 className="font-poppins text-[#F17E2D] text-base font-normal">
        Integrated Patient Care. State-of-the-art Facilities. Digital Infrastructure.
        </h1>
      </div>

      <div className="flex justify-center items-center py-4">
        <h1 className="font-poppins font-medium text-[40px] text-[#2E3E4D] whitespace-nowrap">
        What sets us apart? 
        </h1>
      </div>

      <div className="flex flex-col gap-16 pt-20">
        {array.map((item, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h1 className="font-poppins text-[#2E3E4D] text-[50px] font-light">
                {item.name}
              </h1>
              <p className="py-5 max-w-[600px] mx-auto md:mx-0 font-poppins font-normal text-[20px] text-[#2E3E4D]/70">
                {item.cont}
              </p>
            </div>

            {/* Image Section */}
            <div className={`w-full md:w-1/2 flex ${idx % 2 !==0 ? "justify-start":"justify-end"}`}>
              <img src={item.img} alt={item.name} className="w-full max-w-md md:max-w-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
        
      
  )
}

export default Whatsets
