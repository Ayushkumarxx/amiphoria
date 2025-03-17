import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/index";
import { heart, spon1, spon2, spon3, spon4, spon5 } from "../assets";

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1}, // Staggered delay between children
  },
};

const LogoDiv = ({ spon }) => {
  return (
    <motion.div
      variants={logoVariants}
      className="w-[200px] h-[150px] max-md:w-[150px] max-md:h-[135px] rounded-[8px] overflow-hidden bg-[#E3DBD7]"
    >
      <img
        src={spon}
        alt="sponsor"
        className="mix-blend-multiply w-full h-full object-contain"
      />
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <section className="bg-[#F2ECE7]">
      <Navbar />
      <div className="flex max-md:flex-col h-[90vh] max-md:h-auto max-w-[1350px] mx-auto">
        {/* Left Fixed Section */}
        <div className="w-1/2 max-md:w-full h-full overflow-y-hidden p-4 flex">
          <div className="flex w-[20%] flex-col justify-around items-start">
            <div className="h-[80%] w-0.5 bg-[#A9EB09]"></div>
            <img src={heart} alt="heart icon" className="w-[30px]" />
          </div>
          <div className="text-7xl max-md:text-3xl font-extrabold leading-normal">
            {Array(5)
              .fill("Sponsors")
              .map((text, index) => (
                <h2 key={index} className={index === 3 ? "text-[#A9EB09]" : ""}>
                  {text}
                </h2>
              ))}
            <div className="hidden md:block">
              {Array(5)
                .fill("Sponsors")
                .map((text, index) => (
                  <h2 key={index + 5}>{text}</h2>
                ))}
            </div>
          </div>
        </div>

        {/* Right Scrollable Section */}
        <div className="w-1/2 max-md:w-full h-full overflow-y-auto py-8 px-4 scrollbar-hidden">
          <h2 className="text-[18px] font-bold">Gold Sponsors</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 flex-wrap mt-2"
          >
            <LogoDiv spon={spon1} />
            <LogoDiv spon={spon2} />
            <LogoDiv spon={spon3} />
            <LogoDiv spon={spon4} />
            <LogoDiv spon={spon5} />
          </motion.div>

          <h2 className="text-[18px] font-bold mt-[40px]">Silver Sponsors</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 flex-wrap mt-2"
          >
            <LogoDiv spon={spon1} />
            <LogoDiv spon={spon2} />
            <LogoDiv spon={spon3} />
            <LogoDiv spon={spon4} />
            <LogoDiv spon={spon5} />
          </motion.div>

          <h2 className="text-[18px] font-bold mt-[40px]">Bronze Sponsors</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 flex-wrap mt-2"
          >
            <LogoDiv spon={spon1} />
            <LogoDiv spon={spon2} />
            <LogoDiv spon={spon3} />
            <LogoDiv spon={spon4} />
            <LogoDiv spon={spon5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
