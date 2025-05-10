import React, { useState } from 'react';
import './EventReview.css';
import { useNavigate } from 'react-router-dom';

const EventReview = ({ eventName }) => {
  const navigate = useNavigate();
  const [reviewTitle, setReviewTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({
      eventName,
      reviewTitle,
      rating,
      pros,
      cons,
      reviewText,
      image,
    });
    alert("Thank you for your review!");
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingBottom: '100px' }}>
      <div className="container ">
      <button className="btn btn-dark text-white mb-3 ms-3 mt-3" onClick={() => navigate('/UserPage')}>
        <i className="bi bi-arrow-left btn btn-outline-success"></i> Back To Home Page
      </button>
      
      <form onSubmit={handleSubmit} className="mx-auto p-4 rounded shadow form-theme">
        <h2 className="text-center mb-3">Review<strong>{eventName}</strong></h2>
        <div className="mb-2">
          <label htmlFor="reviewTitle" className="form-label">Review Title</label>
          <input
            type="text"
            className="form-control"
            id="reviewTitle"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            required
            placeholder="Amazing event, well organized!"
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Your Rating</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <i
                key={value}
                className={`bi bi-star${rating >= value ? '-fill' : ''}`}
                onClick={() => setRating(value)}
              ></i>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="pros" className="form-label">Pros</label>
          <input
            type="text"
            className="form-control"
            id="pros"
            value={pros}
            onChange={(e) => setPros(e.target.value)}
            placeholder="Great speakers, organized sessions..."
          />
        </div>

        <div className="mb-2">
          <label htmlFor="cons" className="form-label">Cons</label>
          <input
            type="text"
            className="form-control"
            id="cons"
            value={cons}
            onChange={(e) => setCons(e.target.value)}
            placeholder="Venue was hard to find, etc."
          />
        </div>

        <div className="mb-2">
          <label htmlFor="reviewText" className="form-label">Detailed Review</label>
          <textarea
            className="form-control"
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            required
            placeholder="Share your full experience at the event..."
          />
        </div>

        

        <button type="submit" className="btn btn-success  w-100">Submit Review</button>
      </form>
    </div>
    </div>
  );
};

export default EventReview;
