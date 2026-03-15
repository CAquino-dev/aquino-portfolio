import React, { useState } from "react";
import { List, X } from "phosphor-react";
import image from "../assets/gameImage.png";

const navLinks = ["home", "about", "experience", "projects", "contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="text-black px-4 sm:px-8 md:px-20 py-4 md:py-5 flex justify-between items-center fixed w-full bg-white z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <p className="hidden md:block font-bold text-lg md:text-xl hover:text-green-600 cursor-pointer">
          @Christian Aquino
        </p>
        <div className="md:hidden w-10 h-10 overflow-hidden rounded-lg">
          <img
            src={image}
            alt="Christian Aquino"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-base font-semibold">
        {navLinks.map((s) => (
          <li key={s}>
            <a
              href={`#${s}`}
              className="hover:text-green-600 transition-colors duration-300 capitalize"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative">
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[180px] py-2 z-40">
            {navLinks.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors duration-300 font-medium capitalize"
                onClick={closeMenu}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}