import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h2>About Learn Z</h2>
      <p>
        Learn Z is a software institution dedicated to providing high-quality
        courses at low cost. We focus on skill development, live projects,
        and real-world experience for those who completed basic programming languages.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 2rem",
    textAlign: "center",
  },
};

export default About;
