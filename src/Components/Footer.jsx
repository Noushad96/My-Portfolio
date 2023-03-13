import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";

import { instagram } from "../assets";
import { whatsapp } from "../assets";

const Footer = () => {
  return (
    <div className="bg-gray-200 mt-10 py-10" id="footer">
      <div className="flex justify-center gap-4 ">
        <div className="flex gap-10">
          <a href="https://linkedin.com/in/noushad-ansari" target={"_blank"}>
            <AiFillLinkedin className="text-[40px] text-blue-700" />
          </a>
          <a href="">
            <img src={instagram} className="w-[40px]" alt="instagram" />
          </a>
          <AiOutlineMail className="text-[40px]" />
          <a href="https://github.com/Noushad96" target={"_blank"}>
            <AiFillGithub className="text-[40px]" />
          </a>
        </div>
      </div>
      <h1 className="text-black text-[18px] sm:text-[25px] mt-4 text-center">
        Copyright by
        <span className="text-red-600 font-bold "> Noushad Ansari</span>
      </h1>

      <div className="whatsapp w-[25%] sm:w-[10%] bottom-[10px] right-1 fixed">
        <a
          href="https://wa.me/919717466958?text=I'm%20interested%20in%20your%20web%20design%20Service%20"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="whatsapp"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
