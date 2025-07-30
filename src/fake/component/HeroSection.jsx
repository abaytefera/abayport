import React from "react";
import profileImg from "../assets/profile.png"; // Make sure this exists
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-yellow-100 to-white py-20 px-6 lg:px-0"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-gray-500 text-lg mb-2">Hi there 👋</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-4">
            I’m <span className="text-blue-600">Abay Tefera</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
            Front-End Developer 
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            I design and develop modern, fast, and responsive websites using
            React, Tailwind CSS, and Next.js. I love turning ideas into clean,
            functional experiences.
          </p>
          <Link
          to={"/workpage"}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImg}
            alt="Abay Tefera"
            className="w-72 h-72 object-contain rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
