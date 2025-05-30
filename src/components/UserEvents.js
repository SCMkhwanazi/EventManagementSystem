import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const UserEvents = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  
      const handleRegisterClick = () => {
        setIsRegistered(true);
      };

  return (
    <div>
      {/* Back Button */}
      <button className="btn btn-dark text-white mb-3 ms-3 mt-3" onClick={() => navigate('/UserPage')}>
        <i className="bi bi-arrow-left btn btn-outline-success "></i> Back To Home Page
      </button>

      {/* Main Content */}
      <div className="container text-center pt-5">
        {/* Button Group */}
        <div className="btn-group mb-5" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-success" >
            My Events
          </button>
        </div>

        {/* Event Cards */}
        <div className="row justify-content-center">
          {[1, 2,3].map((event, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div className="card">
                <img src={`https://via.placeholder.com/400x200?text=Event+${event}`} className="card-img-top" alt={`Event ${event}`} />
                <div className="card-body">
                  <h5 className="card-title">Event {event}</h5>
                  <p className="card-text">Coming Soon...</p>
                  <Link to={`/myuserevents/${event}`} className="btn btn-dark me-2 w-100 mb-2">
                    Event Details
                  </Link>
                  {isRegistered ? (
                  <button className="btn btn-success w-100" disabled>
                    Attending
                  </button>
                ) : (
                  <button className="btn btn-outline-dark w-100 mb-2" onClick={handleRegisterClick}>
                    Registered 
                  </button>
                )}
                </div>
              </div>
            </div>
          ))}
          

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center text-light mt-5 py-4">
        <div className="social-icons mb-2">
          <a href="#" title="Facebook" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" title="Twitter" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" title="LinkedIn" className="text-light"><i className="bi bi-linkedin"></i></a>
        </div>

        <a href="#top" className="text-info d-block mb-2">Back to Top ↑</a>

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

export default UserEvents;
