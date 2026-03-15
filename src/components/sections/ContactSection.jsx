import React from "react";
import { LinkedinLogo, GithubLogo, Envelope, MapPin } from "phosphor-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-8 md:px-20 py-16 md:py-28 border-t border-gray-600 font-poppins bg-white"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-2xl md:text-4xl mb-6 font-[600] text-gray-800">
            Let's work together!
          </p>
          <p className="text-gray-600 mb-12 text-lg md:text-xl leading-relaxed max-w-2xl">
            Have a project idea, question, or opportunity? Feel free to reach out
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-2xl">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <Envelope
                    size={28}
                    className="text-green-600 group-hover:text-white"
                    weight="duotone"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Email Me
                </h3>
                <a
                  href="mailto:caquino.dev@gmail.com"
                  className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors duration-300"
                >
                  caquino.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <MapPin
                    size={28}
                    className="text-green-600 group-hover:text-white"
                    weight="duotone"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Based In
                </h3>
                <p className="text-gray-700 font-medium text-lg">
                  Cavite, Philippines
                </p>
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
                  <LinkedinLogo
                    size={28}
                    weight="duotone"
                    className="group-hover:text-white"
                  />
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
                  <GithubLogo
                    size={28}
                    weight="duotone"
                    className="group-hover:text-white"
                  />
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
  );
}