import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <div className="content" >
      <h1 className="fw-bold display-3 ">HackTrack</h1>
      <p>Your gateway to hackathons and innovation!</p>
      <Link to="/signin">
        <button type="button" className="btn btn-outline-success me-2">Sign-in</button>
      </Link>

      <Link to="/signup">
        <button type="button" className="btn btn-outline-success">Sign-up</button>
      </Link>
      <br /><br /><br /><br />
      
      <div className="about-section">
      <h2>About HackTrack</h2>
      <p>
        HackTrack is your ultimate platform for discovering, joining, and managing hackathons.
        Whether you're a student, a professional developer, or just someone curious about tech,
        HackTrack brings together innovation, collaboration, and opportunity.
        Start your journey today and build something amazing!
      </p>
      </div>

      
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
    </div>

  );
};

export default Header;



