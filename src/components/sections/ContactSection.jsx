import React from "react";
import { motion } from "framer-motion";
import { LinkedinLogo, GithubLogo, Envelope, MapPin } from "phosphor-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-8 md:px-20 py-16 md:py-28 border-t border-zinc-700 font-poppins bg-background text-white"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.div
          className="w-full flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="text-2xl md:text-4xl mb-6 font-[600]" variants={fadeUp}>
            Let's work together!
          </motion.p>
          <motion.p className="text-white mb-12 text-lg md:text-xl leading-relaxed max-w-2xl" variants={fadeUp}>
            Have a project idea, question, or opportunity? Feel free to reach out
          </motion.p>

          {/* Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-2xl" variants={fadeUp}>
            <motion.div
              className="bg-card rounded-2xl p-8 border border-border hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 group"
              variants={fadeUp}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <Envelope size={28} className="text-green-400 group-hover:text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Me</h3>
                <a href="mailto:caquino.dev@gmail.com" className="text-green-400 hover:text-green-300 font-medium text-lg transition-colors duration-300">
                  caquino.dev@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl p-8 border border-border hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 group"
              variants={fadeUp}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <MapPin size={28} className="text-green-400 group-hover:text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Based In</h3>
                <p className="text-green-400 font-medium text-lg">Cavite, Philippines</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div className="mb-12" variants={fadeUp}>
            <p className="text-white mb-6 text-lg">Or connect with me on</p>
            <div className="flex gap-8 justify-center">
              <motion.a
                href="https://www.linkedin.com/in/christian-aquino-189945383/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-white hover:text-green-400 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  <LinkedinLogo size={28} weight="duotone" className="group-hover:text-white" />
                </div>
                <span className="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/CAquino-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-white hover:text-green-400 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  <GithubLogo size={28} weight="duotone" className="group-hover:text-white" />
                </div>
                <span className="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}