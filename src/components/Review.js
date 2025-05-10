import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventReviewList = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewer: "Anonymous",
      rating: 5,
      title: "Loved every moment!",
      pros: "Inspiring talks, organized well",
      cons: "Seats were limited",
      text: "This event exceeded my expectations. Great networking!",
      date: "2025-05-05"
    },
    {
      id: 2,
      reviewer: "Jane Doe",
      rating: 4,
      title: "Good but could be better",
      pros: "Smooth check-in process",
      cons: "Workshops felt rushed",
      text: "I enjoyed the event overall, but breakout sessions were too short.",
      date: "2025-05-03"
    }
  ]);

  return (
      <div style={{ backgroundColor: '#121212',minHeight: '100vh', paddingBottom: '60px' }}>
      <div className=" container">
        <button className="btn btn-dark text-white mb-3 ms-3 mt-3" onClick={() => navigate('/HomePage')}>
          <i className="bi bi-arrow-left btn btn-outline-success"></i> Back To Home Page
        </button>
        <h3>What Attendees Are Saying</h3>
        {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review this event!</p>
        ) : (
        reviews.map((review) => (
          <div key={review.id} className="card mb-3" style={{ backgroundColor: '#1e1e1e', border: '1px solid #333',color: 'white' }}>
            <div className="card-body">
              <h5 className="card-title ">{review.title}</h5>
              <div className="mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <i
                    key={i}
                    className={`bi ${i <= review.rating ? 'bi-star-fill text-warning' : 'bi-star text-secondary'}`}
                  ></i>
                ))}
                <span className="ms-2 ">{review.reviewer} | {review.date}</span>
              </div>
              <p><strong>Pros:</strong> {review.pros}</p>
              <p><strong>Cons:</strong> {review.cons}</p>
              <p>{review.text}</p>
              
            </div>
          </div>
        ))
      )}
    </div>
    </div>  
  );
};

export default EventReviewList;
