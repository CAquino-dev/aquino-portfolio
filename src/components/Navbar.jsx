import React, { useState } from "react";
import { List, X } from "phosphor-react";
import image from "../assets/gameImage.png";

const navLinks = ["home", "about", "experience", "projects", "contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="text-white px-4 sm:px-8 md:px-20 py-4 md:py-5 flex justify-between items-center fixed w-full bg-background z-50 shadow-md shadow-black/50 border-b border-border">
      <div className="flex items-center">
        <p className="hidden md:block font-bold text-lg md:text-xl hover:text-green-400 cursor-pointer transition-colors duration-300">
          <a href="#home">@Christian Aquino</a>
        </p>
        <div className="md:hidden w-10 h-10 overflow-hidden rounded-lg">
          <img
            src={image}
            alt="Christian Aquino"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 text-base font-semibold">
          {navLinks.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-white hover:text-green-400 transition-colors duration-300 capitalize"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex items-center">
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-green-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-12 bg-card shadow-lg shadow-black/30 rounded-lg border border-border min-w-[180px] py-2 z-40">
              {navLinks.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className="block px-4 py-3 text-white hover:bg-green-950/30 hover:text-green-400 transition-colors duration-300 font-medium capitalize"
                  onClick={closeMenu}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}