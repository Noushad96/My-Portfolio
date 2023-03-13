import React from "react";
import { homeImage } from "../assets";
import { resume } from "../assets";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      id="home"
      className="mt-7 px-3 items-center p-[10px] md:px-20 flex flex-col md:flex-row "
    >
      <div>
        <h1 className="font-bold text-[30px] sm:text-[40px]">Hello,</h1>
        <h1 className="font-bold text-[25px] sm:text-[30px]">
          I am
          <span className="text-red-600 ">
            <TypeAnimation
              sequence={[
                "Noushad Ansari",
                1000,
                "FrontEnd Developer",
                1000,
                "UI Developer",
                1000,
              ]}
              //  Replacing previous Text
              // style={{ fontSize: "1.3em" }}
              // wrapper="h2"
              repeat={Infinity}
              className="text-[25px] sm:text-[30px]"
            />
          </span>
        </h1>
        <h1 className="text-gray-500 mt-3">
          I am software developer, Willing to work in IT industry as Front-end
          developer. Interested in UI Development, Front-end Development.
        </h1>
        <button className=" mt-3 bg-red-600 text-white font-bold rounded-full p-1 px-3 transition-all ease-in-out hover:scale-110">
          <a href={resume} download>
            Resume
          </a>
        </button>
      </div>
      <img
        src={homeImage}
        alt="Home"
        className="w-[300px] lg:w-[400px] md:w-[350px]"
      />
    </div>
  );
};

export default Home;
