import React, { useEffect, useState } from "react";
import { robo } from "../assets";
import { portfolio } from "../Constants";


const MeraPortfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type) => {
    if (type === "All") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
      console.log(result);
    }
  };

  return (
    <div className="mt-[3rem] flex justify-center flex-col p-[10px]">
      <div
        id="headingPortfolio"
        className="flex flex-col sm:flex-row justify-center items-center text-[25px] sm:text-[30px] md:text-[40px] font-bold  px-6 md:px-0 "
      >
        My Creative <span className="text-red-600 ml-3"> Portfolio</span>
        <img
          src={robo}
          alt="portfolio"
          className="animate-bounce w-[70px] mt-[-80px] sm:mt-[0px] ml-[250px] sm:ml-3 "
        />
      </div>

      <div
        id="contentPortfolioButton"
        className="flex flex-row flex-wrap gap-10 justify-center"
      >
        <button
          onClick={() => filterPortfolio("All")}
          className="border-2 border-red-600 text-red-600 focus:text-white active:bg-red-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-red-600 focus:ring "
        >
          All
        </button>
        <button
          onClick={() => filterPortfolio("html/css")}
          className="border-2 border-red-600 text-red-600 focus:text-white active:bg-red-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-red-600 focus:ring "
        >
          HTML/CSS
        </button>
        <button
          onClick={() => filterPortfolio("js")}
          className="border-2 border-red-600 text-red-600 focus:text-white active:bg-red-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-red-600 focus:ring "
        >
          Javascript
        </button>
        <button
          onClick={() => filterPortfolio("react")}
          className="border-2 border-red-600 text-red-600 focus:text-white active:bg-red-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-red-600 focus:ring "
        >
          React
        </button>
      </div>

      {/* all my portfolio  */}
      <div
        className="grid grid-cols-1 items-center content-center sm:grid-cols-2
         md:grid-cols-3 lg:grid-cols-4 md:px-20 lg:px-32 p-4"
        data-aos={"zoom-in-up"}
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {portfolioList.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110"
          >
            <a href={item.webUrl} target={"_blank"} rel="noreferrer">
              <img
                src={item.imageUrl}
                className="h-[180px]  rounded-lg"
                alt="myurl"
              />
            </a>
            <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center  font-bold">
              {item.title}
            </h1>
            <h1 className="text-[12px] text-gray-500 px-6 pb-3">{item.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeraPortfolio;
