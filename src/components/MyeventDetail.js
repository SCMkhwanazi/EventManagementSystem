import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log('Fetching event with ID:', eventId);
    axios.get(`http://localhost:3001/api/viewevent/${eventId}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event:', error);
        console.log(`Fetching: http://localhost:3001/api/viewevent/${eventId}`);

      });
  }, [eventId]);

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="container mt-5">
      <button
        className="btn btn-dark text-white mb-3 ms-3 mt-3"
        onClick={() => navigate('/HomePage')}
      >
        <i className="bi bi-arrow-left"></i> Back To Home Page
      </button>

      <h1>{event.eventName}</h1>

      <div className="row g-3">
        {/* Image with attendee count */}
        <div className="col-md-6 position-relative">
          {event.image ? (
            <img
              src={event.image}
              alt={event.eventName}
              className="img-fluid rounded"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>

      {/* Placeholder text, or use real data if available */}
      <p className="mt-4">
        <strong>Description:</strong> {event.eventDescription || 'No description available.'}
      </p>
      <p>
        <strong>Date:</strong> {event.eventDate || 'Not specified'}
      </p>
      <p>
        <strong>Time:</strong> {event.eventTime || 'Not specified'}
      </p>
      <p>
        <strong>Location:</strong> {event.location || 'Not specified'}
      </p>
    </div>
  );
};

export default EventDetail;
