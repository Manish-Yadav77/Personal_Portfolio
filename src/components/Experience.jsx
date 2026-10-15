import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "RCGemini Technology Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "April 2025 - Present",
    description:
      "Working as a Full Stack Developer delivering production applications. Engineered client-facing payment workflows and wallet approval systems for WealthX. Built an internal CRM platform using React, Node.js, and MongoDB with real-time task feeds and JWT authentication. Integrated Razorpay test checkout flows and custom n8n AI automation pipelines.",
  },
  {
    company: "Kodu - Powered by Dhurina",
    role: "Full Stack Developer Intern",
    period: "October 2024 - April 2025",
    description:
      "Completed intensive Full Stack Development program and internship focused on MERN stack architecture. Developed robust backend REST APIs, structured MongoDB schemas, and built responsive, clean UI components using React.js, Node.js, Express.js, and TypeScript.",
  },
];

const Experience = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            Professional <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical hands-on development, client engagement, and software engineering.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1300px] w-full">
        {experiences.map((exp, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-purple-700/40 hover:border-purple-500 hover:shadow-purple-500/20 shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {exp.company}
                  </h3>
                  <span className="text-purple-400 font-medium text-sm md:text-base mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-purple-300 font-semibold text-base md:text-lg mb-4">
                  {exp.role}
                </p>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;