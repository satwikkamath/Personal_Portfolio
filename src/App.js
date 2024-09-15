import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience"; // Import the Experience component
import React from "react";
import profileImage from "./assets/profile.jpg";
import { motion } from "framer-motion";
import Typing from "react-typing-effect";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content Container with Padding */}
      <div className="px-6 md:px-12">
        {/* Intro Section */}
        <section
          id="intro"
          className="flex flex-col md:flex-row items-center md:justify-between pt-28 md:pt-12 pb-4 min-h-screen"
        >
          {/* Left Side - Intro Text */}
          <motion.div
            className="md:w-1/2 text-left order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <Typing
                speed={50}
                typingDelay={500}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                text={["Hey there! I'm Satwik"]}
                eraseDelay={5000}
                eraseSpeed={0}
              />
            </h1>
            <p className="mt-4 text-gray-400">
              ECE student passionate about Processor Design, Analog IC design,
              as well as MERN stack web development.
            </p>
          </motion.div>

          {/* Right Side - Responsive Profile Image */}
          <motion.div
            className="md:w-1/2 md:mt-0 flex justify-center items-center order-1 md:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex justify-center items-center">
              <img
                src={profileImage}
                alt="Satwik Kamath"
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
              />
            </div>
          </motion.div>
        </section>

        {/* Sections */}
        <Education />
        <Experience />
        <Skills />
        <Projects />

        {/* Footer */}
        <footer id="contact" className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/satwikkamath"
              className="text-gray-400 hover:scale-110 transition-transform"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satwik-kamath-87b2a1229/"
              className="text-gray-400 hover:scale-110 transition-transform"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/satwik_kamath/"
              className="text-gray-400 hover:scale-110 transition-transform"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
