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
} from "react-icons/di";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiN8N,
  SiRazorpay,
} from "react-icons/si";
import { motion } from "framer-motion";

const Hero = ({ id }) => {
  const techStack = [
    { icon: <DiJavascript1 className="text-yellow-500" />, name: "JS" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TS" },
    { icon: <DiReact className="text-blue-500" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <DiNodejsSmall className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    { icon: <DiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
    { icon: <SiN8N className="text-red-500" />, name: "n8n AI" },
    { icon: <SiRazorpay className="text-blue-500" />, name: "Razorpay" },
    { icon: <SiTailwindcss className="text-purple-700" />, name: "Tailwind" },
    { icon: <SiRedux className="text-[#764abc]" />, name: "Redux" },
  ];

  return (
    <section id={id} className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden mt-20 lg:mt-0 pb-20 lg:pb-0">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-[1300px] mt-5 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer",
              1000,
              "React.js & Node.js Engineer",
              1000,
              "SaaS & n8n Automation Builder",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-purple-400 text-xl md:text-3xl mb-4"
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
            Full Stack MERN Developer building production-ready SaaS platforms, client-facing financial applications, Razorpay payment flows, and automated n8n AI workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="/Manish_Kumar_Yadav_MERN_Developer_Resume.pdf"
              download="Manish_Kumar_Yadav_MERN_Developer_Resume.pdf"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(128,0,128,0.4)" }}
                className="px-6 py-3 rounded-xl font-semibold bg-purple-600 text-gray-100"
              >
                Download CV
              </motion.button>
            </a>

            <div className="flex gap-6 text-4xl md:text-5xl text-purple-400">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Manish-Yadav77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/manish-yadav-fullstack-mern/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://instagram.com/manish_yadav77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

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

      <ShinyEffect left={-100} top={50} size={1400} />
    </section>
  );
};

export default Hero;