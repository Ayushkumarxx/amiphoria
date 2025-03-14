import React from "react";
import { Navbar } from "../components/index";
import {
  actress,
  circle,
  event1,
  event2,
  event3,
  event4,
  fest,
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
import { GoArrowUpRight } from "react-icons/go";

const EventCard = ({ img, date, title }) => {
  return (
    <div className="flex flex-col w-[280px] h-[400px] overflow-hidden bg-[#EF64FE] shadow-[0_0_0_2px_#EF64FE] ">
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

const TicketCard = ({ eventTitle, eventTitle2 }) => {
  return (
    <div className="flex p-2 h-[90%] w-[30%] bg-[#EFDBD0] shadow-[0_0_0_2px_rgba(0,0,0,1),-8px_-8px_0_0_rgba(0,0,0,1)] shrink-0">
      {/* Vertical Text */}
      <div className="text-[12px] bg-black text-white w-[20px] h-full flex items-center justify-center writing-mode-vertical-rl">
        JOIN THE FUN NOW
      </div>

      {/* Event Details */}
      <div className="flex flex-col gap-[10px] p-4 w-[90%]">
        <div className="text-[18px] font-semibold">Thrusday-Friday</div>
        <div className="text-[32px] leading-[20px]">
          <span className="text-outline font-sans">{eventTitle}</span>{" "}
          {eventTitle2}
        </div>
        <div className="text-[12px] font-semibold mt-[16px]">
          Amity University Jharkhand
        </div>

        <div className="w-full h-[2px] bg-black"></div>

        <div className="flex w-full justify-between items-center text-[12px]">
          <div>HEC CORE PUNDAG RANCHI</div>
          <div>XXIXIX</div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#8B1E1E] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Props</li>
            <li>Interiors</li>
            <li>Themed Decors</li>
            <li>Caravans</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <p className="text-sm">+91-9844031239</p>
          <p className="text-sm">srikanth@filmdecors.com</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>
          <p className="text-sm">
            #3, Survey No. 15/B, Maduravoyal <br />
            Porur Bye Pass Service Road, <br />
            Vanagaram, Chennai - 600095
          </p>
        </div>

        {/* Opening Time */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Opening Time</h3>
          <p className="text-sm">
            <span className="font-semibold">Mon-Sat:</span> 8:00 am - 7:00 pm
          </p>
          <p className="text-sm">
            <span className="font-semibold">Sun:</span> 8:00 am - 2:00 pm
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Film Decors Co.</h3>
          <p className="text-sm">
            Filmdecors are the major prop suppliers for over 22 years to the
            Film, Television, Theatre, and Event industry in South India.
          </p>

          {/* Social Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="border border-white px-3 py-1 rounded-full text-sm">
              Instagram
            </button>
            <button className="border border-white px-3 py-1 rounded-full text-sm">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TicketCard2 = ({ img }) => {
  return (
    <div className="h-full w-[30%] p-8">
      <div className="w-full h-[75%]">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-[18px] font-bold w-[80%] leading-5">
          DJ NIGHT PASS <br />
          <span className="text-[12px] font-semibold ">
            Join any event of your choice to get the DJ Night Pass
          </span>
        </div>

        <div className="w-[50px] h-[50px] rounded-[100px] border-[2px] border-black flex justify-center items-center text-black text-[42px]">
          <GoArrowUpRight />{" "}
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <Navbar />

      {/* hero section */}
      <div className="home h-[665px] relative max-w-[1350px] mt-4 px-[10px] mx-auto">
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
              showcase your skills, and make memories that last a lifetime.{" "}
              <br />
              #Amiphoria2025 #FeelTheVibe
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
       {/* divider section */}
       <div className="w-full h-[850px]  flex flex-col justify-between py-20">
        <div className="w-[110vw] h-[30%] flex justify-between items-center gap-[40px] overflow-hidden -rotate-2">
          <TicketCard eventTitle={"DJ"} eventTitle2={"Night"} />
          <TicketCard eventTitle={"TECH"} eventTitle2={"FEST"} />
          <TicketCard eventTitle={"DJ"} eventTitle2={"Night"} />
          <TicketCard eventTitle={"ACEDMICS"} eventTitle2={"LIGHT"} />
        </div>

        <div className="w-[110vw] h-[30%] flex justify-between items-center gap-[40px] overflow-hidden -rotate-2 -translate-x-10 ">
          <TicketCard eventTitle={"CULTURAL"} eventTitle2={"EVENT"} />
          <TicketCard eventTitle={"SINGER"} eventTitle2={"DAY"} />
          <TicketCard eventTitle={"DANCE"} eventTitle2={"OFF"} />
          <TicketCard eventTitle={"DJ"} eventTitle2={"Night"} />
        </div>

        <div className="w-[110vw] h-[30%] flex justify-between items-center gap-[40px] overflow-hidden -rotate-2 -translate-x-30">
          <TicketCard eventTitle={"OPEN"} eventTitle2={"MIC"} />
          <TicketCard eventTitle={"SPORT"} eventTitle2={"EVENT"} />
          <TicketCard eventTitle={"ESPORT"} eventTitle2={"TEAM"} />
          <TicketCard eventTitle={"DJ"} eventTitle2={"Night"} />
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

      <div className="bg-[#F2ECE7] py-20">
        <div className="border-[2px] border-black h-[450px] w-full flex ">
          <TicketCard2 img={fest} />
          <div className="h-full w-[40%] p-6 flex flex-col items-center  border-r-[2px] border-r-black border-l-[2px] border-l-black">
            <h2 className="text-[42px] font-bold">JOIN US</h2>
            <p className="text-[24px] font-semibold text-center ">
              19 Mar - 2025 <br />
              RANCHI / <br />
              JHARKHAND
            </p>
            <img src={heart} alt="" className="h-[100px] mt-[20px]" />

            <p className="text-[14px] font-semibold text-center mt-[20px]">
              This event is open to all <br />
              students across india
            </p>
          </div>
          <TicketCard2 img={event1} />
        </div>

        <div className="text-[152px] font-bold text-center mt-[20px]">
          AMIPHORIA 2K25
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
