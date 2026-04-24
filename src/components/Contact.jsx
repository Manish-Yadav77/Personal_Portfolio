import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// ✅ Beautiful Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "from-green-500/90 to-green-700/90"
      : type === "error"
      ? "from-red-500/90 to-red-700/90"
      : "from-yellow-500/90 to-yellow-700/90";

  const icon =
    type === "success" ? "✅" : type === "error" ? "❌" : "⚠️";

  return (
    <motion.div
      initial={{ opacity: 0, y: -60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] bg-gradient-to-r ${bgColor} 
        text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20 
        backdrop-blur-md flex items-center gap-3 min-w-[300px] max-w-[90vw]`}
    >
      {/* Animated Icon */}
      <motion.span
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        className="text-2xl"
      >
        {icon}
      </motion.span>

      <p className="text-sm md:text-base font-medium flex-1">{message}</p>

      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="text-white/70 hover:text-white text-lg font-bold ml-2"
      >
        ✕
      </motion.button>

      {/* Auto-dismiss progress bar */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 3, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 rounded-b-2xl origin-left"
      />
    </motion.div>
  );
};

const Contact = ({ id }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Toast state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "textarea") {
      setForm({ ...form, message: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToast("All fields are required!", "warning");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        showToast("Message sent successfully!", "success");
        setForm({ name: "", email: "", message: "" });

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textarea").value = "";
      } else {
        showToast(data.message || "Failed to send message", "error");
      }
    } catch (error) {
      console.error(error);
      showToast("Server error, please try again later", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <section
        id={id}
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-10 py-20 md:-mt-20"
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
                  Previously worked at RC Gemini as a Frontend Developer, where
                  I delivered several full stack projects and specialized in
                  building clean, responsive, and scalable web applications. I
                  enjoy problem-solving, writing efficient code, and
                  collaborating in fast-paced environments. I'm always eager to
                  learn and open to full-time or remote opportunities.
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
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(128,0,128,0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-purple-700/40 shadow-lg flex flex-col items-center text-center"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Reveal>
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 md:p-12 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl border border-purple-700/40 shadow-2xl w-full"
              >
                <p className="text-gray-100 font-bold text-xl mb-2">
                  Let´s connect!
                </p>

                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name ..."
                  className="w-full rounded-md border border-purple-600 bg-gray-800 text-gray-200 placeholder-gray-400 py-2 pl-3 pr-4 focus:outline-none focus:border-purple-400 transition"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Your Email ..."
                  className="w-full rounded-md border border-purple-600 bg-gray-800 text-gray-200 placeholder-gray-400 py-2 pl-3 pr-4 focus:outline-none focus:border-purple-400 transition"
                />

                <textarea
                  name="textarea"
                  id="textarea"
                  onChange={handleChange}
                  cols="30"
                  rows="4"
                  placeholder="Your Message ..."
                  className="w-full rounded-md border border-purple-600 bg-gray-800 text-gray-200 placeholder-gray-400 py-2 pl-3 pr-4 focus:outline-none focus:border-purple-400 transition resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(128,0,128,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full py-3 rounded-md bg-purple-600 text-gray-100 font-semibold text-xl hover:bg-purple-700 transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Contact;