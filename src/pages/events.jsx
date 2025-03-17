import React from "react";
import { Navbar } from "../components/index";
import { octagon, plane, slash } from "../assets/index";
import { MdOutlineElectricBolt } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import useNavigation from "../utils/navigation";
import Routes from "../utils/routes";
import { motion } from "framer-motion";

//for section 1
function ImageCard({ name, imageUrl }) {
  return (
    <div className="flex flex-col items-center max-md:mb-2.5">
      <p className="text-lg max-md:text-[12px] font-semibold">{name}</p>
      <img
        src={imageUrl}
        alt={name}
        className="w-48 max-md:w-[140px] h-60 max-md:h-[120px] object-cover rounded-lg shadow-md grayscale"
      />
    </div>
  );
}

//for section 4
const EventSection = ({ title, image, text, reverse }) => (
  <div className={`flex w-full h-[30vh] ${reverse ? "flex-row-reverse" : ""}`}>
    <div className="w-[50%] h-full flex justify-center items-center text-[62px] max-md:text-[26px] p-4 font-semibold">
      {title}
    </div>
    <div className="w-[50%] h-full relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale brightness-75"
      />
      <p className="absolute top-1/2 left-1/2 text-[62px] max-md:text-[32px] -translate-x-1/2 -translate-y-1/2 text-outline text-white font-bold ">
        {text}
      </p>
    </div>
  </div>
);

