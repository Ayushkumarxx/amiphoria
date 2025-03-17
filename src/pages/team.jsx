import React from "react";
import { Navbar } from "../components/index";
import { IoSparklesSharp } from "react-icons/io5";
import { team1, team2, team3, team4 } from "../assets/index";
import {motion} from 'framer-motion';

// team members cards
const teamMembers = [
  { name: "Ayush", role: "coder", image: team1 },
  { name: "Praveer", role: "presenter", image: team2 },
  { name: "Aditya", role: "designer", image: team3 },
  { name: "Rishabh", role: "supporter", image: team4 },
];

const TeamSection = () => {
  return (
    <div className="flex justify-between items-center mt-4 flex-wrap">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col w-[280px] h-[350px] overflow-hidden mb-[10px] max-md:w-[150px] max-md:h-[250px]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[80%] max-md:h-[70%] object-cover grayscale-100"
          />
          <div className="w-full flex flex-col p-2 justify-between items-end">
            <p className="text-[16px] max-md:text-[14px] font-bold text-black mt-2 max-md:mt-1">{member.role}</p>
            <p className="text-[22px] max-md:text-[18px] font-bold text-black">{member.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const Team = () => {

  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#F2ECE7] ">
      <Navbar />

      {/* big words */}

      <section className="max-w-[1250px] mt-[50px] px-2.5 mx-auto flex justify-between items-center">

        {/* left section */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut"}}
        >
          <div className="text-[142px] max-md:text-[38px] leading-none mb-2 font-bold max-xl:text-[124px]">MEET</div>
          <div className="border-[4px] border-dashed h-[100px] max-md:h-[50px] flex justify-around  items-center p-2.5 text-[32px] max-md:text-[12px] ">
            Chill <IoSparklesSharp /> Guyz
          </div>
        </motion.div>
        {/* right section */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 , ease: "easeInOut"}}
        >
          <div className="border-[4px] border-dashed h-[100px] max-md:h-[50px] flex justify-around  items-center p-2.5 text-[32px] max-md:text-[12px] mb-2 ">
            Unique <IoSparklesSharp /> Talented <IoSparklesSharp /> Perfect
          </div>
          <div className="text-[142px] max-md:text-[38px] font-bold leading-none max-xl:text-[114px]">OUR TEAM</div>
        </motion.div>
      </section>

      {/* second section */}

      <motion.section className="max-w-[1250px] mt-[50px] mx-auto pb-10 px-2.5"
        initial={{ opacity: 0 , y: isMobile ? 20 : 30}}
        animate={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.6, delay: 0.4 , ease: "easeInOut" }}
      >
        <div className="w-full h-[2px] bg-black mt-[20px]"
     
        ></div>

        {/* some words */}
        <div className="max-md:text-[12px] text-[18px] font-semibold ">
          Hey we are students of amity university jharkhand who love to code.
        </div>

        <TeamSection />
      </motion.section>
    </section>
  );
};

export default Team;
