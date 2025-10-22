import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
  const location = useLocation();

  // Prefill only domain from clicked internship card
  const prefillDomain = location.state?.domain || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState(prefillDomain);
  const [duration, setDuration] = useState(""); // User will select manually
  const [message, setMessage] = useState("");

  // Update domain when navigating from internship card
  useEffect(() => {
    if (prefillDomain) setDomain(prefillDomain);
  }, [prefillDomain]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      domain,
      duration,
      message,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbymho4At58Lhh95tKh_ZP5p6Vhrru9bQGnr2o4DiaC_Ten8s61vMoDbwBzh8R7mt0-i/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("✅ Application submitted successfully!");
      setName("");
      setEmail("");
      setDomain(prefillDomain); // Keep domain filled after submit
      setDuration("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ There was an issue submitting your application.");
    }
  };

  return (
    <div className="apply-container">
      <h1>Application</h1>
      <form onSubmit={handleSubmit} className="apply-form">
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Course:
          <input
            type="text"
            value={domain}
            readOnly
          />
        </label>

        <label>
          Phone No.:
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
            
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows="4"
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;
