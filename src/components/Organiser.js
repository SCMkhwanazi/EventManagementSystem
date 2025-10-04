import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Organiser = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/events') //API endpoint
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);
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
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            events.map((event) => (
              <div className="col-md-4 mb-5" key={event.id}>
                <div className="card" style={{ minWidth: '300px' }}>
                  <img src={event.image} className="card-img-top" alt={event.eventName} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{event.eventName}</h5>
                    <Link to={`/myevent/${event.id}`} className="btn btn-dark me-2">
                      View Event
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Organiser;
