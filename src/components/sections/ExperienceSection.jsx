import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fgpResponsibilities = [
  <>Maintained and enhanced a <span className="font-semibold text-green-400">React.js + TypeScript</span> codebase following existing architecture and coding standards.</>,
  <>Developed <span className="font-semibold text-green-400">reusable, component-based UI features</span> to improve scalability and maintainability.</>,
  <>Integrated UI animations using <span className="font-semibold text-green-400">ReactBits</span>, increasing user engagement and visual appeal.</>,
  <>Designed and implemented a <span className="font-semibold text-green-400">dynamic logo marquee</span> to showcase partner brands.</>,
  <>Built a <span className="font-semibold text-green-400">Partners page</span> and <span className="font-semibold text-green-400">Contact Us module</span> with form handling and validation.</>,
  <>Collaborated with <span className="font-semibold text-green-400">cross-functional teams</span> to translate business requirements into responsive web interfaces.</>,
];

const kwaniiResponsibilities = [
  <>Learned fundamental game development concepts using <span className="font-semibold text-green-400">Unity and C#</span>, including scene management, game objects, scripting, physics, and UI systems.</>,
  <>Developed <span className="font-semibold text-green-400">small prototype games</span> to understand gameplay mechanics, object interactions, and event-driven programming.</>,
  <>Implemented <span className="font-semibold text-green-400">basic player controls, collision detection, and simple game logic</span> using C#.</>,
  <>Used <span className="font-semibold text-green-400">Microsoft Power Automate</span> to automate repetitive company email-sending tasks, improving workflow efficiency and reducing manual work.</>,
];

const fgpTechStack = ["React.js", "TypeScript", "ReactBits", "UI/UX", "Git"];
const kwaniiTechStack = ["Unity", "C#", "Power Automate", "Git"];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-4 sm:px-8 md:p-20 min-h-screen font-poppins bg-background text-white"
    >
      {/* Header */}
      <motion.div
        className="h-auto md:h-[120px] w-full flex justify-start items-center md:pr-15 border-b border-zinc-700 py-4 md:py-0"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-7xl font-[800] pb-3">professional experience.</h1>
      </motion.div>

      <div className="flex flex-col md:flex-row">
        {/* Timeline index */}
        <motion.div
          className="md:w-1/3 w-full font-poppins py-8 md:py-12 md:sticky md:top-28 md:h-[calc(100vh-7rem)] md:overflow-y-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-2xl md:text-4xl font-[700] mb-6">timeline.</p>
          <ul className="flex flex-row md:flex-col gap-4 md:gap-5 text-base md:text-lg overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            <li className="flex-shrink-0 md:flex-shrink">
              <a href="#exp-fgp" className="text-white hover:text-green-400 transition-colors duration-300 whitespace-nowrap">
                /2025-2026 FGP Trading
              </a>
            </li>
            <li className="flex-shrink-0 md:flex-shrink">
              <a href="#exp-kwanii" className="text-white hover:text-green-400 transition-colors duration-300 whitespace-nowrap">
                /Feb 2026 Kwanii Inc.
              </a>
            </li>
            <li className="flex-shrink-0 md:flex-shrink opacity-60">
              <span className="whitespace-nowrap cursor-default">/More experiences coming soon...</span>
            </li>
          </ul>
        </motion.div>

        <div className="md:w-2/3 w-full p-4 md:p-10 md:border-l border-zinc-700 flex flex-col gap-16 md:gap-28">
          {/* FGP */}
          <motion.div
            id="exp-fgp"
            className="w-full scroll-mt-24 md:scroll-mt-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="flex flex-col md:flex-row py-4 px-4 md:px-8 items-start md:items-stretch border-b-2 border-zinc-700 border-dashed gap-4 md:gap-6"
              variants={fadeUp}
            >
              <div className="flex-1 min-w-0">
                <p className="text-lg md:text-[25px] font-bold text-white break-words">Frontend Developer Intern</p>
                <p className="text-green-400 text-sm md:text-base mt-1 break-words">FGP Fortunegod Philippines Trading Inc.</p>
                <p className="text-white text-xs md:text-sm mt-1">2025 - 2026</p>
              </div>
              <div className="flex flex-wrap items-end gap-2 md:gap-2.5 shrink-0">
                {fgpTechStack.map((tech, i) => (
                  <span key={i} className="px-2 md:px-2.5 py-1 bg-foreground text-background font-medium hover:opacity-80 cursor-pointer transition-opacity duration-300 text-[10px] md:text-[11px] whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div className="w-full px-4 md:px-8 py-5" variants={fadeUp}>
              <div className="pb-5 text-white leading-relaxed text-sm md:text-base">
                <p className="text-lg md:text-xl font-semibold text-green-400 mb-4">Key Responsibilities & Achievements:</p>
                <ul className="space-y-4">
                  {fgpResponsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      variants={fadeUp}
                    >
                      <div className="min-w-[8px] w-[8px] h-[8px] bg-green-400 rounded-full mt-2 shrink-0" />
                      <p className="leading-relaxed flex-1 break-words">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Kwanii */}
          <motion.div
            id="exp-kwanii"
            className="w-full scroll-mt-24 md:scroll-mt-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="flex flex-col md:flex-row py-4 px-4 md:px-8 items-start md:items-stretch border-b-2 border-zinc-700 border-dashed gap-4 md:gap-6"
              variants={fadeUp}
            >
              <div className="flex-1 min-w-0">
                <p className="text-lg md:text-[25px] font-bold text-white break-words">Information Technology Intern</p>
                <p className="text-green-400 text-sm md:text-base mt-1 break-words">Kwanii Inc.</p>
                <p className="text-white text-xs md:text-sm mt-1">Feb 2026 - March 2026</p>
              </div>
              <div className="flex flex-wrap items-end gap-2 md:gap-2.5 shrink-0">
                {kwaniiTechStack.map((tech, i) => (
                  <span key={i} className="px-2 md:px-2.5 py-1 bg-foreground text-background font-medium hover:opacity-80 cursor-pointer transition-opacity duration-300 text-[10px] md:text-[11px] whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div className="w-full px-4 md:px-8 py-5" variants={fadeUp}>
              <div className="pb-5 text-white leading-relaxed text-sm md:text-base">
                <p className="text-lg md:text-xl font-semibold text-green-400 mb-4">Key Responsibilities & Achievements:</p>
                <ul className="space-y-4">
                  {kwaniiResponsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      variants={fadeUp}
                    >
                      <div className="min-w-[8px] w-[8px] h-[8px] bg-green-400 rounded-full mt-2 shrink-0" />
                      <p className="leading-relaxed flex-1 break-words">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}