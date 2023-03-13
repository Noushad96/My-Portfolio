import React from "react";
import { phone, contactusbg } from "../assets";

import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center p-[10px] mt-[3rem] md:mt-40 "
    >
      <div className="flex flex-row  justify-center items-center text-[30px] sm:text-[50px] font-bold">
        Contact <span className="text-red-600 ml-3"> Us</span>
        <img
          src={phone}
          alt="phone"
          className=" w-[80px] sm:w-[100px] ml-4 animate-bounce"
        />
      </div>
      <div className=" grid grid-cols-1 gap-[20px] md:gap[10px] md:grid-cols-2 justify-evenly px-10 md:px-20">
        {/* contact image */}
        <div
          className="ContactImg flex justify-center items-center mx-0 sm:mx-10"
          data-aos={"zoom-out-down"}
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={contactusbg}
            alt="contact US "
            className="w-[200px] sm:w-[300px] md:w-[350px]"
          />
        </div>

        <div
          className="ContactForm w-full "
          data-aos={"zoom-out-down"}
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="flex flex-col">
            <label className="font-bold">Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="border-[1.5px] px-2 border-black-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Number:</label>
            <input
              type="number"
              placeholder="Number"
              className="border-[1.5px] px-2 border-black-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="border-[1.5px] px-2 border-black-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Message:</label>
            <textarea
              type="text"
              placeholder="Type your message here"
              className="border-[1.5px] px-2 border-black-300 rounded-md"
            />
          </div>
          <button className="transition-all ease-in-out hover:scale-110 bg-red-500 flex flex-row items-center justify-center  py-1 mt-5 text-white  rounded-md  w-full font-bold text-[20px]">
            Submit <AiOutlineSend className="ml-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
