import React from "react";
import image from "../../assets/gameImage.png";

export default function HomeSection() {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-20 md:pb-48 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-center">
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
          <p className="text-2xl md:text-3xl font-bold">Hello, I go by Christian!</p>
          <p className="text-3xl md:text-5xl font-extrabold leading-tight">
            I <span className="text-green-600">Design</span> And{" "}
            <span className="text-green-600">Develop</span> Websites
          </p>
        </div>
      </div>
    </section>
  );
}