import React from "react";
import { Navbar } from "../components/index";
import {
  actress,
  circle,
  event1,
  event2,
  event3,
  event4,
  heart,
  king,
  music,
  plane,
  sparkle,
  spon1,
  spon2,
  spon3,
  spon4,
  spon5,
} from "../assets/index";

import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const EventCard = ({ img, date, title }) => {
  return (
    <div className="flex flex-col w-[280px] h-[400px] overflow-hidden bg-[#EF64FE] shadow-[0_0_0_2px_#EF64FE]">
      <img
        src={img}
        alt=""
        className="w-full h-[85%] object-cover grayscale-100"
      />
      <div className="w-full flex flex-col p-4 justify-between">
        <p className="text-[16px] font-bold text-zinc-200 mt-4">{date}</p>
        <p className="text-[22px] font-bold text-[#fff]">{title}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />

      {/* hero section */}
      <div className="home h-[90vh] relative max-w-[1350px] mt-4 px-[10px] mx-auto">
        <div className="h-[600px] absolute right-[75px] bottom-[0px]">
          <img
            src={actress}
            alt="actress"
            className="w-full h-full object-contain grayscale-100"
          />
        </div>

        <div className="nt-big-text flex justify-between items-center   ">
          <div className="text-[162px] font-extrabold relative">
            Amiphoria{" "}
            <span className="absolute text-[24px] left-[85px] top-[50px]">
              Mar 19-21/25
            </span>
          </div>
          <div className="text-[162px] font-extrabold">2K24</div>
        </div>

        <div className="scoialNText flex justify-between items-center">
          <div className="w-[50%]">
            <p>
              Get ready for an electrifying blend of music, dance, fashion, and
              talent at Amity’s biggest cultural fest! With thrilling
              competitions, mesmerizing performances, and endless fun, Amiphoria
              is where passion meets celebration. Unleash your creativity,
              showcase your skills, and make memories that last a lifetime. <br />#Amiphoria2025
              #FeelTheVibe
            </p>

            <div className="nt-buttons flex gap-2 mt-6">
              <button className="bg-[#A9EB09] text-black py-[10px] px-[40px] rounded-[8px] font-semibold">
                Register Now
              </button>
              <button className="bg-white text-black py-[10px] px-[40px] rounded-[8px] font-semibold">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <FaInstagram className="text-3xl" />{" "}
            </div>
            <div>
              {" "}
              <FaYoutube className="text-3xl" />
            </div>
            <div>
              {" "}
              <FaXTwitter className="text-3xl" />
            </div>
          </div>
        </div>

        {/* <div className="nt-divider w-[80%] h-[52px] bg-black mt-6 rounded-[12px] text-zinc-400 flex  items-center px-[15px] text-[18px]">
          Amiphoria 2025 – Where Energy Meets Euphoria!" 🎶🔥
        </div> */}

        <div className="sponsar w-[70%] flex justify-between items-center mt-14 ">
          <img src={spon1} alt="" className="spon_img" />
          <img src={spon2} alt="" className="spon_img" />
          <img src={spon3} alt="" className="spon_img" />
          <img src={spon4} alt="" className="spon_img" />
          <img src={spon5} alt="" className="spon_img" />
        </div>
      </div>

      {/* what is amiphoria  */}

      <div className="nt-whatfor w-full h-[700px] flex flex-col justify-center items-center bg-[#B4FF52] text-center">
        <div className="text-[18px] font-bold capitalize ">
          what is amiphoria?
        </div>
        <div className="mt-2 text-[40px] font-extrabold max-w-[900px] relative">
          Amiphoria 2025 is Amity’s grand cultural fest{" "}
          <span className="text-[#EF64FE] ">featuring </span>music, dance,
          competitions, and{" "}
          <span className="text-[#EF64FE] ">unforgettable</span> experiences.
          <img
            src={plane}
            alt=""
            className="absolute top-[-100px] right-[-100px] w-[120px]"
          />
          <img
            src={heart}
            alt=""
            className="absolute top-[-50px] left-[-80px] w-[120px] opacity-60 rotate-[-30deg]"
          />
          <img
            src={music}
            alt=""
            className="absolute bottom-[-100px] right-[0px] w-[120px] opacity-60 rotate-[10deg] "
          />
        </div>
      </div>
       {/* events section */}

       <div className="nt-events  w-full bg-[#151515] pt-[100px] pb-[50px] flex flex-col items-center ">
        <p className="text-[16px] font-bold text-[#fff]">Amiphoria Events </p>
        <h2 className="text-[62px] font-extrabold text-[#fff] mt-2">
          Events We <span className="text-[#EF64FE]">Organize</span>
        </h2>

        <div className="flex justify-between mt-6 w-[80%]">
          <EventCard
            img={event1}
            date="19 Mar 2025"
            title="Cultural Festival"
          />
          <EventCard img={event2} date="19 Mar 2025" title="Acedemic Bets" />
          <EventCard img={event3} date="20 Mar 2025" title="Sports Disk" />
          <EventCard img={event4} date="21 Mar 2025" title="Tech Fest" />
        </div>

        <div className="w-[120vw] h-[60px] bg-[#EF64FE] mt-20 flex items-center justify-between rotate-2  -translate-x-10 origin-center">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="flex items-center gap-[30px]">
              <div className="text-[24px] font-bold text-[#fff]">Join</div>
              <img src={sparkle} alt="" className="w-[40px]" />
            </div>
          ))}
        </div>
        <div className="w-[120vw] h-[60px] bg-[#A9EB09] mt-4 flex items-center justify-between -rotate-4 origin-left translate-x-10">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="flex items-center gap-[30px]">
              <div className="text-[24px] font-bold text-[#fff]">Fast</div>
              <img src={sparkle} alt="" className="w-[40px] " />
            </div>
          ))}
        </div>
      </div>

      {/* dates section */}

      <div className="nt-dates flex justify-between py-[150px] max-w-[1050px] mx-auto h-[700px]">
        <div className="w-[50%] flex flex-col justify-between">
          <div className="text-[80px] font-extrabold relative">
            19 Mar
            <img
              src={circle}
              alt=""
              className="absolute top-[-250px] left-[-100px] h-[600px]"
            />
          </div>

          <div className="text-[22px] font-bold relative">
            At Amity <br />
            University Jharkhand
            <img
              src={king}
              alt=""
              className="absolute top-[-50px] left-[-100px] h-[50px] rotate-[-30deg]"
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-between items-end text-right">
          <div className="text-[18px] font-bold relative">
            Hec core area, near railway crossing, pundag , <br />
            ranchi , jharkhand 834001
            <img
              src={sparkle}
              alt=""
              className="absolute top-[-50px] right-[-100px] h-[50px] rotate-[30deg]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[18px] font-bold">follow us on</p>

            <div className="flex gap-6">
              <div className="text-[18px] text-zinc-900 p-[8px] rounded-[100px] bg-gray-200">
                <FaInstagram />{" "}
              </div>
              <div className="text-[18px] text-zinc-900 p-[8px] rounded-[100px] bg-gray-200">
                <FaXTwitter />{" "}
              </div>
              <div className="text-[18px] text-zinc-900 p-[8px] rounded-[100px] bg-gray-200">
                <FaYoutube />{" "}
              </div>
              <div className="text-[18px] text-zinc-900 p-[8px] rounded-[100px] bg-gray-200">
                <FaFacebook />{" "}
              </div>
              <div className="text-[18px] text-zinc-900 p-[8px] rounded-[100px] bg-gray-200">
                <FaLinkedin />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
