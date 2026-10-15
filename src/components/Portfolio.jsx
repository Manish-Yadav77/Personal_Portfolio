import React, { useState } from "react";
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
import projectPharma from "../assets/projectPharma2.png";
import CV_Automation from "../assets/CV_Automation.png";
import Gmail_Automation from "../assets/Gmail_Automation.png";

const projects = [
  // ⭐ FEATURED PROJECT 1 — BillPharma
  {
    id: 0,
    title: "BillPharma - Multi-Tenant Pharmacy SaaS & Billing",
    description:
      "A full-stack pharmacy management platform built for medical stores and pharmacy retail chains. BillPharma supports GST billing, offline-first invoice printing using Service Workers, role-based access control, batch tracking, FEFO inventory management, and AI inventory predictions. Integrated Razorpay Payment Gateway in Test Mode using key ID and secret for live subscription test checkouts and automated invoice payment collection.",
    img: projectPharma,
    category: "fullstack",
    tech: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "Service Workers",
      "Tailwind CSS",
    ],
    site: "https://billpharma.netlify.app",
    github: "#",
    featured: true,
  },

  // ⭐ FEATURED PROJECT 2 — WealthX
  {
    id: 1,
    title: "WealthX - Funded Trader & Prop Trading Platform",
    description:
      "Built a full-stack prop trading evaluation platform for a client to manage funded trader challenges ranging from 3.5 Lakh to 50 Lakh capital accounts. Engineered client-facing evaluation rule tracking (daily loss limits, maximum drawdown, profit targets), dynamic challenge plan selection, user wallet deposit processing, payment receipt uploads with real-time admin approval workflows, and automated profit payout tracking.",
    img: project10,
    category: "fullstack",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST API",
    ],
    site: "https://rcgemini-wealthx.netlify.app",
    github: "#",
    featured: true,
  },

  // ⭐ FEATURED PROJECT 3 — n8n ATS CV Automation (Featured n8n Workflow)
  {
    id: 2,
    title: "WhatsApp ATS CV Generator & PDF Automation",
    description:
      "An automated n8n workflow triggered via WhatsApp webhooks. Receives raw job descriptions from recruiters, runs an AI Agent to extract key requirements and reformat candidate experience under strict ATS rules, converts structured JSON into clean HTML via JavaScript, calls a Render-hosted PDF generation microservice, and auto-delivers the tailored CV back to WhatsApp.",
    img: CV_Automation,
    category: "automation",
    tech: [
      "n8n Workflows",
      "WhatsApp Cloud API",
      "OpenAI / Kimi API",
      "JavaScript",
      "HTML/CSS PDF Engine",
    ],
    site: "#",
    github: "https://github.com/Manish-Yadav77/n8n-automation-workflows",
    featured: true,
  },

  // 🤖 SIMPLE N8N WORKFLOW (In Grid)
  {
    id: 14,
    title: "Gmail AI Email Classifier & Recruiter Auto-Responder",
    description:
      "An automated email inbox management workflow polling Gmail every minute. Uses NVIDIA NIM LLM models to classify incoming emails into 5 priority categories (Urgent Interviews, Job Matches, Application Status, OutSkill, Promo), creates and assigns Gmail labels, auto-drafts polite candidate responses, and pushes real-time WhatsApp alerts.",
    img: Gmail_Automation,
    category: "automation",
    tech: [
      "n8n Workflows",
      "Gmail Trigger API",
      "NVIDIA NIM API",
      "WhatsApp Cloud API",
      "JavaScript",
    ],
    site: "#",
    github: "https://github.com/Manish-Yadav77/n8n-automation-workflows",
    featured: false,
  },

  // Other Projects
  {
    id: 3,
    title: "Dubai Deck - 3D Interactive Landing Experience",
    description:
      "A 3D-inspired landing interface featuring interactive elements, smooth motion animations, responsive layouts, and performance optimizations across devices.",
    img: project3,
    category: "frontend",
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"],
    site: "https://dubaideck.netlify.app/",
    github: "https://github.com/Manish-Yadav77/DubaiMall_ImmersiveSalesExperience",
    featured: false,
  },
  {
    id: 4,
    title: "Pharmacy Website - Business Landing & Catalog",
    description:
      "Healthcare business site with a product catalog, service listings, customer contact forms, and responsive design for medical outlets.",
    img: project4,
    category: "frontend",
    tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    site: "https://medcarespharmacy.netlify.app/",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "CRM System",
    description:
      "An internal business CRM platform for tracking client tasks, lead pipelines, employee responsibilities, and performance feeds with role-based access.",
    img: project11,
    category: "fullstack",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
    ],
    site: "https://rcgemini-crm.netlify.app",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Kanban Task Manager",
    description:
      "A drag and drop productivity tool for organizing project pipelines with backend task saving and clean status boards.",
    img: project9,
    category: "fullstack",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    site: "https://tasks-managerr.netlify.app",
    github: "https://github.com/Manish-Yadav77/Task-Management-App",
    featured: false,
  },
  {
    id: 7,
    title: "Kodu Frontend",
    description:
      "A responsive marketing landing page built for student outreach campaigns with fast loading times and adaptive mobile layouts.",
    img: project8,
    category: "frontend",
    tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    site: "https://koducoding.netlify.app",
    github: "https://github.com/Manish-Yadav77/FrontendKodu",
    featured: false,
  },
  {
    id: 8,
    title: "Coding-Class Next.js",
    description:
      "An educational portal created with Next.js, TypeScript, and Aceternity UI to display course tracks and contact flows.",
    img: project13,
    category: "frontend",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Aceternity UI"],
    site: "https://coding-clas.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Coding-Classes-next.js",
    featured: false,
  },
  {
    id: 9,
    title: "Infinity Chat",
    description:
      "An AI chat platform connected to Google Gemini API with multi-turn conversations, persistent history, and user authentication.",
    img: project12,
    category: "fullstack",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],
    site: "https://infinitychat7.netlify.app/",
    github: "https://github.com/Manish-Yadav77/InfinityChat",
    featured: false,
  },
  {
    id: 10,
    title: "Weather App",
    description:
      "A simple weather checking tool displaying real-time temperature and weather metrics using open APIs.",
    img: project1,
    category: "frontend",
    tech: ["React.js", "API", "CSS"],
    site: "https://appsweathers.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Weather-App",
    featured: false,
  },
  {
    id: 11,
    title: "Todo App",
    description:
      "A minimalist task tracking application with state persistence and clean user controls.",
    img: project2,
    category: "frontend",
    tech: ["React.js", "Tailwind CSS"],
    site: "https://appstodoos.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Todo-App",
    featured: false,
  },
  {
    id: 12,
    title: "BMI Calculator",
    description:
      "An interactive tool calculating body mass index and health ranges based on input measurements.",
    img: project5,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://bmikalculator.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Bmi-calculator",
    featured: false,
  },
  {
    id: 13,
    title: "Quotes Generator",
    description:
      "A simple JavaScript web page generating random daily quotes with instant refresh controls.",
    img: project6,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://generatorsquotess.netlify.app/",
    github: "https://github.com/Manish-Yadav77/Quotes_Generator",
    featured: false,
  },
];

