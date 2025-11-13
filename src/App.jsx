import React from "react";
import kuri from "./assets/kuri.jpg";
import DUV from "./assets/DUV.png";
import image from "./assets/gameImage.png";
import WorldPeas from "./assets/WorldPeas.png";
import TripleJs from "./assets/TripleJs.png";
import { LinkedinLogo, GithubLogo, Envelope, MapPin } from "phosphor-react";

function App() {
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

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <nav className="text-black px-4 sm:px-8 md:px-20 py-4 md:py-5 flex justify-between items-center fixed w-full bg-white z-50 shadow-md">
        <p className="font-bold text-lg md:text-xl hover:text-green-600 cursor-pointer">
          @Christian Aquino
        </p>
        <ul className="flex gap-4 md:gap-8 text-sm md:text-base font-semibold md:text-[20px]">
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
              As an aspiring web developer, I'm passionate about creating engaging
              online experiences. I'm constantly learning and experimenting with
              coding languages like <span className="font-semibold">HTML</span>,{" "}
              <span className="font-semibold">CSS</span>, and{" "}
              <span className="font-semibold">JavaScript</span> to bring ideas to life
              on the web. With a keen eye for design and a love for problem-solving,
              I'm excited to delve deeper into the world of web development and
              contribute my creativity to the digital realm.
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
        {/* Header */}
        <div className="h-auto md:h-[120px] w-full flex justify-start md:justify-end items-center border-b border-gray-600 py-4 md:py-0 mb-8 md:mb-16">
          <h1 className="text-4xl md:text-7xl font-[800] pb-3">get in touch.</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Left side - contact info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-2xl md:text-3xl mb-5 font-[600] text-gray-800">Let's work together!</p>
            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
              Have a project idea, question, or opportunity? Feel free to reach out
              — I'd love to connect and discuss how we can bring your ideas to life.
            </p>

            <div className="space-y-4 text-base md:text-lg">
              <div className="flex items-center gap-3">
                <Envelope size={24} className="text-green-600" weight="duotone" />
                <span className="text-gray-800 font-medium">caquino.dev@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-green-600" weight="duotone" />
                <span className="text-gray-800 font-medium">Cavite, Philippines</span>
              </div>
            </div>

            {/* Social Links with Icons */}
            <div className="mt-8 flex gap-6">
              <a 
                href="https://www.linkedin.com/in/christian-aquino-189945383/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-300 group"
              >
                <LinkedinLogo size={24} weight="duotone" />
                <span className="text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300">
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://github.com/CAquino-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-300 group"
              >
                <GithubLogo size={24} weight="duotone" />
                <span className="text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Right side - contact form */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition-all duration-300 text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition-all duration-300 text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-vertical"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl max-w-fit flex items-center gap-2"
              >
                <Envelope size={20} weight="duotone" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;