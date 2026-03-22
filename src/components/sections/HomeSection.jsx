import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/gameImage.png";
import Beams from '../ui/Beams';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-28 pb-20 md:pb-48 px-4 sm:px-8 bg-background text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2.5}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col md:flex-row items-center">
        {/* Image — fade in from left */}
        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-[500px] flex items-center justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-80 h-80 md:w-130 md:h-130 overflow-hidden">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:-rotate-5 hover:scale-90"
            />
          </div>
        </motion.div>

        {/* Text — staggered fade in from right */}
        <motion.div
          className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-center gap-4 md:gap-[15px] order-1 md:order-2 text-center md:text-left mb-8 md:mb-0"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
        >
          <motion.p
            className="text-2xl md:text-3xl font-bold text-white"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Hello, I go by <span className="text-green-400">Christian</span>!
          </motion.p>
          <motion.p
            className="text-3xl md:text-5xl font-extrabold leading-tight text-white"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            I <span className="text-green-400">Design</span> And{" "}
            <span className="text-green-400">Develop</span> Websites
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}