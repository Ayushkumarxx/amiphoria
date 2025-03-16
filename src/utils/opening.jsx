import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const OpeningAnimation = () => {
 
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
      
    }, 2500); // Smooth transition duration
  }, []);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#8B1E1E] text-[#F2ECE7] z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Moving Background Panel (Smoother) */}
          <motion.div
            className="absolute inset-0 bg-[#F2ECE7]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }} // Slower transition
          />

          {/* Text with Animated Entry */}
          <motion.div
            className="absolute z-20 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }} // Start lower
            animate={{ opacity: 1, y: 0 }} // Move up smoothly
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-extrabold tracking-widest uppercase text-[clamp(2.5rem,8vw,7rem)]"
              initial={{ opacity: 0, y: 20 }} // Slight bounce effect
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              AMIPHORIA
            </motion.h1>

            <motion.p
              className="tracking-wide mt-2 text-[clamp(1rem,3vw,2rem)]"
              initial={{ opacity: 0, y: 10 }} // Slight delay for staggered effect
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              Elevate. Innovate. Celebrate.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
