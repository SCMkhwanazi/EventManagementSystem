import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="facebook.com" title="Facebook"><i className="bi bi-facebook"></i></a>
        <a href="twitter.com" title="Twitter"><i className="bi bi-twitter"></i></a>
        <a href="linkedin.com" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
      </div>
      <a href="#top" className="back-to-top">Back to Top ↑</a>

      <div className="contact-info">
        📧 Email: support@hacktrack.com<br />
        ☎ Phone: +27 (71) 376-6731
      </div>

      <div style={{ marginTop: '15px' }}>
        &copy; 2025 HackTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


