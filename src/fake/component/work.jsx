import React from "react";

const projects = [
  {
    title: "out of the ashe",
    description: "out of the ashe organazation website store child information built with React and Tailwind CSS. login Email:abaytefera92@gmail.com password:12345678. ",
    tech: ["React", "Tailwind CSS", "Vite"],
   video: "Videoone.mp4", // Add actual image to your public/assets folder
    live: "https://abay-out-of-ashe.vercel.app/",
    github: "https://github.com/abaytefera/abay-out-of-ashe.git",
  },
  {
    title: "E-commerce Store",
    description: "Fully functional shopping site with product built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", ],
    image: "eco.png",
    live: "https://abay-eco.vercel.app/",
    github: "https://github.com/abaytefera/abayEco.git",
  },
  {
    title: "personal portfolio",
    description: "It is a personal portfolio built with React and Tailwind CSS",
    tech: [ "Tailwind CSS", "React"],
    image: "person2.png",
    live: "https://abayport.vercel.app/",
    github: "https://github.com/abaytefera/abayport.git",
  },
];

const Work = () => {
  return (
    <section id="work" className="bg-white py-20 px-6 lg:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Work</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
           {  project.image ?( <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />):(
   <video
  controls
  autoPlay
  muted
  loop
  className="w-full h-auto rounded-lg shadow-md"
>
  <source src={project.video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
              )}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-gray-600 px-4 py-2 rounded hover:bg-gray-900 transition"
                  >
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
