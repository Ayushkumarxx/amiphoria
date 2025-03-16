import React from "react";
import { Navbar } from "../components/index";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
const Update = () => {
  return (
    <section className="w-full h-screen max-md:h-auto bg-[#EC4B1B]">
      <Navbar />
      {/* main content */}

      <div className="max-w-[1350px] mx-auto py-[10px] px-[10px] h-[90vh] max-md:h-auto flex max-md:flex-col ">
        {/* first section */}
        <div className="w-[50%] max-md:w-full h-full  flex flex-col py-14 justify-between">
          <div className="text-[112px] max-md:text-[50px] underline underline-offset-[32px] max-md:underline-offset-[16px] ">
            Latest
          </div>

          <div className="text-[112px] max-md:text-[50px]  underline underline-offset-[32px] max-md:underline-offset-[16px] ">
            Updates
          </div>
          <div className="text-[112px] max-md:text-[50px]  underline underline-offset-[32px] max-md:underline-offset-[16px] ">
            Amiphoria
          </div>
        </div>

       {/* second section  */}
        <div className="w-[50%] max-md:w-full h-full  flex flex-col py-14 px-[10%] max-md:px-[0%] ">
          <div className="text-[18px] font-semibold  ">
            amiphoria@amity.rnc.in
          </div>

          <div className="flex gap-5 mt-[30px]">
            <div className="flex items-center gap-1 text-[18px]  w-[150px] max-md:w-[120px]">
              <FaFacebook /> Facebook
            </div>
            <div className="flex items-center gap-1 text-[18px] w-[150px] max-md:w-[120px]">
              <FaInstagram /> Instagram
            </div>
          </div>
          <div className="flex gap-5 mt-[10px]">
            <div className="flex items-center gap-1 text-[18px] w-[150px] max-md:w-[120px]">
              {" "}
              <FaLinkedin /> Linkedin
            </div>
            <div className="flex items-center gap-1 text-[18px] w-[150px] max-md:w-[100px]">
              <FaYoutube /> Youtube
            </div>
          </div>
          <div className="w-full h-[2px] bg-black mt-[20px]"></div>

          <div className="text-[72px] max-md:text-[36px] font-semibold mt-[20px] text-orange-200  ">
            2K25
          </div>

          <div className="text-[18px] max-md:text-[14px] font-normal mt-[10px]  ">
            Stay updated with the latest happenings at Amiphoria! From exciting
            event announcements to important updates, this page keeps you
            informed about everything new. Whether it's upcoming performances,
            special collaborations, or feature enhancements, you’ll find all the
            details right here. Keep an eye out for fresh updates and be part of
            the excitement!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
