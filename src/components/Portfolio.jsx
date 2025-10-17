import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";
import project11 from "../assets/project11.png";

const projects = [
  {
    id: 1,
    title: "CRM - rcgemini.com",
    description:
      "An enterprise-level CRM built for internal company use. Admin can manage customers, employees, assign tasks, send emails, handle complaints, and track expenses with a reporting system.",
    img: project11,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    site: "https://rcgemini.com",
    github: "#",
  },
  {
    id: 2,
    title: "WealthX",
    description:
      "A complete full-stack finance platform for users to buy plans, upload proof, and get admin approval. Built for a real client with both frontend and backend integration.",
    img: project10,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    site: "https://wealthx.live",
    github: "#",
  },
  {
    id: 3,
    title: "Kanban Task Manager",
    description:
      "A drag-and-drop task management app with backend persistence, allowing users to create, update, and track tasks efficiently.",
    img: project9,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    site: "https://tasks-managerr.netlify.app",
    github: "https://github.com/Manish-Yadav77/Task-Management-App",
  },
  {
    id: 4,
    title: "Kodu Frontend",
    description:
      "A real-world, production-ready UI built for Kodu. Developed for marketing and advertising campaigns and used in production.",
    img: project8,
    tech: ["React", "TailwindCSS"],
    site: "https://koducoding.netlify.app",
    github: "https://github.com/Manish-Yadav77/FrontendKodu",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Weather forecast application built with React and external API integration.",
    img: project1,
    tech: ["React", "API", "CSS"],
    site: "https://appsweathers.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Weather-App",
  },
  {
    id: 6,
    title: "Todo App",
    description: "A simple, responsive to-do app built with React and Hooks.",
    img: project2,
    tech: ["React", "TailwindCSS"],
    site: "https://appstodoos.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Todo-App",
  },
  {
    id: 7,
    title: "Simple Calculator",
    description: "A simple calculator made using HTML, CSS, and JavaScript.",
    img: project4,
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://simplestcalkulators.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Simple-Calculator",
  },
  {
    id: 8,
    title: "BMI Calculator",
    description:
      "A clean, responsive BMI calculator app built with JavaScript.",
    img: project5,
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://bmikalculator.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Bmi-calculator",
  },
  {
    id: 9,
    title: "Quotes Generator",
    description:
      "A simple quotes generator app made with HTML, CSS, and JavaScript.",
    img: project6,
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://generatorsquotess.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Quotes_Generator",
  },
];

const Portfolio = ({id}) => {
  return (
    <div className="max-w-[1300px] mx-auto p-6 md:p-20 min-h-screen" id={id}>
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
              My <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              A collection of full-stack, frontend, and backend projects built with passion, precision, and production quality.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-40 bg-gray-800 flex items-center justify-center overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-md font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 transition-all hover:scale-105"
                    >
                      <AiOutlineLink size={16} /> Visit
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-md hover:bg-gray-600 transition-all hover:scale-105"
                    >
                      <AiOutlineGithub size={16} /> Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-purple-500 transition-all duration-300" />

              {/* Shine Effect */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
