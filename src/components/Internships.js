import React from "react";
import { useNavigate } from "react-router-dom";
import "./Internships.css";

const Courses = () => {
  const navigate = useNavigate();

  // Courses list
  const courses = [
    {
      title: "C",
      description: "Learn the fundamentals of C programming",
    },
    {
      title: "Java",
      description: "Master object-oriented programming with applications",
    },
    {
      title: "Python",
      description: "Work on Python basics and libraries like numpy, pandas",
    },
  ];

  // Navigate to Apply page with course
  const handleApply = (course) => {
    navigate("/apply", { state: { domain: course } });
  };

  return (
    <div className="internships-container">
      <h1>Our Courses</h1>
      <div className="internship-list">
        {courses.map((course, index) => (
          <div
            key={index}
            className="internship-card"
            onClick={() => handleApply(course.title)}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
