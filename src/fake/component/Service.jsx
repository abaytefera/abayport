import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faMobileAlt,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faLaptopCode,
    title: "Web Development",
    description: "Build fast, responsive, and SEO-friendly websites using React and Next.js.",
  },
  {
    icon: faMobileAlt,
    title: "Responsive Design",
    description: "Design websites that look great on desktops, tablets, and mobile devices.",
  },

  {
    icon: faCode,
    title: "Custom Components",
    description: "Develop reusable components for scalable front-end architectures.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20 px-6 lg:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Services</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
