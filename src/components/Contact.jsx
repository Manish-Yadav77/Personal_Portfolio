import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-10 py-20 md:-mt-20 "
    >
      <Reveal>
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-[1200px] items-start">
          {/* About / Stats */}
          <div className="flex flex-col gap-8">
            <div className="text-gray-300">
              <h3 className="text-3xl md:text-4xl font-semibold mb-5">
                About <span className="text-purple-400">Me</span>
              </h3>
              <p className="text-gray-400 leading-relaxed md:text-lg text-justify">
                I'm a Full Stack Web Developer with practical experience in
                React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
                Previously worked at RC Gemini as a Frontend Developer, where I
                delivered several full stack projects and specialized in
                building clean, responsive, and scalable web applications. I
                enjoy problem-solving, writing efficient code, and collaborating
                in fast-paced environments. I'm always eager to learn and open
                to full-time or remote opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              {[
                { title: "12+", subtitle: "Projects Completed" },
                { title: "Full Stack", subtitle: "Developer" },
                { title: "Problem-", subtitle: "Solver" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,128,0.5)" }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-purple-700/40 shadow-lg flex flex-col items-center text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Reveal>
            <motion.form
              action="https://getform.io/f/axowpweb"
              method="POST"
              className="flex flex-col gap-4 p-6 md:p-12 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl border border-purple-700/40 shadow-2xl w-full"
            >
              <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name ..."
                className="w-full rounded-md border border-purple-600 bg-gray-800 text-gray-200 placeholder-gray-400 py-2 pl-3 pr-4 focus:outline-none focus:border-purple-400 transition"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email ..."
                className="w-full rounded-md border border-purple-600 bg-gray-800 text-gray-200 placeholder-gray-400 py-2 pl-3 pr-4 focus:outline-none focus:border-purple-400 transition"
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                className="w-full rounded-md border border-purple-600 bg-gray-800 text-gray-200 placeholder-gray-400 py-2 pl-3 pr-4 focus:outline-none focus:border-purple-400 transition resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(128,0,128,0.5)" }}
                transition={{ duration: 0.3 }}
                className="w-full py-3 rounded-md bg-purple-600 text-gray-100 font-semibold text-xl hover:bg-purple-700 transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
