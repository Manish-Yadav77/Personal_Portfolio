import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiJava, DiGithubBadge } from "react-icons/di";
import { SiRedux, SiTailwindcss, SiC, SiCplusplus, SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React.js", icon: <DiReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764abc]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-purple-700" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-400" /> },
      { name: "Java", icon: <DiJava className="text-[#007396]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    ],
  },
];

const Skills = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-gradient-to-b from-gray-950 to-gray-900 py-20">
      <Reveal>
        <div className="text-center mb-14 ">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build interactive, scalable, and high-performance web applications.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full">
        {skills.map((skill, idx) => (
          <Reveal key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-purple-700/40 hover:border-purple-500 hover:shadow-purple-500/20 shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{skill.category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
                {skill.technologies.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <span className="text-4xl md:text-5xl">{tech.icon}</span>
                    <span className="text-gray-300 text-sm md:text-base">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
