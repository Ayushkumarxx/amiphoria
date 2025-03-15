import React from "react";
import { logo } from "../assets/index";
const Navbar = () => {
  return (
    <nav className="flex max-w-[1350px] mx-auto justify-between items-center  p-[10px] h-[75px]  ">
      <div className="h-full w-[120px]">
        <img src={logo} alt="" className="h-full w-full object-contain brightness-0" />
      </div>
      <div className="flex gap-[50px] text-[18px] font-semibold">
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Events</a>
        </div>
        <div>
          <a href="">Sponsars </a>
        </div>
        <div>
          <a href="">Team</a>
        </div>
        <div>
          <a href="">Updates</a>
        </div>
     
      </div>
      <div>
        <button className="bg-[#A9EB09] text-black py-[10px] px-[40px] rounded-[8px] font-semibold">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
