import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  AiOutlineLink,
  AiOutlineFilePdf,
  AiOutlineCloudDownload,
  AiOutlineTrophy,
} from "react-icons/ai";
import { BiAward, BiBadgeCheck } from "react-icons/bi";
import { SiOracle, SiMongodb } from "react-icons/si";
import { FaReact, FaAward } from "react-icons/fa";

const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    date: "2024",
    description:
      "Oracle OCI AI Foundations certified - expertise in cloud native development and AI powered features for fintech and business automation",
    type: "certificate",
    icon: <SiOracle size={40} />,
    color: "from-red-500 to-orange-600",
    verified: true,
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=35E4718E72EB34E1B4BC8D672A79C3ECFBDAFD90CC0471210E83146A545539AE",
  },
  {
    id: 2,
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "2024",
    description:
      "Completed comprehensive data analytics simulation focusing on business intelligence and data-driven decision making",
    type: "certificate",
    icon: <BiAward size={40} />,
    color: "from-green-500 to-emerald-600",
    verified: true,
    credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_iTj4YEJRG6d3yXY6Q_1756885455100_completion_certificate.pdf",
  },
  {
    id: 3,
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    date: "2024",
    description:
      "Advanced data analytics and AI implementation with focus on GenAI technologies and practical applications",
    type: "certificate",
    icon: <FaAward size={40} />,
    color: "from-blue-500 to-cyan-600",
    verified: true,
    credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_iTj4YEJRG6d3yXY6Q_1756486938090_completion_certificate.pdf",
  },
  {
    id: 4,
    title: "Full Stack Development (1-Year Program)",
    issuer: "Kodu - Powered by Dhurina",
    date: "January 2024 - April 2025",
    description:
      "Comprehensive MERN stack training with hands-on projects. Built production-grade applications with React, Node.js, Express, and MongoDB",
    type: "certificate",
    icon: <FaReact size={40} />,
    color: "from-purple-500 to-pink-600",
    verified: true,
    credentialLink: "#",
  },
  {
    id: 5,
    title: "Full Stack Development Internship (3-Month)",
    issuer: "Kodu - Powered by Dhurina",
    date: "January 2025 - April 2025",
    description:
      "Built interactive UIs and modular components, achieved 20% increase in user engagement and 30% reduction in development time",
    type: "certificate",
    icon: <SiMongodb size={40} />,
    color: "from-green-600 to-teal-600",
    verified: true,
    credentialLink: "#",
  },
  {
    id: 6,
    title: "Advertisement Frontend - Recognition",
    issuer: "Kodu (Powered by Dhurina)",
    date: "April 2025",
    description:
      "Recognized for outstanding frontend development work and production-ready advertisement application",
    type: "badge",
    icon: <AiOutlineTrophy size={40} />,
    color: "from-yellow-500 to-orange-500",
    verified: false,
  },
  {
    id: 7,
    title: "RC Gemini - Performance Excellence",
    issuer: "RC Gemini",
    date: "May 2025",
    description:
      "Awarded for engineering production CRM and achieving 30%+ improvement in workflow efficiency",
    type: "badge",
    icon: <BiBadgeCheck size={40} />,
    color: "from-indigo-500 to-purple-600",
    verified: false,
  },
  {
    id: 8,
    title: "RC Gemini - Outstanding Contribution",
    issuer: "RC Gemini",
    date: "July 2025",
    description:
      "Recognized for consistently delivering projects ahead of deadlines and performance-based achievements",
    type: "badge",
    icon: <AiOutlineTrophy size={40} />,
    color: "from-pink-500 to-rose-600",
    verified: false,
  },
];

const Certifications = ({id}) => {
  const [filter, setFilter] = useState("all");

  const filteredCerts = certifications.filter((cert) => {
    if (filter === "all") return true;
    return cert.type === filter;
  });

  return (
    <div
      className="max-w-[1300px] mx-auto p-6 md:p-20 min-h-screen"
      id={id}
    >
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
              Certificates & <span className="text-purple-400">Badges</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Professional credentials, certifications, and recognition from
              industry leaders
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 mt-6 md:mt-0 flex-wrap justify-center">
            <button
              onClick={() => setFilter("all")}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor: filter === "all" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border: filter === "all" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              All ({certifications.length})
            </button>
            <button
              onClick={() => setFilter("certificate")}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor:
                  filter === "certificate" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border:
                  filter === "certificate" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              Certificates (
              {certifications.filter((c) => c.type === "certificate").length})
            </button>
            <button
              onClick={() => setFilter("badge")}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                backgroundColor: filter === "badge" ? "#a855f7" : "#374151",
                color: "white",
                transition: "all 0.3s",
                border: filter === "badge" ? "2px solid #c084fc" : "none",
              }}
              className="hover:scale-105"
            >
              Badges (
              {certifications.filter((c) => c.type === "badge").length})
            </button>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert, index) => (
          <Reveal key={cert.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group"
            >
              {/* Verified Badge */}
              {cert.verified && (
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 10,
                    backgroundColor: "#10b981",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  <BiBadgeCheck size={16} />
                  Verified
                </div>
              )}

              {/* Icon Header with Gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-white relative z-10"
                >
                  {cert.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                {/* Type Badge */}
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor:
                      cert.type === "badge" ? "#eab308" : "#8b5cf6",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.type}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight">
                  {cert.title}
                </h3>

                <p className="text-purple-400 font-semibold text-sm mb-1">
                  {cert.issuer}
                </p>

                <p className="text-gray-500 text-xs mb-3 flex items-center gap-1">
                  📅 {cert.date}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {cert.credentialLink && cert.credentialLink !== "#" && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#a855f7",
                        color: "white",
                        borderRadius: "0.5rem",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        transition: "all 0.3s",
                      }}
                      className="hover:bg-purple-600 hover:scale-105"
                    >
                      <AiOutlineLink size={16} />
                      View
                    </a>
                  )}

                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#374151",
                      color: "white",
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    className="hover:bg-gray-600 hover:scale-105"
                  >
                    <AiOutlineFilePdf size={16} />
                    Details
                  </button>
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "3px solid transparent",
                  borderRadius: "1rem",
                  pointerEvents: "none",
                  transition: "all 0.3s",
                }}
                className="group-hover:border-purple-500 group-hover:shadow-2xl"
              />

              {/* Shine Effect */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCerts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: "center", padding: "5rem 0" }}
        >
          <p className="text-gray-400 text-xl">
            No {filter === "all" ? "" : filter + "s"} found
          </p>
        </motion.div>
      )}      
    </div>
  );
};

export default Certifications;
