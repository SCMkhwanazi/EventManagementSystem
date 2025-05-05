import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  // Fetch event details using eventId 
  // For demonstration, we'll use a placeholder object
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
      <p>{myevent.description}</p>
      <p><strong>Date:</strong> {myevent.date}</p>
      <p><strong>Location:</strong> {myevent.location}</p>
      {/* Add more event details as needed */}
    </div>
  );
};

export default EventDetail;
