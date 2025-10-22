import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="highlight">Learn Z</span>
      </motion.h1>

      <motion.p
        className="home-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Empowering students through outstanding courses in software
        development, AI, and next-generation technologies.
      </motion.p>

      <motion.a
        href="/internships"
        className="cta-button"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Explore Courses
      </motion.a>
    </div>
  );
}

export default Home;
