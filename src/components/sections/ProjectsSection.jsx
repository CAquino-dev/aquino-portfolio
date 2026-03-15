import React from "react";
import { ArrowRight } from "phosphor-react";
import { projects } from "../../data/projects";

export default function ProjectsSection({ onOpenGallery }) {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 md:p-20 min-h-screen font-poppins"
    >
      {/* Header */}
      <div className="h-auto md:h-[120px] w-full flex justify-start md:justify-end items-center md:pr-15 border-b border-gray-600 py-4 md:py-0">
        <h1 className="text-4xl md:text-7xl font-[800] pb-3">personal projects.</h1>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Index */}
        <div className="md:w-1/3 w-full font-poppins py-8 md:py-12 md:sticky md:top-28 md:h-[calc(100vh-7rem)] md:overflow-y-auto">
          <p className="text-2xl md:text-4xl font-[700] mb-6">index.</p>
          <ul className="flex flex-row md:flex-col gap-4 md:gap-5 text-base md:text-lg overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            {projects.map((p, index) => (
              <li key={index} className="flex-shrink-0 md:flex-shrink">
                <a
                  href={`#project-${index}`}
                  className="hover:text-green-600 transition-colors duration-300 whitespace-nowrap"
                >
                  /{p.date} {p.projectName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Details */}
        <div className="md:w-2/3 w-full p-4 md:p-10 md:border-l border-gray-600 flex flex-col gap-16 md:gap-28">
          {projects.map((p, index) => (
            <div id={`project-${index}`} key={index} className="w-full scroll-mt-24 md:scroll-mt-32">
              {/* Header Row */}
              <div className="flex flex-col md:flex-row py-4 px-4 md:px-8 items-start md:items-center border-b-2 border-gray-600 border-dashed gap-3 md:gap-0">
                <div className="flex gap-4 md:gap-10 items-center flex-1">
                  <p className="text-sm md:text-base">/{p.date}</p>
                  <p className="text-lg md:text-[25px] font-bold">{p.projectName}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[8px] md:text-[10px]">
                  {p.tech.map((t, i) => (
                    <span key={i} className="px-2 md:px-3 py-1 bg-black text-white font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description + Image */}
              <div className="w-full px-4 md:px-8 py-5">
                <p className="pb-5 text-gray-700 leading-relaxed text-sm md:text-base">{p.description}</p>

                {p.hasGallery ? (
                  <div
                    onClick={() => onOpenGallery(p.galleryKey, p.projectName)}
                    className="relative w-full h-[250px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  >
                    <img
                      src={p.projectImg}
                      alt={p.projectName}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-semibold px-5 py-2.5 rounded-full text-sm shadow-lg flex items-center gap-2">
                        <span>View Screenshots</span>
                        <ArrowRight size={16} weight="bold" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-[250px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={p.projectImg}
                      alt={p.projectName}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}