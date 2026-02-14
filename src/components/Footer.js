import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>IvanSwarmAI © {new Date().getFullYear()}</p>
      <p style={{ marginTop: '0.5rem' }}>
        Researcher/Developer: <a href="mailto:tumacayivan@gmail.com">Ivan Tumacay</a>
      </p>
    </footer>
  );
}

export default Footer;
