import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/Dubai_Deck.png";
import project4 from "../assets/Medcare_Pharmacy_Website.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";
import project11 from "../assets/project11.png";
import project12 from "../assets/project12.png";
import project13 from "../assets/project13.png";
import projectPharma from "../assets/projectPharma.png";

const projects = [
  // ⭐ FEATURED PROJECT — BillPharma (Always #1)
  {
    id: 0,
    title: "BillPharma — AI Powered Pharmacy Management SaaS",
    description:
      "A production-grade multi-tenant pharmacy management platform built for modern medical stores and retail pharmacy chains. BillPharma handles GST-compliant billing, inventory & batch tracking, expiry alerts, profit/loss analytics, staff management, role-based access, offline-first invoice generation, and AI-assisted inventory forecasting. Designed with Indian pharmacy compliance in mind, including pharmacist validation, drug-license enforcement, FEFO inventory flow, and scalable SaaS architecture. Built end-to-end independently using a full MERN + TypeScript stack.",
    img: projectPharma,
    tech: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AI Integration",
      "Service Workers",
    ],
    site: "https://billpharma.netlify.app",
    github: "#", // Replace with actual GitHub link if public
    featured: true,
  },

  // 🆕 COMPANY WORK — 3D Interactive Frontend (job task project)
  {
    id: 1,
    title: "Dubai Deck — 3D Interactive Landing Experience",
    description:
      "A visually immersive 3D-inspired frontend experience featuring modern UI/UX, smooth animations, responsive layouts, and interactive design. Built with a focus on clean architecture, performance optimization, and delivering a premium user experience across devices.",
    img: project3,
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"],
    site: "https://dubaideck.netlify.app/",
    github: "https://github.com/Manish-Yadav77/DubaiMall_ImmersiveSalesExperience",
    featured: false,
  },

  // 🆕 COMPANY WORK — Pharmacy Website (separate from BillPharma SaaS)
  {
    id: 2,
    title: "Pharmacy Website — Business Landing & Catalog",
    description:
      "Built a responsive healthcare business website with a modern interface, product catalog, service information, and customer engagement features, focusing on usability, performance, and a seamless browsing experience across devices.",
    img: project4,
    tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Web Design"],
    site: "https://medcarespharmacy.netlify.app/",
    github: "#",
    featured: false,
  },

  // 💤 SIDE PROJECT — placeholder, edit manually later
  // {
  //   id: 3,
  //   title: "New Side Project — Edit Me",
  //   description: "Placeholder entry for a future side project. Replace title, description, tech, links, and image with real details.",
  //   img: project1, // TODO: replace with real screenshot import
  //   tech: ["Tech1", "Tech2"],
  //   site: "#",
  //   github: "#",
  //   featured: false,
  // },

  {
    id: 4,
    title: "CRM System",
    description:
      "An enterprise-grade CRM platform for managing customers, employees, tasks, and finances with analytics, automation, and role-based access.",
    img: project11,
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    site: "https://rcgemini-crm.netlify.app",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "WealthX",
    description:
      "A secure finance management system that lets users buy plans, upload proofs, and get real-time admin verification with full-stack integration.",
    img: project10,
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    site: "https://rcgemini-wealthx.netlify.app",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Kanban Task Manager",
    description:
      "A drag-and-drop productivity app for managing daily tasks with backend persistence, analytics, and a seamless user interface.",
    img: project9,
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    site: "https://tasks-managerr.netlify.app",
    github: "https://github.com/Manish-Yadav77/Task-Management-App",
    featured: false,
  },
  {
    id: 7,
    title: "Kodu Frontend",
    description:
      "A responsive, production-ready marketing UI for Kodu campaigns focused on performance, scalability, and modern design principles.",
    img: project8,
    tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Web Design"],
    site: "https://koducoding.netlify.app",
    github: "https://github.com/Manish-Yadav77/FrontendKodu",
    featured: false,
  },
  {
    id: 8,
    title: "Coding-Class Next.js",
    description:
      "A simple learning platform built as my first Next.js project. Learned Next.js, TypeScript, and Aceternity UI while creating pages for Home, Courses, and Contact.",
    img: project13,
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Aceternity UI"],
    site: "https://coding-clas.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Coding-Classes-next.js",
    featured: false,
  },
  {
    id: 9,
    title: "Infinity Chat",
    description:
      "A full-stack AI chatbot inspired by ChatGPT, featuring Gemini API integration, authentication, chat history, and a modern responsive interface.",
    img: project12,
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
    ],
    site: "https://infinitychat7.netlify.app/",
    github: "https://github.com/Manish-Yadav77/InfinityChat",
    featured: false,
  },
  {
    id: 10,
    title: "Weather App",
    description:
      "A clean and elegant weather forecast app fetching live data via API with a fully responsive React UI.",
    img: project1,
    tech: ["React.js", "API", "CSS"],
    site: "https://appsweathers.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Weather-App",
    featured: false,
  },
  {
    id: 11,
    title: "Todo App",
    description:
      "A minimalistic and responsive task tracker built with React Hooks and Tailwind CSS for efficient daily planning.",
    img: project2,
    tech: ["React.js", "Tailwind CSS"],
    site: "https://appstodoos.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Todo-App",
    featured: false,
  },
  {
    id: 12,
    title: "BMI Calculator",
    description:
      "An interactive BMI calculator that instantly computes and displays health metrics with clean responsive design.",
    img: project5,
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://bmikalculator.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Bmi-calculator",
    featured: false,
  },
  {
    id: 13,
    title: "Quotes Generator",
    description:
      "A lightweight and dynamic quote generator that displays random motivational quotes using JavaScript and clean UI.",
    img: project6,
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://generatorsquotess.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Quotes_Generator",
    featured: false,
  },
];

