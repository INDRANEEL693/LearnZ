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
  const [duration, setDuration] = useState(""); // Duration (months/weeks)
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Update domain when navigating from internship card
  useEffect(() => {
    if (prefillDomain) setDomain(prefillDomain);
  }, [prefillDomain]);

  const phoneRegex = /^[0-9]{10}$/; // Example for 10-digit phone number validation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneRegex.test(phoneNumber)) {
      alert("❌ Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    const formData = {
      name,
      email,
      domain,
      duration,
      phoneNumber,
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
      setPhoneNumber("");
      setDuration("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ There was an issue submitting your application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-container">
      {/* Price tag at the top right */}
      <div className="price-tag">399/-</div>

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
            title="Pre-filled based on your selected internship"
          />
        </label>

        <label>
          Phone No.:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Enter your phone number"
          />
        </label>

        <label>
          Duration:
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            placeholder="Duration of internship"
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

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default Apply;
