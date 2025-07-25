import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Organiser = () => {
  const navigate = useNavigate();
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
    ];
  return (
    <div>
      {/* Back Button */}
      <button className="btn btn-dark text-white mb-3 ms-3 mt-3" onClick={() => navigate('/HomePage')}>
        <i className="bi bi-arrow-left btn btn-outline-success"></i> Back To Home Page
      </button>

      {/* Main Content */}
      <div className="container text-center pt-5">
        {/* Button Group */}
        <div className="btn-group mb-5" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-success me-2" onClick={() => navigate('/organiser')}>
            My Events
          </button>
          <button type="button" className="btn btn-outline-success me-2" onClick={() => navigate('/create-event')}>
            Create Events
          </button>
          <button type="button" className="btn btn-outline-success me-2" onClick={() => navigate('/delete-event')}>
            Delete Event
          </button>
          <button type="button" className="btn btn-outline-success" onClick={() => navigate('/edit-event')}>
            Edit Event
          </button>
        </div>
          <h1 className="text-center mb-5">My Events</h1>
        {/* Event Cards */}
        <div className="row justify-content-center">
          {events.map((event) => (
            <div className="col-md-4 mb-5">
            <div className="card" key={event.id} style={{ minWidth: '300px' }}>
                <img src={event.image} className="card-img-top" alt={event.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="card-title">{event.title}</h5>
                  <Link to={`/myevent/${event.id}`} className="btn btn-dark me-2">
                    View Event
                  </Link>
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

export default Organiser;
