import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Learn Z. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0D47A1",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  },
};

export default Footer;
