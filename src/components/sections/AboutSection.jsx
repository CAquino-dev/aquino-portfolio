import React from "react";
import { motion } from "framer-motion";
import kuri from "../../assets/kuri.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background text-white min-h-screen flex items-center px-4 sm:px-8 md:px-20 py-16 md:py-28 font-poppins"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
        {/* Text — slides from left */}
        <motion.div
          className="md:w-1/2 w-full order-2 md:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            className="text-5xl md:text-8xl font-[700] pb-3 leading-none"
            variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          >
            about.
          </motion.p>
          <motion.p
            className="text-green-400 text-xl md:text-2xl font-[500] pb-6 md:pb-8"
            variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          >
            _Who am I and what I do
          </motion.p>
          <motion.p
            className="pb-5 text-base md:text-lg leading-relaxed text-white"
            variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          >
            I am currently a fourth-year student studying at the{" "}
            <span className="font-semibold text-green-400">National College of Science and Technology</span>.
          </motion.p>
          <motion.p
            className="text-base md:text-lg leading-relaxed text-white"
            variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          >
            As an aspiring full-stack developer, I'm passionate about building
            smooth and engaging web experiences. I'm constantly learning and
            improving my skills using technologies like
            <span className="font-semibold text-green-400"> React.js</span>,{" "}
            <span className="font-semibold text-green-400"> Node.js</span>,{" "}
            <span className="font-semibold text-green-400"> Express</span>, and{" "}
            <span className="font-semibold text-green-400"> MySQL</span>{" "}
            to bring ideas to life on the web. With a strong focus on clean
            design, functionality, and problem-solving, I'm excited to dive
            deeper into real-world development and create meaningful solutions
            in the digital space.
          </motion.p>
        </motion.div>

        {/* Image — slides from right */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center order-1 md:order-2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full max-w-[300px] md:max-w-[600px] h-[300px] md:h-[600px] overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
            <img
              src={kuri}
              alt="Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}