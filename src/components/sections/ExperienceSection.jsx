import React from "react";

const fgpResponsibilities = [
  <>
    Maintained and enhanced a{" "}
    <span className="font-semibold">React.js + TypeScript</span> codebase
    following existing architecture and coding standards.
  </>,
  <>
    Developed{" "}
    <span className="font-semibold">reusable, component-based UI features</span>{" "}
    to improve scalability and maintainability.
  </>,
  <>
    Integrated UI animations using{" "}
    <span className="font-semibold">ReactBits</span>, increasing user engagement
    and visual appeal.
  </>,
  <>
    Designed and implemented a{" "}
    <span className="font-semibold">dynamic logo marquee</span> to showcase
    partner brands.
  </>,
  <>
    Built a <span className="font-semibold">Partners page</span> and{" "}
    <span className="font-semibold">Contact Us module</span> with form handling
    and validation.
  </>,
  <>
    Collaborated with{" "}
    <span className="font-semibold">cross-functional teams</span> to translate
    business requirements into responsive web interfaces.
  </>,
];

const kwaniiResponsibilities = [
  <>
    Learned fundamental game development concepts using{" "}
    <span className="font-semibold">Unity and C#</span>, including scene
    management, game objects, scripting, physics, and UI systems.
  </>,
  <>
    Developed <span className="font-semibold">small prototype games</span> to
    understand gameplay mechanics, object interactions, and event-driven
    programming.
  </>,
  <>
    Implemented{" "}
    <span className="font-semibold">
      basic player controls, collision detection, and simple game logic
    </span>{" "}
    using C#.
  </>,
  <>
    Used{" "}
    <span className="font-semibold">Microsoft Power Automate</span> to automate
    repetitive company email-sending tasks, improving workflow efficiency and
    reducing manual work.
  </>,
];

const fgpTechStack = [
  "React.js",
  "TypeScript",
  "ReactBits",
  "UI/UX",
  "Responsive Design",
  "Git",
];

const kwaniiTechStack = [
  "Unity",
  "C#",
  "Game Development",
  "Power Automate",
  "Prototyping",
  "Git",
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-4 sm:px-8 md:p-20 min-h-screen font-poppins"
    >
      {/* Header */}
      <div className="h-auto md:h-[120px] w-full flex justify-start items-center md:pr-15 border-b border-gray-600 py-4 md:py-0">
        <h1 className="text-4xl md:text-7xl font-[800] pb-3">
          professional experience.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Timeline Index */}
        <div className="md:w-1/3 w-full font-poppins py-8 md:py-12 md:sticky md:top-28 md:h-[calc(100vh-7rem)] md:overflow-y-auto">
          <p className="text-2xl md:text-4xl font-[700] mb-6">timeline.</p>
          <ul className="flex flex-row md:flex-col gap-4 md:gap-5 text-base md:text-lg overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            <li className="flex-shrink-0 md:flex-shrink">
              <a
                href="#exp-fgp"
                className="hover:text-green-600 transition-colors duration-300 whitespace-nowrap"
              >
                /2025-2026 FGP Trading
              </a>
            </li>
            <li className="flex-shrink-0 md:flex-shrink">
              <a
                href="#exp-kwanii"
                className="hover:text-green-600 transition-colors duration-300 whitespace-nowrap"
              >
                /Feb 2026 Kwanii Inc.
              </a>
            </li>
            <li className="flex-shrink-0 md:flex-shrink opacity-60">
              <span className="whitespace-nowrap cursor-default">
                /More experiences coming soon...
              </span>
            </li>
          </ul>
        </div>

        {/* Experience Details */}
        <div className="md:w-2/3 w-full p-4 md:p-10 md:border-l border-gray-600 flex flex-col gap-16 md:gap-28">
          {/* FGP Trading Experience */}
          <div id="exp-fgp" className="w-full scroll-mt-24 md:scroll-mt-32">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row py-4 px-4 md:px-8 items-start md:items-center border-b-2 border-gray-600 border-dashed gap-3 md:gap-0">
              <div className="flex gap-4 md:gap-10 items-center flex-1">
                <div>
                  <p className="text-lg md:text-[25px] font-bold">
                    Frontend Developer Intern
                  </p>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    FGP Fortunegod Philippines Trading Inc.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    2025 - 2026
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[8px] md:text-[10px]">
                {fgpTechStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 md:px-3 py-1 bg-black text-white font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="w-full px-4 md:px-8 py-5">
              <div className="pb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                  Key Responsibilities & Achievements:
                </p>
                <ul className="space-y-4">
                  {fgpResponsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="min-w-[8px] h-[8px] bg-green-600 rounded-full mt-2 mr-3" />
                      <p className="leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Kwanii Inc. Experience */}
          <div id="exp-kwanii" className="w-full scroll-mt-24 md:scroll-mt-32">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row py-4 px-4 md:px-8 items-start md:items-center border-b-2 border-gray-600 border-dashed gap-3 md:gap-0">
              <div className="flex gap-4 md:gap-10 items-center flex-1">
                <div>
                  <p className="text-lg md:text-[25px] font-bold">
                    Information Technology Intern
                  </p>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    Kwanii Inc.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    Feb 2026 - March 2026
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[8px] md:text-[10px]">
                {kwaniiTechStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 md:px-3 py-1 bg-black text-white font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="w-full px-4 md:px-8 py-5">
              <div className="pb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                  Key Responsibilities & Achievements:
                </p>
                <ul className="space-y-4">
                  {kwaniiResponsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="min-w-[8px] h-[8px] bg-green-600 rounded-full mt-2 mr-3" />
                      <p className="leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}