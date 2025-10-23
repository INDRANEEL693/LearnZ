import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About Learn Z</h2>

      <p style={styles.text}>
        Learn Z was born from a simple belief: mastery is not about memorizing steps—
        it’s about understanding, creating, and evolving. It is the art of turning curiosity
        into skill, and ideas into reality.
      </p>

      <p style={styles.text}>
        At its core, Learn Z embodies a mindset where challenges are opportunities,
        mistakes are lessons, and every problem has a path to discovery. Knowledge is measured
        not by repetition, but by the confidence to build, explore, and innovate.
      </p>

      <p style={styles.text}>
        Learn Z cultivates a philosophy of ownership. It builds creators, thinkers,
        and doers—people who craft solutions, take initiative, and lead projects with vision.
        It is not about following instructions or fitting into predefined roles; it is about
        shaping ideas into impact and taking responsibility for the results.
      </p>

      <p style={styles.text}>
        In essence, Learn Z is more than education—it is a way of thinking: to act boldly,
        create independently, and transform learning into mastery. It nurtures leaders,
        innovators, and owners, not employees.
      </p>

      <hr style={styles.divider} />

      <p style={styles.text}>
        Learn Z is where curiosity becomes mastery. It transforms ideas into solutions,
        mistakes into lessons, and learning into ownership.
      </p>

      <p style={styles.text}>
        Here, creators are made, not followers. Leaders emerge, not employees. Every
        challenge is an opportunity, every effort a step toward building, innovating, and
        taking charge.
      </p>

      <p style={styles.text}>
        Learn Z is more than skills—it is a mindset: bold, independent, and unapologetically
        in control of one’s craft.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 10%",
    textAlign: "center",
    background: "linear-gradient(135deg, #0d47a1, #1976d2)",
    color: "white",
    lineHeight: "1.7",
    borderRadius: "10px",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "1.5rem",
    fontWeight: "700",
    color: "#ffeb3b",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "1.2rem",
    opacity: "0.95",
  },
  divider: {
    width: "80px",
    height: "3px",
    backgroundColor: "#ffeb3b",
    border: "none",
    margin: "2rem auto",
    borderRadius: "10px",
  },
};

export default About;
