import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OpeningAnimation = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true); // Start fading out
      setTimeout(() => {
        navigate("/"); // Navigate after fade-out completes
      }, 1500); // Give time for fade-out
    }, 2500); // Wait before starting fade
  }, [navigate]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#8B1E1E] text-[#F2ECE7] z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Moving Panel */}
      <motion.div
        className="absolute inset-0 bg-[#F2ECE7]"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Text Reveal */}
      <motion.div
        className="absolute z-20 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest uppercase">
          AMIPHORIA
        </h1>
        <p className="text-md md:text-lg tracking-wide mt-2">
          Elevate. Innovate. Celebrate.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OpeningAnimation;
