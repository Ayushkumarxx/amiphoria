import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/index";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import useNavigation from "../utils/navigation";
import Routes from "../utils/routes";

const Update = () => {
  const navigateTo = useNavigation();

  return (
    <section className="w-full h-screen max-md:h-auto bg-[#EC4B1B]">
      <Navbar />
      {/* main content */}
      <div className="max-w-[1350px] mx-auto py-[10px] px-[10px] h-[90vh] max-md:h-auto flex max-md:flex-col">
        
        {/* First section */}
        <div className="w-[50%] max-md:w-full h-full flex flex-col py-14 justify-between">
          {["Latest", "Updates", "Amiphoria"].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-[112px] max-md:text-[50px] underline underline-offset-[32px] max-md:underline-offset-[16px]"
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* Second section */}
        <motion.div
          className="w-[50%] max-md:w-full h-full flex flex-col py-14 px-[10%] max-md:px-[0%]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-[18px] font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            amiphoria@amity.rnc.in
          </motion.div>

          <div className="flex gap-5 mt-[30px]">
            {[ 
              { icon: <FaFacebook />, label: "Facebook", link: Routes.FB },
              { icon: <FaInstagram />, label: "Instagram", link: Routes.Insta },
            ].map((social, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 text-[18px] w-[150px] max-md:w-[120px] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateTo(social.link, true)}
              >
                {social.icon} {social.label}
              </motion.div>
            ))}
          </div>

          <div className="flex gap-5 mt-[10px]">
            {[ 
              { icon: <FaLinkedin />, label: "LinkedIn", link: Routes.LinkedIn },
              { icon: <FaYoutube />, label: "YouTube", link: Routes.Yt },
            ].map((social, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 text-[18px] w-[150px] max-md:w-[120px] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateTo(social.link, true)}
              >
                {social.icon} {social.label}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full h-[2px] bg-black mt-[20px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>

          <motion.div
            className="text-[72px] max-md:text-[36px] font-semibold mt-[20px] text-orange-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            2K25
          </motion.div>

          <motion.div
            className="text-[18px] max-md:text-[14px] font-normal mt-[10px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay updated with the latest happenings at Amiphoria! From exciting
            event announcements to important updates, this page keeps you
            informed about everything new. Whether it's upcoming performances,
            special collaborations, or feature enhancements, you’ll find all the
            details right here. Keep an eye out for fresh updates and be part of
            the excitement!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Update;
