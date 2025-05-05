import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  // Fetch event details using eventId 
  // For demonstration, we'll use a placeholder object
  const event = {
    id: eventId,
    title: `Event ${eventId}`,
    description: `Detailed information about Event ${eventId}`,
    date: '2025-05-10',
    location: 'Johannesburg, South Africa',
  };

  return (

    <div className="container mt-5">
      <button className="btn btn-dark text-white mb-3 ms-3 mt-3" onClick={() => navigate('/UserPage')}>
        <i className="bi bi-arrow-left"></i> Back To Home Page
      </button>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      {/* Add more event details as needed */}

      <button className="btn btn-success mb-4" >
            <i className="bi bi-calendar-plus me-2"></i> Add Event
      </button>
    </div>
  );
};

export default EventDetail;
