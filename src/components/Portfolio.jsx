import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
  img: project9,
  title: "Kanban Task Manager",
  description:
    "An internship project developed using a Kanban board system with drag-and-drop functionality. The app allows users to create, update, and manage tasks efficiently, with backend support to store user data persistently.",
  links: {
    site: "https://tasks-managerr.netlify.app",
    github: "https://github.com/Manish-Yadav77/Task-Management-App",
  },
},
  {
    img: project8,
    title: "Kodu Frontend",
    description:
      "A real-world, production-ready frontend UI built using React.js as part of my internship project at Kodu. This application was developed for marketing and promotional purposes, and is currently live and being actively used in advertising campaigns.",
    links: {
      site: "https://koducoding.netlify.app",
      github: "https://github.com/Manish-Yadav77/FrontendKodu",
    },
  },
  {
    img: project1,
    title: "Weather App ",
    description: "UI for frontend development using React.",
    links: {
      site: "https://appsweathers.netlify.app/",
      github: "https://github.com/Manish-Yadav77/Weather-App",
    },
  },
  {
    img: project2,
    title: "Todo App",
    description: " A simple to-do list application built with React.",
    links: {
      site: "https://appstodoos.netlify.app/",
      github: "https://github.com/Manish-Yadav77/Todo-App",
    },
  },
  {
    img: project4,
    title: "Simple Calculator",
    description:
      "A simple calculator application using HTMl, CSS and JavaScript.",
    links: {
      site: "https://simplestcalkulators.netlify.app/",
      github: "https://github.com/Manish-Yadav77/Simple-Calculator",
    },
  },
  {
    img: project5,
    title: "BMI Calculator",
    description: "A BMI calculator application using HTML, CSS and JavaScript.",
    links: {
      site: "https://bmikalculator.netlify.app/",
      github: "https://github.com/Manish-Yadav77/Bmi-calculator",
    },
  },
  {
    img: project6,
    title: "Quotes Generator",
    description:
      "A simple quotes generator application using HTML, CSS and JavaScript.",
    links: {
      site: "https://generatorsquotess.netlify.app/",
      github: "https://github.com/Manish-Yadav77/Quotes_Generator",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
