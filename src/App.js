import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Internships from "./components/Internships";
import Apply from "./components/Apply";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          {/* Root path redirects to Home */}
          <Route path="/" element={<Home />} />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all route redirects unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
