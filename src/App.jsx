import React, { useState } from "react";
import kuri from "./assets/kuri.jpg";
import DUV from "./assets/DUV.png";
import image from "./assets/gameImage.png";
import WorldPeas from "./assets/WorldPeas.png";
import TripleJs from "./assets/TripleJs.png";
import { LinkedinLogo, GithubLogo, Envelope, MapPin, List, X } from "phosphor-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      date: "2025",
      projectName: "DUV Engineers",
      projectImg: DUV,
      description: "DUV Engineers is an ERP Web-based project made for an engineering company here in the Philippines.",
      tech: ["ReactJs", "TailwindCSS", "Express", "NodeJs", "MySQL"],
    },
    {
      date: "2023",
      projectName: "Triple J's",
      projectImg: TripleJs,
      description: `TripleJs is an e-commerce website for pet food and supplies, 
      featuring a user-friendly shopping experience. 
      It includes an admin dashboard for easy product management, inventory updates, 
      and order tracking—making it a complete solution for modern pet retail.`,
      tech: ["ReactJs", "CSS", "MySQL", "NodeJs", "Express"],
    },
    {
      date: "2022",
      projectName: "WorldPeas",
      projectImg: WorldPeas,
      description: `WorldPeas is a practice e-commerce project built to simulate a real online marketplace, 
      it focuses on clean design, smooth shopping experiences, and efficient product management.`,
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <nav className="text-black px-4 sm:px-8 md:px-20 py-4 md:py-5 flex justify-between items-center fixed w-full bg-white z-50 shadow-md">
        {/* Desktop: Show text, Mobile: Show image */}
        <div className="flex items-center">
          {/* Desktop Text */}
          <p className="hidden md:block font-bold text-lg md:text-xl hover:text-green-600 cursor-pointer">
            @Christian Aquino
          </p>
          {/* Mobile Image */}
          <div className="md:hidden w-10 h-10 overflow-hidden rounded-lg">
            <img
              src={image}
              alt="Christian Aquino"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-base font-semibold">
          <li>
            <a href="#home" className="hover:text-green-600 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-600 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-600 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-600 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[180px] py-2 z-40">
              <a
                href="#home"
                className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 md:pt-28 pb-20 md:pb-48 px-4 sm:px-8">
        <div className='flex flex-col md:flex-row items-center'>
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] flex items-center justify-center order-2 md:order-1">
                <div className="w-80 h-80 md:w-130 md:h-130 overflow-hidden">
                    <img
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-300 hover:-rotate-5 hover:scale-90"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-center gap-4 md:gap-[15px] order-1 md:order-2 text-center md:text-left mb-8 md:mb-0">
                <p className='text-2xl md:text-3xl font-bold'>Hello, I go by Christian!</p>
                <p className='text-3xl md:text-5xl font-extrabold leading-tight'>
                  I <span className='text-green-600'>Design</span> And <span className='text-green-600'>Develop</span> Websites
                </p>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-white min-h-screen flex items-center px-4 sm:px-8 md:px-20 py-16 md:py-28 font-poppins"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
          {/* Left Side Text */}
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <p className="text-5xl md:text-8xl font-[700] pb-3 leading-none">about.</p>
            <p className="text-green-600 text-xl md:text-2xl font-[500] pb-6 md:pb-8">
              _Who am I and what I do
            </p>
            <p className="pb-5 text-base md:text-lg leading-relaxed text-gray-700">
              I am currently a fourth-year student studying at the{" "}
              <span className="font-semibold">
                National College of Science and Technology
              </span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              As an aspiring full-stack developer, 
              I'm passionate about building smooth and engaging web experiences. 
              I'm constantly learning and improving my skills using technologies like  
              <span className="font-semibold"> React.js</span>, <span className="font-semibold"> Node.js</span>, 
              <span className="font-semibold"> Express</span>, and <span className="font-semibold">MySQL </span> 
              to bring ideas to life on the web. With a strong focus on clean design, functionality, and problem-solving,
              I'm excited to dive deeper into real-world development and create meaningful solutions in the digital space.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="w-full max-w-[300px] md:max-w-[600px] h-[300px] md:h-[600px] overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.4)]">
              <img
                src={kuri}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-8 md:p-20 min-h-screen font-poppins">
        {/* Header */}
        <div className="h-auto md:h-[120px] w-full flex justify-start md:justify-end items-center md:pr-15 border-b border-gray-600 py-4 md:py-0">
          <h1 className="text-4xl md:text-7xl font-[800] pb-3">personal projects.</h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* INDEX SIDE */}
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

          {/* PROJECT DETAILS SIDE */}
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
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 bg-black text-white font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description + Image */}
                <div className="w-full px-4 md:px-8 py-5">
                  <p className="pb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                    {p.description}
                  </p>
                  <div className="w-full h-[250px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={p.projectImg}
                      alt={p.projectName}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-8 md:px-20 py-16 md:py-28 border-t border-gray-600 font-poppins bg-white">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-2xl md:text-4xl mb-6 font-[600] text-gray-800">Let's work together!</p>
            <p className="text-gray-600 mb-12 text-lg md:text-xl leading-relaxed max-w-2xl">
              Have a project idea, question, or opportunity? Feel free to reach out
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-2xl">
              {/* Email Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                    <Envelope size={28} className="text-green-600 group-hover:text-white" weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Me</h3>
                  <a 
                    href="mailto:caquino.dev@gmail.com" 
                    className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors duration-300"
                  >
                    caquino.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                    <MapPin size={28} className="text-green-600 group-hover:text-white" weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Based In</h3>
                  <p className="text-gray-700 font-medium text-lg">Cavite, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <p className="text-gray-600 mb-6 text-lg">Or connect with me on</p>
              <div className="flex gap-8 justify-center">
                <a 
                  href="https://www.linkedin.com/in/christian-aquino-189945383/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 text-gray-600 hover:text-green-600 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                    <LinkedinLogo size={28} weight="duotone" className="group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">
                    LinkedIn
                  </span>
                </a>
                <a 
                  href="https://github.com/CAquino-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 text-gray-600 hover:text-green-600 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                    <GithubLogo size={28} weight="duotone" className="group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;