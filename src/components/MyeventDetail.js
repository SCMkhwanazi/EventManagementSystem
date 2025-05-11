import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  // Fetch event details using eventId 
  // For demonstration, we'll use a placeholder object
  const [attendees, setAttendees] = useState(37); // fetch data later using sql
  const myevent = {
    id: eventId,
    title: `Event ${eventId}`,
    description: `Detailed information about Event ${eventId}`,
    date: '2025-05-10',
    location: 'Johannesburg, South Africa',
  };

  return (

    <div className="container mt-5">
      <button className="btn btn-dark text-white mb-3 ms-3 mt-3" onClick={() => navigate('/organiser')}>
        <i className="bi bi-arrow-left"></i> Back To Home Page
      </button>
      <h1>{myevent.title}</h1>
        <div className="row g-3">
          {/* Image with attendee count */}
          <div className="col-md-6 position-relative">
            <img
              src={`https://via.placeholder.com/600x300?text=Event+${eventId}`}
              alt={`Event ${eventId}`}
              className="img-fluid rounded"
            />
            {/* Attendee count circle */}
            <div className="position-absolute top-0 end-0 m-3">
              <div
                className="bg-success text-white rounded-circle d-flex flex-column align-items-center justify-content-center"
                style={{
                  width: '120px',
                  height: '120px',
                  textAlign: 'center',
                  padding: '10px',
                }}
              >
                <small style={{ fontSize: '0.75rem' }}>Registered</small>
                <small style={{ fontSize: '0.75rem' }}>Attendees</small>
                <strong style={{ fontSize: '1.25rem' }}>{attendees}</strong>
              </div>
            </div>
          </div>
         </div>
      <p>{myevent.description}</p>
      <p><strong>Date:</strong> {myevent.date}</p>
      <p><strong>Location:</strong> {myevent.location}</p>
      {/* Add more event details as needed */}
    </div>
  );
};

export default EventDetail;
