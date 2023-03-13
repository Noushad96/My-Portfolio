import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between p-[10px] px-3 md:px-20">
       <div>
        <h1 className="text-[25px]">
          Portfo<span className="text-red-600 font-bold">lio.</span>
        </h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex  flex-row md:flex">
          <li className="mr-[25px] cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home">Home</a>
          </li>
          <li className="mr-[25px] cursor-pointer hover:scale-110">
            <a href="/#about">About Me</a>
          </li>
          <li className="mr-[25px] cursor-pointer hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="mr-[25px] cursor-pointer hover:scale-110">
            <a href="/#contact">Contact US</a>
          </li>
        </ul>
      </div>

      <div className="md:hidden lg:hidden">
        {!toggle ? (
          <AiOutlineMenu onClick={() => setToggle(true)} />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(false)}
            className="float-right"
          />
        )}

        {toggle ? (
          <ul className="flex flex-col mt-8 text-black font-medium bg-gray-300 p-4 rounded   absolute right-[15px]">
            <li className="mr-4 cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
              <a href="/#home">Home</a>
            </li>
            <li className="mr-4 cursor-pointer hover:scale-110">
              <a href="/#about">About Me</a>
            </li>
            <li className="mr-4 cursor-pointer hover:scale-110">
              <a href="/#skills">Skills</a>
            </li>
            <li className="mr-4 cursor-pointer hover:scale-110">
              <a href="/#contact">Contact US</a>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
