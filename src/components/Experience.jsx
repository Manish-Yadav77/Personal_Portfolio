import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "RC Gemini",
    period: "April 2025 - Present",
    description:
      "Full Stack Developer at RC Gemini, delivering 4 production-ready MERN applications within a 3-member team. Engineered the WealthX platform with QR-based payments, transaction verification, and role-based access, improving completed submissions by 40%. Built responsive React.js interfaces and reusable component systems, cutting development cycle time by 30%. Developed admin dashboards and real-time data workflows, and contributed to internal CRM development with secure JWT authentication and task tracking, increasing team throughput by 30%.",
  },
  {
    company: "Kodu - Powered by Dhurina",
    period: "October 2024 - April 2025",
    description:
      "Completed a Full Stack Development Program + Internship focused on MERN stack architecture, scalable frontend systems, backend APIs, authentication workflows, and real-world application development using React.js, Node.js, Express.js, MongoDB, and TypeScript. Optimized frontend architecture using reusable components, cutting development time by 30% while improving cross-device compatibility, and fixed application-level defects, reducing reported bugs by 15% and improving system performance by 25%.",
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