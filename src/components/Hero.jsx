import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import { SiC, SiCplusplus, SiRedux, SiTailwindcss, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = ({ id }) => {
  const techStack = [
    { icon: <SiC className="text-[#A8B9CC]" />, name: "C" },
    { icon: <SiCplusplus className="text-[#00599C]" />, name: "C++" },
    { icon: <DiJava className="text-[#007396]" />, name: "Java" },
    { icon: <DiHtml5 className="text-orange-600" />, name: "HTML" },
    { icon: <DiCss3 className="text-blue-600" />, name: "CSS" },
    { icon: <DiJavascript1 className="text-yellow-500" />, name: "JS" },
    { icon: <DiReact className="text-blue-500" />, name: "React" },
    { icon: <SiTailwindcss className="text-purple-700" />, name: "Tailwind" },
    { icon: <DiNodejsSmall className="text-green-500" />, name: "Node.js" },
    { icon: <SiRedux className="text-[#764abc]" />, name: "Redux" },
    { icon: <DiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiExpress className="text-[#303030]" />, name: "Express" },
  ];

  return (
    <section id={id} className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden mt-20 lg:mt-0 pb-20 lg:pb-0 ">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-[1300px] mt-5 lg:mt-0">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Fullstack Dev", 1000, "Frontend Dev", 1000, "Backend Dev", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-purple-400 text-xl md:text-4xl mb-4"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-6xl text-4xl font-bold tracking-tight mb-6"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Manish Yadav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 md:text-xl text-base mb-6 max-w-xl"
          >
            "Aspiring full stack developer, building skills through hands-on projects and continuous learning."
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="/ManishCV.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(128,0,128,0.4)" }}
                className="px-6 py-3 rounded-xl font-semibold bg-purple-600 text-gray-100"
              >
                Download CV
              </motion.button>
            </a>

            <div className="flex gap-6 text-4xl md:text-5xl text-purple-400">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Manish-Yadav77">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/manish-kumar-yadav-697254312/">
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/manish_yadav77">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.img
          src={profilepic}
          alt="Manish Yadav"
          className="w-[300px] md:w-[450px] rounded-full shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Tech Stack */}
      <motion.div
        className="mt-16 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-6 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        {techStack.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
            <span className="text-3xl md:text-5xl">{tech.icon}</span>
            <span className="text-gray-300 text-sm md:text-base">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Shiny Effect */}
      <ShinyEffect left={-100} top={50} size={1400} />
    </section>
  );
};

export default Hero;
