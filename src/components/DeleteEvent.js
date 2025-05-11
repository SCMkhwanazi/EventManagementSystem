import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DeleteEvent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    location: '',
    eventDate: '',
    eventTime: '',
    image: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData
    console.log('Event Deleted:', formData);
    alert('✅ Event Deleted!');
    // Reset form
    setFormData({
      eventName: '',
    });
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingBottom: '60px' }}>
   <div>
      {/* Back Button */}
      <button className="btn btn-dark mb-3 ms-3 mt-3 text-white" onClick={() => navigate('/HomePage')}>
        <i className="bi bi-arrow-left btn btn-outline-success"></i> Back To Home Page
      </button>
   {/* Button Group */}
      <div className="container text-center pt-3">
        <div className="btn-group" role="group" aria-label="Navigation">
          <button className="btn btn-outline-success me-2" onClick={() => navigate('/organiser')}>My Events</button>
          <button className="btn btn-outline-success me-2" onClick={() => navigate('/create-event')}>Create Events</button>
          <button type="button" className="btn btn-outline-success me-2" onClick={() => navigate('/delete-event')}>
            Delete Event
          </button>
          <button type="button" className="btn btn-outline-success" onClick={() => navigate('/edit-event')}>
            Edit Event
          </button>
        </div>
      </div>
      <br></br>
      {/* Form */}
      <div >
      <form onSubmit={handleSubmit} className="mx-auto p-4 rounded shadow form-theme">
        <h1 className="text-center mb-5">Delete Event</h1>
          <div className="mb-3">
            <label htmlFor="eventName" className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="Event Name"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Delete Event</button>
        </form>
      </div>
    </div>
  </div>
  );
};

     

     

export default DeleteEvent;
