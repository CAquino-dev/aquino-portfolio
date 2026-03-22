import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "phosphor-react";
import { projects } from "../../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsSection({ onOpenGallery }) {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 md:p-20 min-h-screen font-poppins bg-background text-white"
    >
      {/* Header */}
      <motion.div
        className="h-auto md:h-[120px] w-full flex justify-start items-center md:pr-15 border-b border-zinc-700 py-4 md:py-0 mb-12 md:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-7xl font-[800] pb-3">personal projects.</h1>
      </motion.div>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      >
        {projects.map((p, index) => (
          <motion.div
            key={index}
            id={`project-${index}`}
            variants={fadeUp}
            className="group relative bg-card border border-zinc-700 rounded-2xl overflow-hidden hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col"
          >
            {/* Image */}
            <div
              className="relative h-[200px] md:h-[260px] overflow-hidden bg-zinc-900 cursor-pointer"
              onClick={() => p.hasGallery && onOpenGallery(p.galleryKey, p.projectName)}
            >
              <img
                src={p.projectImg}
                alt={p.projectName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                {p.hasGallery && (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
                    View Screenshots
                  </span>
                )}
              </div>

              {/* Date badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                {p.date}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-4">
              {/* Name + arrow */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{p.projectName}</h3>
                <ArrowUpRight
                  size={20}
                  className="text-zinc-500 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-0.5"
                />
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed flex-1 line-clamp-3">{p.description}</p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-700">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] md:text-xs font-medium rounded-md hover:bg-green-900/40 hover:text-green-400 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}