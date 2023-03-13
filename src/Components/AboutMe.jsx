import React from "react";
import "../assets";
import { Program, UI, frontEnd } from "../assets";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" bg-white p-[10px] md:px-20 ">
      <h2 className="text-[50px] font-bold text-center">
        About <span className="text-red-600">Me</span>
      </h2>
      <h2 className="mt-7 text-center md:px-28">
        I am software developer, Willing to work in IT industry as Front-end
        developer. Interested in UI Development, Front-end Development.
      </h2>
      <div
        className="flex flex-col sm:flex-row md:flex-row mt-[5px] "
        data-aos={"fade-up"}
        data-aos-duration="1000"
      >
        <div
          className=" flex w-full items-center justify-center flex-col m-2
                group md:hover:bg-red-600 rounded-lg py-2"
        >
          <img
            src={Program}
            alt="program"
            className="w-[230px] rounded-lg h-[170px] object-cover"
          />
          <h1 className="font-bold md:group-hover:text-white">
            Javascript Developer
          </h1>
          <h1 className="text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7">
            I'm a Javascript Developer
          </h1>
        </div>
        <div
          className=" flex w-full items-center justify-center flex-col m-2
                group md:hover:bg-red-600 rounded-lg py-2"
        >
          <img
            src={frontEnd}
            alt="fronEnd"
            className="w-[230px] rounded-lg h-[170px] object-cover"
          />
          <h1 className="font-bold md:group-hover:text-white">
            FrontEnd Developer
          </h1>
          <h1 className="text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7">
            I'm a FrontEnd Developer
          </h1>
        </div>
        <div
          className=" flex   w-full items-center justify-center flex-col m-2
                group md:hover:bg-red-600 rounded-lg py-2"
        >
          <img
            src={UI}
            alt="UI"
            className="w-[230px] rounded-lg h-[170px] object-cover"
          />
          <h1 className="font-bold md:group-hover:text-white">UI Developer</h1>
          <h1 className="text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7">
            I'm a UI Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
