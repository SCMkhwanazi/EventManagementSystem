import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css'; // Assuming you put your custom CSS in Feedback.css

const Feedback = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log('Feedback submitted:', { name, email, feedback, rating });
  };

  return (
    <div className="container mt-5">
        {/* Back Button */}
      <button className="btn btn-dark mb-3 ms-3 mt-3 text-white" onClick={() => navigate('/HomePage')}>
        <i className="bi bi-arrow-left me-2"></i> Back To Home Page
      </button>
      <h1 className="mb-4">
        <i className="bi bi-chat-square-dots"></i> Feedback & Review
      </h1>
      <p>We value your input! Let us know what you think of HackTrack.</p>

      <div className="form-container mt-4">
        <form onSubmit={handleSubmit}>

          {/* Name and Email */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address (optional)</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          {/* Star Rating */}
          <div className="mb-3">
            <label className="form-label">Rate Us</label>
            <div className="rating-stars" id="ratingStars">
              {[1, 2, 3, 4, 5].map((value) => (
                <i
                  key={value}
                  className={`bi bi-star ${rating >= value ? 'active' : ''}`}
                  onClick={() => handleStarClick(value)}
                ></i>
              ))}
            </div>
            <input type="hidden" name="rating" value={rating} />
          </div>

          {/* Feedback Text */}
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">Your Feedback</label>
            <textarea
              className="form-control"
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              required
              placeholder="Share your thoughts..."
            />
          </div>

          <button type="submit" className="btn btn-outline-success">Submit Feedback</button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <div className="social-icons mb-2">
          <a href="facebook.com" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="twitter.com" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="linkedin.com" className="text-light"><i className="bi bi-linkedin"></i></a>
        </div>
        <a href="#top" className="text-info d-block mb-2">Back to Top ↑</a>
        <div className="contact-info text-light">
          📧 support@hacktrack.com | ☎ +27 (71) 376-6731
        </div>
        <div style={{ marginTop: '15px' }}>
          &copy; 2025 HackTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Feedback;
