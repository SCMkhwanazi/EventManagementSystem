import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CreateEvent = () => {
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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, image: file }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('eventName', formData.eventName);
    data.append('eventDescription', formData.eventDescription);
    data.append('location', formData.location);
    data.append('eventDate', formData.eventDate);
    data.append('eventTime', formData.eventTime);
    data.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:3001/api/events', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        alert('✅ Event Created!');
        setFormData({
          eventName: '',
          eventDescription: '',
          location: '',
          eventDate: '',
          eventTime: '',
          image: null,
        });
      } else {
        alert('❌ Failed to create event');
      }
    } catch (error) {
      console.error('Error uploading:', error);
      alert('❌ Error uploading event');
    }
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
          <button className="btn btn-outline-success me-2 ">Create Events</button>
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
          <h1 className="text-center mb-5">Create Event</h1>
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

          <div className="mb-3">
            <label htmlFor="eventDescription" className="form-label">Event Description</label>
            <textarea
              className="form-control"
              id="eventDescription"
              placeholder="Event Description"
              rows="3"
              value={formData.eventDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="eventDate" className="form-label">Event Date</label>
            <input
              type="date"
              className="form-control"
              id="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="eventTime" className="form-label">Event Time</label>
            <input
              type="time"
              className="form-control"
              id="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Event Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">Create Event</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default CreateEvent;
