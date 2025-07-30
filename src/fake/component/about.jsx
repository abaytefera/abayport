import React from "react";
import profileImg from "../assets/profile.png"; // Replace with your actual image

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 lg:px-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Abay Tefera"
            className="w-64 h-64 rounded-full object-contain shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I'm <strong>Abay Tefera</strong>, a passionate <strong>Front-End Developer</strong> with a focus on building beautiful, user-friendly, and responsive web applications. I love turning ideas into real digital experiences. My goal is to craft websites that not only look good but also perform efficiently and solve real-world problems.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Technologies I work with:</h3>
            <ul className="flex flex-wrap gap-3 text-sm text-white font-medium">
              {["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git", "Firebase"].map((tech) => (
                <li key={tech} className="bg-gray-800 px-3 py-1 rounded-full">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
