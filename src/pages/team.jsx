import React from "react";
import { Navbar } from "../components/index";
import { IoSparklesSharp } from "react-icons/io5";
import { team1, team2, team3, team4 } from "../assets/index";
const Team = () => {
  return (
    <div className="bg-[#F2ECE7] ">
      <Navbar />

      <div className="max-w-[1250px] mt-[50px] mx-auto flex justify-between items-center">
        <div>
          <div className="text-[142px] leading-none mb-2 font-bold">MEET</div>
          <div className="border-[4px] border-dashed h-[100px] flex justify-around  items-center p-2.5 text-[32px] ">
            Chill <IoSparklesSharp /> Guyz
          </div>
        </div>
        <div>
          <div className="border-[4px] border-dashed h-[100px] flex justify-around  items-center p-2.5 text-[32px] mb-2 ">
            Unique <IoSparklesSharp /> Talented <IoSparklesSharp /> Perfect
          </div>
          <div className="text-[142px] font-bold leading-none">OUR TEAM</div>
        </div>
      </div>

      <div className="max-w-[1250px] mt-[50px] mx-auto pb-10">
        <div className="w-full h-[2px] bg-black mt-[20px]"></div>
        <div>
          Hey we are students of amity university jharkhand who love to code.
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col w-[280px] h-[350px] overflow-hidden ">
            <img
              src={team1}
              alt=""
              className="w-full h-[80%] object-cover grayscale-100"
            />
            <div className="w-full flex flex-col p-2 justify-between items-end">
              <p className="text-[16px] font-bold text-black mt-2">coder</p>
              <p className="text-[22px] font-bold text-black">Ayush</p>
            </div>
          </div>
          <div className="flex flex-col w-[280px] h-[350px] overflow-hidden ">
            <img
              src={team2}
              alt=""
              className="w-full h-[80%] object-cover grayscale-100"
            />
            <div className="w-full flex flex-col p-2 justify-between items-end">
              <p className="text-[16px] font-bold text-black mt-2">presenter</p>
              <p className="text-[22px] font-bold text-black">Praveer</p>
            </div>
          </div>
          <div className="flex flex-col w-[280px] h-[350px] overflow-hidden ">
            <img
              src={team3}
              alt=""
              className="w-full h-[80%] object-cover grayscale-100"
            />
            <div className="w-full flex flex-col p-2 justify-between items-end">
              <p className="text-[16px] font-bold text-black mt-2">designer</p>
              <p className="text-[22px] font-bold text-black">Aditya</p>
            </div>
          </div>
          <div className="flex flex-col w-[280px] h-[350px] overflow-hidden ">
            <img
              src={team4}
              alt=""
              className="w-full h-[80%] object-cover grayscale-100"
            />
            <div className="w-full flex flex-col p-2 justify-between items-end">
              <p className="text-[16px] font-bold text-black mt-2">supporter</p>
              <p className="text-[22px] font-bold text-black">Rishabh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
