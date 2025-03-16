import React from "react";
import { HiSparkles } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";
import { event1, event2, event3, event4, event5, fest } from "../assets/index";
import useNavigation from "../utils/navigation";
import Routes from "../utils/routes";

const EventCard = ({ number, title, events, imageSrc }) => {
  return (
    <div className="flex flex-col mt-[100px] max-md:mt-[60px]">
      <div className="w-full py-2.5 flex">
        <div className="w-[50%] max-md:w-[10%] flex justify-center max-md:justify-start items-center text-white font-bold text-[18px]">
          {number}
        </div>
        <div className="w-[50%] max-md:w-[90%] border-b-[2px] border-b-white flex justify-between items-center py-2 max-md:gap-2">
          <div className="text-white text-[18px]  font-semibold">{title}</div>
          <div className="text-zinc-200 text-[18px] max-md:text-[14px]">
            {events.map((event, index) => (
              <div key={index}>{event}</div>
            ))}
          </div>
          <div className="text-white h-[150px] w-[150px]">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const navigateTo = useNavigation();
  return (
    <>
      <div className="w-full h-screen max-md:h-auto bg-[#E5DDD4]  ">
        {/* nav head */}
        <div className="max-w-[1350px] mx-auto  h-[10%] max-md:h-[75px]   flex justify-between items-center border-b-[1px] border-b-black px-2.5">
          <div
            className="text-[24px] cursor-pointer "
            onClick={() => navigateTo(Routes.Home)}
          >
            Amiphoria
          </div>
          <div className="flex gap-[8px] flex-col">
            <div className="w-[25px] h-[2px] bg-black"></div>
            <div className="w-[25px] h-[2px] bg-black"></div>
          </div>
          <div
            className="text-[16px] px-[30px] py-[8px] bg-black text-white cursor-pointer hover:outline-[1px] hover:outline-black hover:bg-transparent hover:text-black transition-all duration-200 ease-in"
            onClick={() => navigateTo(Routes.Form, true)}
          >
            Register
          </div>
        </div>

        {/* first section */}

        <div className="max-w-[1350px] mx-auto flex max-md:flex-col justify-between  h-[90%] max-md:h-auto py-2.5">
          {/* first section */}
          <div className="w-[45%] max-md:w-full max-md:px-2.5 flex flex-col justify-around ">
            {/* heading */}
            <div className="flex w-full justify-between items-end px-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="text-[24px] font-normal ">Join the</div>
                <div className="text-[72px] max-md:text-[36px] font-semibold leading-20 max-md:leading-12">
                  Fun of <br />
                  Amiphoria
                </div>
              </div>
              <div className="text-[92px]   max-md:text-[42px] font-semibold max-md:leading-20 leading-24">
                2K <br />
                25
              </div>
            </div>

            {/* <div className="w-full h-[2px] bg-black mt-[20px]"></div> */}

            <div className="flex flex-col gap-[10px] w-full max-md:w-[95%] max-md:mx-auto  h-[200px] shadow-[0_0_0_2px_rgba(0,0,0,1),-8px_-8px_0_0_rgba(0,0,0,1)] p-6 max-md:mt-[40px]">
              <div className="flex h-[50%] w-full p-2 justify-between items-center text-[24px] max-md:text-[16px]  ">
                <div className="flex gap-2  items-center">
                  <HiSparkles />
                  Acedmics sports tech cultrual
                </div>
                <div>Fest</div>
              </div>
              <div className="flex h-[50%] w-full p-2 justify-between items-center  text-[24px] max-md:text-[16px] ">
                <div className="flex gap-2 items-center">
                  {" "}
                  <HiSparkles />
                  Join the fun
                </div>
                <div>Amity</div>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="w-[10%] max-md:w-full flex flex-col justify-between items-center">
            <div className="w-[2px] h-[80%] max-md:w-full max-md:h-[2px] max-md:my-[40px] bg-black"></div>
            <div className="w-[80px] h-[80px] rounded-[100px] bg-black flex justify-center items-center text-white text-[18px] max-md:hidden">
              <HiArrowDown />
            </div>
          </div>

          {/* second section */}
          <div className="w-[45%] max-md:w-full max-md:px-2.5 max-md:pb-[40px] flex flex-col justify-around items-center">
            <div className="text-[42px] max-md:text-[32px] font-semibold">
              Get your self registered <br />
              <span className="text-[52px] max-md:text-[36px] text-[#8B1E1E] font-serif">
                ASAP !
              </span>
            </div>
            <div className="w-[50%] h-[60%] max-md:w-[100%] ">
              <img
                src={fest}
                alt=""
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="bg-[#8B1E1E]  py-[40px] px-[16px]">
        <h1 className="text-[36px] max-md:text-[24px]   text-white">
          Explore Amiophoria’s events and activities. <br />
          Stay updated on the latest happenings <br /> Join us to learn, grow,
          and connect!
        </h1>

        <div className="flex flex-col mt-[100px] max-md:mt-[60px]">
          <EventCard
            number="01"
            title="Cultural Events"
            events={[
              "Calligraphy",
              "Debate",
              "Face Painting",
              "Quiz",
              "Urban Panchayat",
              "Open Mic",
              "etc",
            ]}
            imageSrc={event1}
          />
          <EventCard
            number="02"
            title="Acedmic Events"
            events={[
              "Fashion Vista",
              "Halla Bol",
              "Dancer's Dream",
              "Face Off",
              "Vocal Voyage",
              "Battel Of Bands",
              "etc",
            ]}
            imageSrc={event2}
          />
          <EventCard
            number="03"
            title="Sport Events"
            events={[
              "100m Race",
              "200m Race",
              "4X100m Relay",
              "Fustal",
              "Basketball",
              "Volleyball",
              "Cricket",
              "Badminton",
              "Chess",
              "etc",
            ]}
            imageSrc={event3}
          />
          <EventCard
            number="04"
            title="Tech Events"
            events={[
              "Code Fest",
              "Byte Build",
              "Web Sprint",
              "Reel Rush",
              "Design Verse",
              "Syntsx Error",
              "Bot Blitz",
              "etc",
            ]}
            imageSrc={event4}
          />
          <EventCard
            number="05"
            title="Tech Events"
            events={[
              "PUBG",
              "Call of duty",
              "valorant",
              "Calligraphy",
              "Free Fire",
              "Mini Militia",
              "NFS",
              "etc",
            ]}
            imageSrc={event5}
          />
        </div>
      </div>

      {/* third section */}
      <div className="bg-[#E5DDC9] py-[20px] ">
        <div className="max-w-[1250px] mx-auto mt-[200px] p-2.5">
          <div className="text-[122px] max-md:text-[46px] font-semibold leading-none">
            Register Now*
          </div>
          <div className="flex justify-between items-center my-[100px]">
            <div className="text-[52px] max-md:text-[18px] font-semibold">
              SELECT AN EVENT AND <br /> JOIN NOW
            </div>
            <div
              className="w-[80px] max-md:w-[60px] h-[80px] max-md:h-[60px] rounded-[100px] bg-black flex justify-center items-center text-white text-[42px] max-md:text-[32px] cursor-pointer hover:bg-transparent hover:text-black hover:outline-1 hover:outline-black transition-all duration-200 ease-in-out"
              onClick={() => navigateTo(Routes.Form, true)}
            >
              <GoArrowUpRight />{" "}
            </div>
          </div>

          <div className="w-full h-[4px] bg-black my-[20px] max-md:my-[10px]"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
