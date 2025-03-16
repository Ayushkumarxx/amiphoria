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
import useNavigation from "../utils/navigation";
import Routes from "../utils/routes";

const EventCard = ({ img, date, title }) => {
  return (
    <div className="flex flex-col w-[280px] max-md:w-[80%] h-[400px] max-md:h-[300px] overflow-hidden bg-[#8B1E1E] shadow-[0_0_0_2px_#8B1E1E] ">
      <img
        src={img}
        alt=""
        className="w-full h-[85%] max-md:h-[65%] object-cover grayscale-100"
      />
      <div className="w-full flex flex-col p-4 justify-between">
        <p className="text-[16px] max-md:text-[14px] font-bold text-zinc-200 mt-4">
          {date}
        </p>
        <p className="text-[22px] max-md:text=[18px] font-bold text-[#fff]">
          {title}
        </p>
      </div>
    </div>
  );
};

const TicketCard = ({ eventTitle, eventTitle2 }) => {
  return (
    <div className="flex p-2 h-[90%] max-md:h-[80%] w-[30%] max-md:w-[250px] bg-[#EFDBD0] shadow-[0_0_0_2px_rgba(0,0,0,1),-8px_-8px_0_0_rgba(0,0,0,1)] shrink-0">
      {/* Vertical Text */}
      <div className="text-[12px] bg-black text-white w-[20px] h-full flex items-center justify-center writing-mode-vertical-rl">
        JOIN THE FUN NOW
      </div>

      {/* Event Details */}
      <div className="flex flex-col justify-between p-4 w-[90%]">
        <div className="text-[18px] max-md:text-[12px]   font-semibold">
          Thrusday-Friday
        </div>
        <div className="text-[32px] max-md:text-[24px] leading-[20px]">
          <span className="text-outline font-sans">{eventTitle}</span>{" "}
          {eventTitle2}
        </div>
        <div className="text-[12px] font-semibold mt-[16px] max-md:text-[10px]">
          Amity University Jharkhand
        </div>

        <div className="w-full h-[2px] bg-black"></div>

        <div className="flex w-full justify-between items-center text-[12px] max-md:text-[10px]">
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

const TicketCard2 = ({ img, h, w, hidden }) => {
  return (
    <div
      className={`p-8 ${hidden ? "max-md:hidden" : "md:hidden"}`}
      style={{ height: `${h}%`, width: `${w}%` }}
    >
      <div className="w-full h-[75%] relative overflow-hidden rounded-lg">
        <img
          src={img}
          alt="Ticket"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-[18px] font-bold w-[80%] leading-5">
          DJ NIGHT PASS <br />
          <span className="text-[12px] font-semibold">
            Join any event of your choice to get the DJ Night Pass
          </span>
        </div>

        <div className="w-[50px] h-[50px] rounded-full border-2 border-black flex justify-center items-center text-black text-[42px]">
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigateTo = useNavigation();
  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram" },
    // { icon: <FaXTwitter />, name: "Twitter" },
    { icon: <FaYoutube />, name: "YouTube" },
    { icon: <FaFacebook />, name: "Facebook" },
    { icon: <FaLinkedin />, name: "LinkedIn" },
  ];
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* hero section */}
      <div className="home h-[665px] max-md:h-auto max-md:pb-10 relative max-w-[1350px] mt-4 px-[10px] mx-auto ">
        {/* actress photo */}
        <div className="h-[600px] absolute right-[75px] bottom-[0px] max-md:hidden">
          <img
            src={actress}
            alt="actress"
            className="w-full h-full object-contain grayscale-100"
          />
        </div>
        {/* head text */}
        <div className="nt-big-text flex max-md:flex-col justify-between items-center max-md:items-start  ">
          <div className="text-[162px] max-md:text-[56px] font-extrabold relative ">
            Amiphoria{" "}
            <span className="absolute text-[24px] max-md:text-[12px] left-[15px] top-[0px]">
              Mar 19-21/25
            </span>
          </div>
          <div className="text-[162px] max-md:text-[56px] font-extrabold max-md:leading-none">
            2K25
          </div>
        </div>

        {/* details */}

        <div className="scoialNText flex justify-between items-center max-md:mt-5">
          <div className="w-[50%] max-md:w-[85%]">
            <p className="text-[18px] max-md:text-[14px] ">
              Get ready for an electrifying blend of music, dance, fashion, and
              talent at Amity’s biggest cultural fest! With thrilling
              competitions, mesmerizing performances, and endless fun, Amiphoria
              is where passion meets celebration. Unleash your creativity,
              showcase your skills, and make memories that last a lifetime.{" "}
              <br />
              #Amiphoria2025 #FeelTheVibe
            </p>

            <div className="nt-buttons flex gap-2 mt-6">
              <button className="bg-[#A9EB09] text-black py-[10px] max-md:py-[5px] px-[40px] max-md:px-[20px] max-md:text-[14px] rounded-[8px] font-semibold">
                Register Now
              </button>
              <button className="bg-white text-black py-[10px] max-md:py-[5px] px-[40px] max-md:px-[20px] max-md:text-[14px]  rounded-[8px] font-semibold">
                Download Brochure
              </button>
            </div>
          </div>

          {/* socials */}

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

        <div className="sponsar w-[70%] max-md:w-full flex justify-between items-center mt-14 ">
          <img src={spon1} alt="" className="spon_img" />
          <img src={spon2} alt="" className="spon_img" />
          <img src={spon3} alt="" className="spon_img" />
          <img src={spon4} alt="" className="spon_img" />
          <img src={spon5} alt="" className="spon_img" />
        </div>
      </div>
      {/* events section */}
      <div className="nt-events  w-full bg-[#151515] pt-[100px] pb-[50px] flex flex-col items-center  ">
        {/* heading */}
        <p className="text-[16px] font-bold text-[#fff] max-md:text-[12px] ">
          Amiphoria Events{" "}
        </p>

        {/* super head */}
        <h2 className="text-[62px] max-md:text-[32px] font-extrabold text-[#fff] mt-2">
          Events We <span className="text-[#EF64FE]">Organize</span>
        </h2>

        <div className="flex max-md:flex-col max-md:items-center max-md:gap-5 justify-between mt-6 w-[80%] max-md:w-full">
          <EventCard
            img={event1}
            date="19 Mar 2025"
            title="Cultural Festival"
          />
          <EventCard img={event2} date="19 Mar 2025" title="Acedemic Bets" />
          <EventCard img={event3} date="20 Mar 2025" title="Sports Disk" />
          <EventCard img={event4} date="21 Mar 2025" title="Tech Fest" />
        </div>

        {/* strips */}

        <div className="w-[120vw] h-[60px] max-md:h-[50px] bg-[#EF64FE] mt-20 flex items-center justify-between rotate-2  -translate-x-10 origin-center gap-[30px]">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="flex items-center gap-[30px]">
              <div className="text-[24px] max-md:text-[16px]  font-bold text-[#fff]">
                Join
              </div>
              <img src={sparkle} alt="" className="w-[40px] max-md:w-[25px]" />
            </div>
          ))}
        </div>
        <div className="w-[120vw] h-[60px]  max-md:h-[50px] bg-[#8B1E1E] mt-4 flex items-center justify-between -rotate-4 origin-left translate-x-10 gap-[30px]">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="flex items-center gap-[30px]">
              <div className="text-[24px] max-md:text-[16px] font-bold text-[#fff]">
                Fast
              </div>
              <img src={sparkle} alt="" className="w-[40px] max-md:w-[20px]" />
            </div>
          ))}
        </div>
      </div>

      {/* what is amiphoria  */}
      <div className="nt-whatfor w-full h-[700px] flex flex-col justify-center items-center bg-[#B4FF52] text-center p-2.5">
        {/* title */}
        <div className="text-[18px] max-md:text-[14px] font-bold capitalize ">
          what is amiphoria?
        </div>

        {/* desc */}
        <div className="mt-2 text-[40px] max-md:text-[24px] font-extrabold max-w-[900px] relative">
          Amiphoria 2025 is Amity’s grand cultural fest{" "}
          <span className="text-[#8B1E1E] ">featuring </span>music, dance,
          competitions, and{" "}
          <span className="text-[#8B1E1E] ">unforgettable</span> experiences.
          {/* images */}
          <img
            src={plane}
            alt=""
            className="absolute top-[-100px] right-[-100px] max-md:right-[10%] w-[120px] max-md:w-[80px] "
          />
          <img
            src={heart}
            alt=""
            className="absolute top-[-50px] left-[-80px] max-md:left-[-10%] w-[120px]  rotate-[-30deg] max-md:w-[80px]"
          />
          <img
            src={music}
            alt=""
            className="absolute bottom-[-100px] max-md:bottom-[-80px] right-[0px] max-md:right-[10%] w-[120px] rotate-[10deg] max-md:w-[60px]"
          />
        </div>
      </div>

      {/* dates section */}
      <div className="nt-dates flex justify-between py-[150px] max-w-[1050px] mx-auto h-[700px] ">
        {/* first */}
        <div className="w-[50%] flex flex-col justify-between p-2">
          <div className="text-[80px] max-md:text-[42px] font-extrabold relative">
            19 Mar
            <img
              src={circle}
              alt=""
              className="absolute top-[-250px] max-md:top-[-100px]  left-[-100px] max-md:left-[-10px] h-[600px] max-md:h-[250px] "
            />
          </div>

          <div className="text-[22px] max-md:text-[16px] font-bold relative">
            At Amity <br />
            University Jharkhand
            <img
              src={king}
              alt=""
              className="absolute top-[-50px] max-md:top-[-60px] left-[-100px] max-md:left-[-10px] h-[50px] rotate-[-30deg]"
            />
          </div>
        </div>

        {/* second */}
        <div className="w-[50%] flex flex-col justify-between items-end text-right p-2">
          <div className="text-[18px] max-md:text-[14px] font-bold relative">
            Hec core area, near railway crossing, pundag , <br />
            ranchi , jharkhand 834001
            <img
              src={sparkle}
              alt=""
              className="absolute top-[-50px] right-[-100px] max-md:right-[-10px] h-[50px] rotate-[30deg]"
            />
          </div>

          <div className="flex flex-col gap-4 ">
            <p className="text-[18px] max-md:text-[14px] font-bold">
              follow us on
            </p>

            <div className="flex gap-6 flex-wrap">
              {socialLinks.map(({ icon, name }, index) => (
                <div
                  key={index}
                  className="text-[18px] max-md:text-[16px] text-zinc-900 rounded-full bg-gray-200 flex items-center justify-center w-10 h-10 max-md:w-6 max-md:h-6"
                  title={name}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* divider section */}
      <div className="w-full h-[850px]  flex flex-col justify-between py-20  ">
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

        <div className="w-[110vw] h-[30%] flex justify-between items-center gap-[40px] overflow-hidden -rotate-2 -translate-x-30 max-md:-translate-x-0">
          <TicketCard eventTitle={"OPEN"} eventTitle2={"MIC"} />
          <TicketCard eventTitle={"SPORT"} eventTitle2={"EVENT"} />
          <TicketCard eventTitle={"ESPORT"} eventTitle2={"TEAM"} />
          <TicketCard eventTitle={"DJ"} eventTitle2={"Night"} />
        </div>
      </div>

      {/* tickets section */}

      <div className="bg-[#F2ECE7] py-20 ">
        {/* first section */}
        <div className="border-[2px] border-black h-[450px] max-md:h-auto w-full flex  max-md:flex-col">
          <TicketCard2 img={fest} h={"100"} w={"30"} hidden={true} />
          <TicketCard2 img={fest} h={"100"} w={"100"} hidden={false} />
          <div className="h-full w-[40%] max-md:w-full p-6 flex flex-col items-center  border-r-[2px] max-md:border-r-0 max-md:border-t-[2px]  border-black border-l-[2px] max-md:border-l-0 ">
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

          <TicketCard2 img={event1} h={"100"} w={"30"} hidden={true} />
        </div>

        <div className="text-[152px] max-md:text-[42px] font-bold text-center mt-[20px]">
          AMIPHORIA 2K25
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
