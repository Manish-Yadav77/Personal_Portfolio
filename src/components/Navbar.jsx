import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1068);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  // Detect screen resize and update
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1068);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 30, damping: 20 },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 30, damping: 20 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
        <a
          href="https://www.linkedin.com/in/manish-yadav-fullstack-mern/"
          className="font-semibold"
        >
          Manish Kumar Yadav
        </a>

        {/* Desktop Menu */}
        <ul
          className="gap-12 z-10 cursor-pointer"
          style={{
            display: isDesktop ? "flex" : "none",
          }}
        >
          <li>
            <Link to="hero" smooth offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="experience" smooth offset={50} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth offset={50} duration={500}>
              certifications
            </Link>
          </li>
          <li>
            <Link to="contact" smooth offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        {!isDesktop && (
          <div onClick={toggleNav} className="z-50 text-gray-200">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        )}

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#111827",
            zIndex: 40,
            display: !isDesktop && nav ? "block" : "none",
          }}
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center text-gray-200">
            <li>
              <Link to="hero" onClick={closeNav} smooth offset={50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" onClick={closeNav} smooth offset={50} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" onClick={closeNav} smooth offset={50} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="experience" onClick={closeNav} smooth offset={50} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="certifications" onClick={closeNav} smooth offset={50} duration={500}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={closeNav} smooth offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
