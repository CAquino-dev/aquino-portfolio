import React from "react";
import kuri from "../../assets/kuri.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white min-h-screen flex items-center px-4 sm:px-8 md:px-20 py-16 md:py-28 font-poppins"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
        {/* Text */}
        <div className="md:w-1/2 w-full order-2 md:order-1">
          <p className="text-5xl md:text-8xl font-[700] pb-3 leading-none">about.</p>
          <p className="text-green-600 text-xl md:text-2xl font-[500] pb-6 md:pb-8">
            _Who am I and what I do
          </p>
          <p className="pb-5 text-base md:text-lg leading-relaxed text-gray-700">
            I am currently a fourth-year student studying at the{" "}
            <span className="font-semibold">
              National College of Science and Technology
            </span>
            .
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            As an aspiring full-stack developer, I'm passionate about building
            smooth and engaging web experiences. I'm constantly learning and
            improving my skills using technologies like
            <span className="font-semibold"> React.js</span>,{" "}
            <span className="font-semibold"> Node.js</span>,{" "}
            <span className="font-semibold"> Express</span>, and{" "}
            <span className="font-semibold">MySQL </span>
            to bring ideas to life on the web. With a strong focus on clean
            design, functionality, and problem-solving, I'm excited to dive
            deeper into real-world development and create meaningful solutions
            in the digital space.
          </p>
        </div>

        {/* Image */}
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
  );
}