import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Abay Tefera</h1>
          <p className="text-sm text-gray-400">Front-End Developer</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm mb-4 md:mb-0">
          <li>
            <Link  to="/aboutpage" className="hover:text-blue-400 duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/workpage"   className="hover:text-blue-400 duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link  to="/contactpage" className="hover:text-blue-400 duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="abaytefera29@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
         
          <a href="https://github.com/abaytefera" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Abay Tefera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
