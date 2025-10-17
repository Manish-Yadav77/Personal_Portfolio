import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "RC Gemini",
    period: "April 2025 - Present",
    description:
      "Worked as a Frontend Developer at RC Gemini, contributing to modern, responsive, and scalable web applications. Although initially onboarded as a UI/UX-focused developer, I leveraged my Full Stack Development background to deliver multiple end-to-end projects using the MERN stack. Collaborated with cross-functional teams to integrate APIs, optimize performance, and ensure seamless user experiences from frontend design to backend functionality.",
  },
  {
    company: "Kodu - Powered by Dhurina",
    period: "2024 - April 2025",
    description:
      "Currently enrolled in a 1-year Full Stack Development program, gaining hands-on experience with MERN stack, working on real-world projects, and sharpening skills in both frontend and backend technologies.",
  },
];

const Experience = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Section Title */}
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            Professional <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of hands-on learning, real-world development, and
            collaborative growth across professional environments.
          </p>
        </div>
      </Reveal>

      {/* Experience Cards */}
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
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {exp.company}
                </h3>
                <p className="text-purple-400 font-medium text-sm md:text-base mb-4">
                  {exp.period}
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
