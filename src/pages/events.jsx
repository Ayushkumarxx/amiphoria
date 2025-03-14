import React from "react";
import { Navbar } from "../components/index";
import { octagon, plane, slash } from "../assets/index";
import { MdOutlineElectricBolt } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
function ImageCard({ name, imageUrl }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">{name}</p>
      <img
        src={imageUrl}
        alt={name}
        className="w-48 h-60 object-cover rounded-lg shadow-md grayscale"
      />
    </div>
  );
}

const Events = () => {
  const Culturalimages = [
    {
      name: "Astha Gill",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Aastha_Gill_Live_Show.jpg",
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

  return (
    <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden">
      {/* Section 1 */}
      <div className="h-screen w-full bg-[#FEEE01] sticky top-0 z-10 ">
        <Navbar />

        <div className="flex flex-col mt-6  items-center">
          <h1 className="text-[122px] font-extrabold">CULTURAL EVENT</h1>
          <div className="w-[120vw] h-[60px]   flex items-center justify-between  -translate-x-10">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex items-center ">
                <div className="text-[46px] font-extrabold text-black">21</div>
                <img src={slash} alt="" className="w-[50px] " />
                <img src={slash} alt="" className="w-[50px] " />
              </div>
            ))}
          </div>

          <h1 class="text-6xl font-bold text-outline mt-10 font-sans">
            TAKE PART
          </h1>
        </div>

        <div className="flex justify-between mt-[50px] items-center text-2xl font-bold">
          <div className="w-[30%] h-[2px] bg-black"></div>
          <div className="text-[#504D00]">WEDNESDAY</div>
          <div className="underline">FRIDAY </div>
          <div className="text-[#504D00]">THRUSDAY </div>

          <div className="w-[30%] h-[2px] bg-black"></div>
        </div>

        <div className="flex justify-between mt-[10px] items-center px-[50px]">
          {Culturalimages.map((item, index) => (
            <ImageCard key={index} name={item.name} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-[105vh] w-full bg-[#d03641] sticky top-0 z-20 flex flex-col items-center justify-center">
        <div className="w-[150px] h-[150px] absolute top-[50px] right-[130px] rotate-[30deg]">
          <img src={plane} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-[100px] h-[100px] absolute bottom-[50px] left-[120px]  flex">
          <img src={slash} alt="" className="w-full h-full object-contain" />
          <img src={slash} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="flex ">
          <h1 class="text-[72px] font-bold text-outline-2 font-sans text-nowrap">
            Coding Events Tech Digital Fest Event Coding Debugging Memes
          </h1>
        </div>

        <div className="w-screen h-[1px] bg-black my-8"></div>

        <div className="flex ">
          <h1 class="text-[72px]  font-bold  text-nowrap">
            Fest Event Coding Debugging Memes Coding Events Tech Digital
          </h1>
        </div>

        <div className="w-screen h-[1px] bg-black my-8"></div>

        <div className="flex relative">
          <h1 class="text-[72px] font-bold text-outline-2 font-sans text-nowrap ">
            Tech Podcast Hackathon Coding Debugging Memes Coding Events
          </h1>

          <div className="w-[150px] h-[150px] absolute bottom-[-80px] right-[400px] rotate-[30deg]">
            <div className="relative w-full h-full">
              <img
                src={octagon}
                alt=""
                className="w-full h-full object-contain"
              />

              <p className="absolute inset-0 flex items-center justify-center text-white font-bold">
                Join now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-[110vh] w-full bg-[#F24638] sticky top-0 z-30 flex flex-col justify-between py-10">
        <div className="flex w-full justify-between items-center  text-white font-semibold px-10 ">
          <div className="flex items-center gap-2">
            {" "}
            <MdOutlineElectricBolt /> Acedmic Event
          </div>
          <div>Get Registered</div>
        </div>

        <div className="flex justify-between items-start text-white ">
          <div className="text-7xl font-bold">
            ONE <br />
            CHANCE
          </div>
          <div className="text-zinc-900 -rotate-90 text-[16px]">
            CINEMA <br />
            ART <br /> DESIGN <br /> COMMUNICATION
          </div>
          <div className="text-7xl font-bold text-[#E8A7A3]">MINIMAL</div>
          <div className="text-7xl font-bold">FEES</div>
        </div>
        <div className="flex justify-between items-end text-white ">
          <div className="text-7xl font-bold">DEBATE.</div>

          <div className="text-[16px] text-zinc-900 ">
            AMITY-UNIVERSITY-JHARKHAND
          </div>
          <div className="text-7xl font-bold text-right">
            <span className="text-[#F78939]">CINEMA.</span> ART. <br />
            PANCHAYAT.
          </div>
        </div>

        <div className="h-[5vh]"></div>
      </div>

      {/* Section 4 */}
      <div className="h-[110vh] w-full bg-[#DEDEDE] sticky top-0 z-40 ">
        <div className="flex w-full h-[10vh] justify-between items-center  text-black font-semibold px-10 ">
          <div className="flex items-center gap-2">
            {" "}
            <MdOutlineElectricBolt /> THE SPORT <br />
            EVENT
          </div>

          <div></div>
          <div></div>
          <div>Football</div>
          <div>Cricket</div>
          <div>Bandminton</div>
          <div>Chess</div>
          <div></div>
          <div></div>
          <div className="p-2 border-[1px] border-black rounded-[100px]">
            Get Registered
          </div>
        </div>

        <div className="flex w-full h-[30vh] ">
          <div className="w-[50%] h-full flex justify-center items-center text-[62px] font-semibold ">
            JOIN THE
          </div>
          <div className="w-[50%] h-full relative">
            <img
              src="https://assetsio.gnwcdn.com/chess-playing-hand.jpeg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
              alt=""
              className="w-full h-full object-cover  grayscale brightness-75"
            />
            <p className="absolute top-1/2 left-1/2 text-[62px] -translate-x-1/2 -translate-y-1/2 text-outline-white font-bold font-sans">
              MARCH/ 19
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse w-full h-[30vh] ">
          <div className="w-[50%] h-full flex justify-center items-center text-[62px] font-semibold ">
            FUN AT AMITY
          </div>
          <div className="w-[50%] h-full relative">
            <img
              src="https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw="
              alt=""
              className="w-full h-full object-cover  grayscale brightness-75"
            />
            <p className="absolute top-1/2 left-1/2 text-[62px] -translate-x-1/2 -translate-y-1/2 text-outline-white font-bold font-sans">
              3 DAYS
            </p>
          </div>
        </div>

        <div className="flex  w-full h-[30vh] ">
          <div className="w-[50%] h-full flex justify-center items-center text-[62px] font-semibold ">
            AMIPHORIA 2025
          </div>
          <div className="w-[50%] h-full relative">
            <img
              src="https://www.nbc.com/sites/nbcblog/files/styles/scale_862/public/2024/07/paris-2024-olympics-soccer.jpg"
              alt=""
              className="w-full h-full object-cover  grayscale brightness-75"
            />
            <p className="absolute top-1/2 left-1/2 text-[62px] -translate-x-1/2 -translate-y-1/2 text-outline-white font-bold font-sans">
              10+ GAMES
            </p>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="h-[100vh] w-full bg-black sticky top-0 z-50  py-10">
        <div className="flex w-full justify-between items-center  text-white font-semibold px-10 ">
          <div className="flex items-center gap-2">
            {" "}
            <MdOutlineElectricBolt /> Esport Event
          </div>
          <div>Get Registered</div>
        </div>
        <div className="w-[100vw] h-[25vh]  rotate-2 translate-y-[80px] flex">
          <div className="w-[20%] pattern-1"></div>
          <div
            className="w-[80%]   gradient-1  py-4  flex justify-between flex-col
          "
          >
            <div className="w-full h-[2px] bg-white"></div>
            <div className="flex justify-around text-[42px] font-semibold">
              <div>
                BEYOND
              </div>
              <div>
                NORMAL
              </div>
              <div>
                GAMING
              </div>
            </div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
        </div>
        <div className="w-[100vw] h-[25vh] bg-amber-300 -rotate-2 translate-y-[80px]  flex">
 
          <div className="w-[80%]  gradient-2 py-4 flex justify-between flex-col">
            <div className="w-full h-[2px] bg-white"></div>
            <div className="flex justify-around text-[42px] font-semibold">
              <div>
                ESPORT
              </div>
              <div>
                <SiYoutubegaming/>
              </div>
              <div>
                2025
              </div>
            </div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
          <div className="w-[20%] pattern-1"></div>
        </div>{" "}
        flex justify-between flex-row
        <div className="w-[100vw] h-[25vh] bg-amber-500 rotate-2 translate-y-[80px]  flex">
          <div className="w-[20%] pattern-1"></div>
          <div className="w-[80%]  gradient-3  py-4 flex justify-between flex-col">
            <div className="w-full h-[2px] bg-white"></div>
            <div className="flex justify-around text-[42px] font-semibold">
              <div>
                KHELEGA
              </div>
              <div>
                FREE FIRE
              </div>
              <div>
                ?????
              </div>
            </div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
