import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>
        IvanSwarmAI &copy; {new Date().getFullYear()} &mdash; Researcher /
        Developer:{' '}
        <a href="mailto:tumacayivan@gmail.com">Ivan Tumacay</a>
      </p>
      <p className="footer-meta">
        Declass: per E.O. 12958 &middot; This document is a stylistic homage,
        not an official record.
      </p>
    </footer>
  );
}

export default Footer;
