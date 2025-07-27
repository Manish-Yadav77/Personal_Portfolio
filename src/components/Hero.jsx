import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiBootstrap,
  DiCss3,
  DiExtjs,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";
import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Manish Yadav</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            "Aspiring full stack developer, building skills through hands-on
            projects and continuous learning."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <a href="../../src/ManishCV.pdf" download>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
              >
                Download CV
              </motion.button>
            </a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Manish-Yadav77"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/manish-kumar-yadav-697254312/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://instagram.com/manish_yadav77"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] rounded-full "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col md:flex-row text-4xl sm:text-5xl md:text-7xl px-6 sm:px-12 md:px-0 w-full justify-center items-center py-12 sm:py-16 md:py-24"
      >
        <p className="text-gray-200 mb-4 md:mb-0 md:mr-6 flex text-center md:text-left">
          My Tech Stack
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-center md:justify-start lg:flex lg:flex-wrap">
          <SiC className="text-[#A8B9CC] mx-auto" />
          <SiCplusplus className="text-[#00599C] mx-auto" />
          <DiJava className="text-[#007396] mx-auto" />
          <DiHtml5 className="text-orange-600 mx-auto" />
          <DiCss3 className="text-blue-600 mx-auto" />
          <DiJavascript1 className="text-yellow-500 mx-auto" />
          <DiReact className="text-blue-500 mx-auto" />
          <SiTailwindcss className="text-purple-700 mx-auto" />
          <DiNodejsSmall className="text-green-500 mx-auto" />
          <SiRedux className="text-[#764abc] mx-auto" />
          <DiMongodb className="text-green-500 mx-auto" />
          <SiExpress className="text-[#303030] mx-auto" />
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
