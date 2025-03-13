import React from "react";

function Contactus() {
  const form = [
    { label: "Your Name", type: "text", placeholder: ["Your name"] },
    {
      label: "Your Email Address",
      type: "text",
      placeholder: ["Your Email Address"],
    },
    {
      label: "Phone No.",
      type: "tel",
      placeholder: ["Phone No."],
    },
    { label: "Your Message", type: "textarea", placeholder: ["Your Message"] },
  ];

  return (
    <div className=" w-full mx-auto px-20 bg-[#2E3E4D] border-6 border-white py-16">
      <div>
        <h1 className="font-poppins font-normal text-2xl  text-[#F17E2D]">
          Contact us{" "}
        </h1>
      </div>
      <div>
        <h1 className="font-poppins font-medium text-[40px] text-white">
          Interested in discussing a transition?
        </h1>
      </div>
      <div className="flex gap-36">
        <div className="left pt-7">
          <div className="max-w-[722px] ">
            <p className="font-poppins font-normal text-2xl  text-white/70">
              Contact VIPP to join a growing healthcare organization, positioned
              to become leaders in comprehensive diabetic lower extremity care.
              VIPP offers tailored options and proven management solutions to
              achieve your goals.{" "}
            </p>
          </div>
          <div className="pt-14 space-y-2">
            <h1 className="font-poppins font-normal text-2xl  text-white/70">
              Amol Gupta
            </h1>
            <h1 className="font-poppins font-normal text-2xl  text-white/70">
              Executive Director{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-normal text-2xl  text-white/70 pt-11">
            661.377.2841
          </h1>
          <h1 className="font-poppins font-normal text-2xl  text-[#F17E2D] pt-11">
            amol@vippllc.com
          </h1>
        </div>

        <div className="right pt-7">
          <form className="space-y-6">
            {form.map((field, index) => (
              <div key={index}>
                <label className="block text-white font-medium pb-3">
                  {field.label}
                  <span className="text-[#FF4B4B]"> *</span>
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    placeholder={field.placeholder[0]}
                    className="w-[400px] h-[100px] p-3 border bg-white/10 border-white/70 focus:outline-none text-white font-poppins font-normal text-base resize-none"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder[0]}
                    className="w-[400px] p-3 border bg-white/10 border-white/70 focus:outline-none text-white font-poppins font-normal text-base"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-[150px] bg-[#F17E2D] text-white py-3 font-poppins font-semibold text-"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
