import React from "react";
import { Navbar } from "../components/index";
import { heart, spon1, spon2, spon3, spon4, spon5 } from "../assets";

const LogoDiv = ({ spon }) => {
  return (
    <div className="w-[200px] h-[150px] rounded-[8px] overflow-hidden bg-[#E3DBD7]">
      <img
        src={spon}
        alt=""
        className="mix-blend-multiply w-full h-full object-contain"
      />
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="bg-[#F2ECE7]">
      <Navbar />
      <div className="flex h-[90vh] max-w-[1350px] mx-auto   ">
        {/* Left Fixed Section */}
        <div className="w-1/2 h-full overflow-y-hidden p-4 flex ">
          <div className="flex w-[20%] flex-col justify-around items-start ">
            <div className="h-[80%] w-0.5 bg-[#A9EB09]">
            </div>
            <img src={heart} alt="" className="w-[30px] " />

          </div>
          <div className="text-7xl font-extrabold leading-normal">
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2 className="text-[#A9EB09]">Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
            <h2>Sponsors</h2>
          </div>
        </div>

        {/* Right Scrollable Section */}
        <div className="w-1/2 h-full overflow-y-auto py-8 px-4 scrollbar-hidden">
          <h2 className="text-[18px] font-bold">Gold Sponsors</h2>

          <div className="flex gap-4 flex-wrap mt-2">
            <LogoDiv spon={spon1} />
            <LogoDiv spon={spon2} />
            <LogoDiv spon={spon3} />
            <LogoDiv spon={spon4} />
            <LogoDiv spon={spon5} />
          </div>

          <h2 className="text-[18px] font-bold mt-[40px]">Silver Sponsors</h2>

          <div className="flex gap-4 flex-wrap mt-2">
            <LogoDiv spon={spon1} />
            <LogoDiv spon={spon2} />
            <LogoDiv spon={spon3} />
            <LogoDiv spon={spon4} />
            <LogoDiv spon={spon5} />
          </div>
          <h2 className="text-[18px] font-bold mt-[40px]">Bronze Sponsors</h2>

          <div className="flex gap-4 flex-wrap mt-2">
            <LogoDiv spon={spon1} />
            <LogoDiv spon={spon2} />
            <LogoDiv spon={spon3} />
            <LogoDiv spon={spon4} />
            <LogoDiv spon={spon5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
