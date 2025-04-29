import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="content">
      <h1>Welcome to HackTrack</h1>
      <p>Your gateway to hackathons and innovation!</p>
      <Link to="/signin">
        <button type="button" className="btn btn-light">Sign-in</button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn btn-dark">Sign-up</button>
      </Link>
      <br /><br /><br /><br />
    </div>
  );
};

export default Header;



