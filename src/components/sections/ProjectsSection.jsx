import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Link as LinkIcon, Image } from "phosphor-react";
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
            className="group relative bg-card border border-zinc-700 rounded-2xl overflow-hidden hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Image Section - Click for Gallery */}
            <div
              className="relative h-[200px] md:h-[260px] overflow-hidden bg-zinc-900 cursor-pointer"
              onClick={() => {
                if (p.hasGallery) {
                  onOpenGallery(p.galleryKey, p.projectName);
                }
              }}
            >
              <motion.img
                src={p.projectImg}
                alt={p.projectName}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Overlay for Gallery */}
              {p.hasGallery && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span 
                    className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full text-sm shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image size={16} />
                    View Screenshots
                  </motion.span>
                </motion.div>
              )}

              {/* Date badge */}
              <motion.div 
                className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-green-400 text-xs font-medium px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)" }}
              >
                {p.date}
              </motion.div>

              {/* Gallery indicator badge - shows this image is clickable for gallery */}
              {p.hasGallery && (
                <motion.div 
                  className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                >
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-4">
              {/* Project Name */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {p.projectName}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed flex-1 line-clamp-3">{p.description}</p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-700">
                {p.tech.map((t, i) => (
                  <motion.span
                    key={i}
                    className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] md:text-xs font-medium rounded-md hover:bg-green-900/40 hover:text-green-400 transition-colors duration-200 cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons Section */}
              <div className="flex gap-3 pt-2">
                {/* Gallery Button - Always visible if hasGallery */}
                {p.hasGallery && (
                  <motion.button
                    onClick={() => onOpenGallery(p.galleryKey, p.projectName)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-sm font-medium text-white hover:bg-green-900/40 hover:border-green-400 hover:text-green-400 transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image size={18} className="group-hover/btn:rotate-3 transition-transform" />
                    <span>View Gallery</span>
                  </motion.button>
                )}

                {/* Live Link Button - Only shows if projectLink exists */}
                {p.projectLink && p.projectLink !== "#" && (
                  <motion.a
                    href={p.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-sm font-medium text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LinkIcon size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </motion.a>
                )}

                {/* If no gallery and no link, show a disabled state */}
                {!p.hasGallery && (!p.projectLink || p.projectLink === "#") && (
                  <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800/30 border border-zinc-700 rounded-lg text-sm font-medium text-zinc-500 cursor-not-allowed">
                    <span>No preview available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={false}
              whileHover={{
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}