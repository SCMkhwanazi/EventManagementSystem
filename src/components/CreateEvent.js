import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData
    console.log('Event created:', formData);
    alert('✅ Event Created!');
    // Reset form
    setFormData({
      eventName: '',
      eventDescription: '',
      location: '',
      eventDate: '',
      eventTime: '',
      image: null,
    });
  };

  return (
    <div>
      {/* Back Button */}
      <button className="btn btn-dark mb-3 ms-3 mt-3 text-white" onClick={() => navigate('/HomePage')}>
        <i className="bi bi-arrow-left me-2"></i> Back To Home Page
      </button>

      {/* Button Group */}
      <div className="container text-center pt-3">
        <div className="btn-group" role="group" aria-label="Navigation">
          <button className="btn btn-light" onClick={() => navigate('/organiser')}>My Events</button>
          <button className="btn btn-dark text-white">Create Events</button>
        </div>
      </div>

      {/* Form */}
      <div >
      <form onSubmit={handleSubmit}className="mx-auto p-4 rounded shadow"style={{maxWidth: '650px'
      ,backgroundColor: 'rgba(255, 255, 255, 0.85)'
        ,backdropFilter: 'blur(5px)'}}>
        
        
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

      {/* Footer */}
      <footer  style={styles.footer} >
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

const styles = {
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    textAlign: 'center',
    padding: '20px',
    fontSize: '14px',
    color: '#ccc',
  },
};

export default CreateEvent;