const Events = () => {
  const navigateTo = useNavigation();
  //for section 1
  const Culturalimages = [
    {
      name: "Astha Gill",
      imageUrl:
        "https://s3images.zee5.com/wp-content/uploads/sites/7/2021/10/Untitled-design-2021-10-04T182508.184.jpg",
    },
    {
      name: "Asees Kaur",
      imageUrl:
        "https://www.indiaweekly.biz/wp-content/uploads/2023/07/Concert-review-Asees-Kaur-3-33-24-e1689846531977.jpg",
    },
    {
      name: "Concert Night",
      imageUrl:
        "https://res.cloudinary.com/https-highape-com/image/upload/q_auto:low,f_auto/v1543909727/cug9y5p9d2eudxixurwb.jpg",
    },
    {
      name: "Live Performance",
      imageUrl:
        "https://www.holidify.com/images/cmsuploads/compressed/33405125866_02c58f6e8a_b_20170926204513.jpg",
    },
    {
      name: "Singer Vibes",
      imageUrl:
        "https://images.unsplash.com/photo-1517230878791-4d28214057c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww",
    },
  ];

  // for section 4
  const items = ["", "", "Football", "Cricket", "Badminton", "Chess", "", ""];
  // for section 4
  const eventData = [
    {
      title: "JOIN THE",
      image:
        "https://assetsio.gnwcdn.com/chess-playing-hand.jpeg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      text: "MARCH/ 19",
      reverse: false,
    },
    {
      title: "FUN AT AMITY",
      image:
        "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=",
      text: "3 DAYS",
      reverse: true,
    },
    {
      title: "AMIPHORIA 2025",
      image:
        "https://www.nbc.com/sites/nbcblog/files/styles/scale_862/public/2024/07/paris-2024-olympics-soccer.jpg",
      text: "10+ GAMES",
      reverse: false,
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden">
      {/* Section 1 */}
      <motion.section
      className="h-screen w-full bg-[#FEEE01] sticky top-0 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />

      {/* main content */}
      <div className="flex flex-col mt-6 items-center">
        <motion.h1
          className="text-[122px] max-md:text-[52px] font-extrabold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CULTURAL EVENT
        </motion.h1>

        {/* date line */}
        <div className="w-[120vw] h-[60px] flex items-center justify-between -translate-x-10">
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-[46px] w-[150px] max-md:w-[50px] max-md:text-[18px] font-extrabold text-black">
                21
              </div>
              <img src={slash} alt="" className="w-[50px] max-md:w-[25px]" />
              <img src={slash} alt="" className="w-[50px] max-md:hidden" />
            </motion.div>
          ))}
        </div>

        <motion.h1
          className="text-6xl max-md:text-3xl font-bold text-outline mt-10 font-sans cursor-pointer hover:text-[#504D00]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => navigateTo(Routes.Register)}
        >
          TAKE PART
        </motion.h1>
      </div>

      {/* divider */}
      <motion.div
        className="flex justify-between mt-[50px] items-center text-2xl max-md:text-[16px] font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-[30%] max-md:w-[5%] h-[2px] bg-black"></div>
        <div className="text-[#504D00]">WEDNESDAY</div>
        <div className="underline">FRIDAY</div>
        <div className="text-[#504D00]">THURSDAY</div>
        <div className="w-[30%] max-md:w-[5%] h-[2px] bg-black"></div>
      </motion.div>

      {/* images card */}
      <div className="flex flex-wrap justify-between mt-[10px] items-center px-[50px] max-md:px-[10px]">
        {Culturalimages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ImageCard name={item.name} imageUrl={item.imageUrl} />
          </motion.div>
        ))}
      </div>
    </motion.section>

      {/* Section 2 */}
      <section className="h-[105vh] max-md:h-screen w-full bg-[#d03641] sticky top-0 z-20 flex flex-col items-center justify-center ">
        {/* plane img */}

        <div className="hidden max-md:block w-[100px] h-[100px] absolute top-[40px]  left-[80px]  -rotate-[30deg] scale-x-[-1]">
          <img src={plane} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-[150px] h-[150px] max-md:w-[100px] max-md:h-[100px] absolute top-[50px] max-md:top-[120px] right-[130px] max-md:right-[80px] rotate-[30deg]">
          <img src={plane} alt="" className="w-full h-full object-contain" />
        </div>

        {/* double slash */}

        <div className="w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px]  absolute bottom-[50px] max-md:bottom-[120px] left-[120px] max-md:left-[80px]  flex">
          <img src={slash} alt="" className="w-full h-full object-contain" />
          <img src={slash} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="flex ">
          <h1 class="text-[72px] max-md:text-[48px] font-[600] max-md:font-semibold text-outline  text-nowrap">
            Coding Events Podcast Tech Fest Event Coding Debugging Memes
          </h1>
        </div>

        {/* divider */}

        <div className="w-screen h-[1px] bg-black my-8"></div>

        <div className="flex ">
          <h1 class="text-[72px] max-md:text-[48px] font-bold  text-nowrap">
            Fest Event Coding Tech Memes Coding Events Tech Digital
          </h1>
        </div>
        {/* divider */}

        <div className="w-screen h-[1px] bg-black my-8"></div>

        <div className="flex relative ">
          <h1 class="text-[72px] max-md:text-[48px] font-[600] max-md:font-semibold text-outline  text-nowrap ">
            Tech Podcast Hackathon Coding Debugging Memes Coding Events
          </h1>

          {/* button */}

          <div className="w-[150px] h-[150px] max-md:w-[120px] max-md:h-[120px] absolute bottom-[-80px] right-[400px] rotate-[30deg]">
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => navigateTo(Routes.Register)}
            >
              <img
                src={octagon}
                alt=""
                className="w-full h-full object-contain"
              />

              <p className="absolute inset-0 flex items-center justify-center text-white font-bold max-md:text-[14px]">
                Join now
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-[110vh] w-full bg-[#F24638] sticky top-0 z-30 flex flex-col justify-between py-10">
        {/* header */}
        <div className="flex w-full justify-between items-center  text-white font-semibold px-10 max-md:px-2 ">
          <div className="flex items-center gap-2">
            {" "}
            <MdOutlineElectricBolt /> Acedmic Event
          </div>
          <div
            className="cursor-pointer hover:scale-105"
            onClick={() => navigateTo(Routes.Register)}
          >
            Get Registered
          </div>
        </div>

        {/* first section */}

        <div className="flex justify-between items-start text-white ">
          <div className="text-7xl max-md:text-3xl font-bold">
            ONE <br />
            CHANCE
          </div>
          <div className="text-zinc-900 -rotate-90 text-[16px] max-md:text-[12px]">
            CINEMA <br />
            ART <br /> DESIGN <br /> COMMUNICATION
          </div>
          <div className="text-7xl max-md:text-3xl font-bold text-[#E8A7A3] ">
            ACEDMIC
          </div>
          <div className="text-7xl max-md:text-3xl font-bold">FEST</div>
        </div>

        {/* second section */}
        <div className="flex justify-between items-end text-white ">
          <div className="text-7xl max-md:text-3xl font-bold">DEBATE.</div>
          {/* big screen  */}
          <div className="text-[16px] max-md:hidden text-zinc-900 ">
            AMITY-UNIVERSITY-JHARKHAND
          </div>
          {/* small screen */}
          <div className="text-[12px] text-zinc-900 md:hidden ">AMITY</div>
          <div className="text-7xl max-md:text-3xl font-bold text-right">
            <span className="text-[#F78939]">CINEMA.</span> ART. <br />
            PANCHAYAT.
          </div>
        </div>

        <div className="h-[5vh]"></div>
      </section>

      {/* Section 4 */}
      <section className="h-[110vh] w-full bg-[#DEDEDE] sticky top-0 z-40 ">
        <div className="flex w-full h-[10vh] justify-between items-center  text-black font-semibold px-10 max-md:px-2 ">
          <div className="flex items-center gap-2">
            {" "}
            <MdOutlineElectricBolt /> THE SPORT <br />
            EVENT
          </div>

          {items.map((item, index) => (
            <div key={index} className="max-md:hidden">
              {item}
            </div>
          ))}

          <div
            className="p-2 border-[1px] border-black rounded-[100px] cursor-pointer  hover:bg-black hover:text-white"
            onClick={() => navigateTo(Routes.Register)}
          >
            Get Registered
          </div>
        </div>

        {eventData.map((event, index) => (
          <EventSection key={index} {...event} />
        ))}
      </section>

      {/* section 5 */}
      <section className="h-[100vh] w-full bg-black sticky top-0 z-50  py-10">
        {/* header */}
        <div className="flex w-full justify-between items-center  text-white font-semibold px-10 ">
          <div className="flex items-center gap-2">
            {" "}
            <MdOutlineElectricBolt /> Esport Event
          </div>
          <div
            className="cursor-pointer hover:scale-105"
            onClick={() => navigateTo(Routes.Register)}
          >
            Get Registered
          </div>
        </div>

        {/* first */}
        <div className="w-[100vw] h-[25vh] max-md:h-[20vh]  rotate-2 translate-y-[80px] flex">
          <div className="w-[20%] pattern-1"></div>
          <div
            className="w-[80%]   gradient-1  py-4  flex justify-between flex-col
          "
          >
            <div className="w-full h-[2px] bg-white"></div>
            <div className="flex justify-around text-[42px] max-md:text-[18px] font-semibold">
              <div>BEYOND</div>
              <div>NORMAL</div>
              <div>GAMING</div>
            </div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
        </div>

        {/* second */}
        <div className="w-[100vw] h-[25vh] max-md:h-[20vh] bg-amber-300 -rotate-2 translate-y-[80px]  flex">
          <div className="w-[80%]  gradient-2 py-4 flex justify-between flex-col">
            <div className="w-full h-[2px] bg-white"></div>
            <div className="flex justify-around text-[42px] max-md:text-[18px] font-semibold">
              <div>ESPORT</div>
              <div>
                <SiYoutubegaming />
              </div>
              <div>2025</div>
            </div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
          <div className="w-[20%] pattern-1"></div>
        </div>
        {/* third */}

        <div className="w-[100vw] h-[25vh] max-md:h-[20vh] bg-amber-500 rotate-2 translate-y-[80px]  flex">
          <div className="w-[20%] pattern-1"></div>
          <div className="w-[80%]  gradient-3  py-4 flex justify-between flex-col">
            <div className="w-full h-[2px] bg-white"></div>
            <div className="flex justify-around text-[42px] max-md:text-[18px] font-semibold">
              <div>KHELEGA</div>
              <div>FREE FIRE</div>
              <div>?????</div>
            </div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