const Portfolio = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="max-w-[1300px] mx-auto p-6 md:p-20 min-h-screen" id={id}>
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
              My <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Full-stack platforms, client builds, n8n automations, and interactive web tools.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 mt-6 md:mt-0 flex-wrap justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor: activeCategory === "all" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border: activeCategory === "all" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("fullstack")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor: activeCategory === "fullstack" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border: activeCategory === "fullstack" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              Full Stack ({projects.filter((p) => p.category === "fullstack").length})
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor: activeCategory === "frontend" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border: activeCategory === "frontend" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              Frontend ({projects.filter((p) => p.category === "frontend").length})
            </button>
            <button
              onClick={() => setActiveCategory("automation")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor: activeCategory === "automation" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border: activeCategory === "automation" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              n8n & AI ({projects.filter((p) => p.category === "automation").length})
            </button>
          </div>
        </div>
      </Reveal>

      {/* FEATURED PROJECTS SECTION */}
      {featuredProjects.length > 0 && (
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project) => (
            <Reveal key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative bg-gradient-to-br from-purple-900/40 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 group"
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    ⭐ Featured Project
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-800 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs px-3 py-1.5 rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.site && project.site !== "#" && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                        >
                          <AiOutlineLink size={18} /> Live Demo
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
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

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      )}

      {/* OTHER PROJECTS GRID */}
      {otherProjects.length > 0 && (
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
                <div className="h-40 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

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

                  <div className="flex gap-3 pointer-events-auto">
                    {project.site && project.site !== "#" && (
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

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-purple-500 transition-all duration-300 pointer-events-none" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      )}

      {/* NO RESULTS FALLBACK */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-400 text-xl">
          No projects found under this category.
        </div>
      )}
    </div>
  );
};

export default Portfolio;