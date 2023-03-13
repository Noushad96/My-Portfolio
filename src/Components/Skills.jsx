import React from "react";
import { skill, tailwind } from "../assets";
import { react, python, html, css, js, github, vscode } from "../assets";

const Skills = () => {
  return (
    <div className="mt-[3rem] md:mt-[5rem] " id="skills">
      <div className="flex flex-row justify-center items-center" id="skillImg">
        <img src={skill} alt="skill" className="w-[80px] animate-bounce" />
        <h1 className="text-[30px] font-bold tracking-[2px]">
          Skill<span className="text-red-600">s</span>
        </h1>
      </div>
      <div id="skillList">
        <div className="flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 ">
          <div
            className="grid grid-cols-2 justify-items-center sm:grid-cols-4 md:grid-cols-4 gap-8  items-center"
            data-aos={"zoom-out"}
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div
              className="w-[100px] sm:w-[120px] md:w-[150px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={html} className="w-[130px]" alt="html" />
            </div>
            <div
              className="w-[100px] sm:w-[120px] md:w-[150px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={css} className="w-[130px]" alt="css" />
            </div>
            <div
              className="w-[100px] sm:w-[120px] md:w-[150px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={js} className="w-[130px]" alt="js" />
            </div>
            <div
              className="w-[100px] sm:w-[120px] md:w-[150x] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={react} className="w-[130px]" alt="react" />
            </div>
            <div
              className="w-[100px] sm:w-[120px] md:w-[150px]5transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={tailwind} className="w-[130px]" alt="tailwind" />
            </div>
            <div
              className="w-[100px] sm:w-[120px] md:w-[150px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={python} className="w-[130px]" alt="python" />
            </div>

            <div
              className="w-[100px] sm:w-[120px] md:w-[150px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={github} className="w-[130px]" alt="github" />
            </div>
            <div
              className="w-[100px] sm:w-[120px] md:w-[150px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
               p-3 rounded-full"
            >
              <img src={vscode} className="w-[130px]" alt="vscode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