const Portfolio = ({ id }) => {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-[1300px] mx-auto p-6 md:p-20 min-h-screen" id={id}>
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
              My <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              A collection of full-stack, frontend, and backend projects built
              with passion, precision, and production quality.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ⭐ FEATURED PROJECT — Full Width Hero Card */}
      {featuredProject && (
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-12 bg-gradient-to-br from-purple-900/40 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 group"
          >
            {/* Featured Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                ⭐ Featured Project
              </span>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Project Image — Left Side */}
              <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-800 flex items-center justify-center overflow-hidden">
                <motion.img
                  src={featuredProject.img}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content — Right Side */}
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-800/60 rounded-lg p-3 text-center">
                    <p className="text-purple-400 text-lg font-bold">SaaS</p>
                    <p className="text-gray-400 text-xs">Multi-Tenant</p>
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-3 text-center">
                    <p className="text-purple-400 text-lg font-bold">
                      Offline
                    </p>
                    <p className="text-gray-400 text-xs">First Billing</p>
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-3 text-center">
                    <p className="text-purple-400 text-lg font-bold">AI</p>
                    <p className="text-gray-400 text-xs">Powered Inventory</p>
                  </div>
                  <div className="bg-gray-800/60 rounded-lg p-3 text-center">
                    <p className="text-purple-400 text-lg font-bold">GST</p>
                    <p className="text-gray-400 text-xs">Compliant Billing</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs px-3 py-1.5 rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {featuredProject.site && (
                    <a
                      href={featuredProject.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                    >
                      <AiOutlineLink size={18} /> Live Demo
                    </a>
                  )}
                  {featuredProject.github && featuredProject.github !== "#" && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white text-sm font-bold rounded-lg hover:bg-gray-600 transition-all hover:scale-105"
                    >
                      <AiOutlineGithub size={18} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-500 pointer-events-none" />
          </motion.div>
        </Reveal>
      )}

      {/* Other Projects — Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((project, index) => (
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
              <div className="p-6 relative z-10 pointer-events-auto">
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
                <div className="flex gap-3 pointer-events-auto">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 transition-all hover:scale-105 cursor-pointer"
                    >
                      <AiOutlineLink size={16} /> Visit
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-md hover:bg-gray-600 transition-all hover:scale-105 cursor-pointer"
                    >
                      <AiOutlineGithub size={16} /> Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-purple-500 transition-all duration-300 pointer-events-none" />

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