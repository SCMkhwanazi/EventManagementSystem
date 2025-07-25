import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Important for dropdowns


const Home = () => {
  const events = [
    {
      id: 1,
      title: 'AI Hackathon',
      image: 'https://picsum.photos/400/200?random=1',
    },
    {
      id: 2,
      title: 'TUT Hackathon',
      image: 'https://picsum.photos/400/200?random=1',
    },
    {
      id: 3,
      title: 'UP Hackathon',
      image: 'https://picsum.photos/400/200?random=1',
    },
    {
      id: 4,
      title: 'WITS Hackathon',
      image: 'https://picsum.photos/400/200?random=1',
    },
    ];
  const scrollCards = (direction) => {
    const container = document.getElementById('cardScrollContainer');
    const scrollAmount = 320; // Adjust based on card width + gap
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand">HackTrack</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/" style={{ color: 'green' }} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/organiser" >Organiser</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/calendar">Calendar</Link></li>
            <li><Link className="dropdown-item" to="/review">Reviews</Link></li>
            <li><hr className="dropdown-divider" /></li>
            
          </ul>
        </li>
      </ul>

      {/* Right Side: Search & Logout */}
      <div className="d-flex align-items-center gap-2">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            id="search"
            list="datalistOptions"
            placeholder="Search Events"
            aria-label="Search"
          />
          <datalist id="datalistOptions">
            <option value="Event 1" />
            <option value="Event 2" />
            <option value="Event 3" />
            <option value="Event 4" />
            <option value="Event 5" />
          </datalist>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        {/* 🔒 Logout Button */}
        <button
          className="btn btn-outline-light ms-2"
          onClick={() => {
            // Optional: clear session data
            localStorage.clear();
            alert('🔓 You have been logged out!');
            window.location.href = '/'; // Redirect to home or login
          }}
        >
          <i className="bi bi-box-arrow-right me-1"></i> Logout
        </button>
      </div>
    </div>
  </div>
      </nav>


      {/* Main Content */}
      <div className="container mt-4 mb-5">
        <h1>Welcome to HackTrack!</h1>
        <p>Your one-stop hub for hackathon discovery and management.</p>
      </div>

      {/* Scrollable Event Cards Section */}
      <div className="container my-5 position-relative">
        <h2 className="text-white mb-4">Upcoming Events</h2>

        {/* Left Arrow */}
        <button
          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3"
          onClick={() => scrollCards(-1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* Scrollable Card Container */}
         <div id="cardScrollContainer" className="d-flex overflow-auto gap-3 pb-3 px-5">
            {events.map((event) => (
            <div className="card" key={event.id} style={{ minWidth: '300px' }}>
              <img src={event.image} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Image+Error'; }} className="card-img-top" alt={event.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{event.title}</h5>
                <Link to={`/myevent/${event.id}`} className="btn btn-dark me-2">
                  View Event
                </Link>
              </div>
            </div>
            ))}
          </div>
        
        {/* Right Arrow */}
        <button
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3"
          onClick={() => scrollCards(1)}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-5">
        <div className="social-icons mb-2">
          <a href="facebook.com" title="Facebook" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="twitter.com" title="Twitter" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="linkedin.com" title="LinkedIn" className="text-light"><i className="bi bi-linkedin"></i></a>
        </div>
        <Link to="#top" className="text-info d-block mb-2">Back to Top ↑</Link>
        <div className="contact-info text-light">
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

export default Home;
