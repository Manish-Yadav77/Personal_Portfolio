import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row gap-6 text-gray-400 text-4xl">
      <a
        href="https://github.com/Manish-Yadav77"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>

      <a
        href="https://www.linkedin.com/in/manish-yadav-fullstack-mern/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl"
      >
        in
      </a>

      <a
        href="https://instagram.com/manish_yadav77"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Footer;
