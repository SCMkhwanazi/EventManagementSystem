import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Notifications = () => {
    const navigate = useNavigate();
  const notifications = [
    {
      title: '🎉 New Hackathon Added!',
      message: 'We’ve just listed the Global AI Hackathon 2025. Check it out on the homepage.',
      time: 'Posted 2 hours ago',
    },
    {
      title: '📢 System Update',
      message: 'We’re upgrading our platform on April 22. Some features may be temporarily unavailable between 12 AM and 4 AM UTC.',
      time: 'Posted yesterday',
    },
    {
      title: '💬 Feedback Received',
      message: 'Thanks for your feedback! We’ve added the ability to save favorite events to your dashboard.',
      time: 'Posted 3 days ago',
    }
  ];

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
        {/* Back Button */}
      <button className="btn btn-dark mb-3 ms-3 mt-3 text-white" onClick={() => navigate('/HomePage')}>
        <i className="bi bi-arrow-left me-2"></i> Back To Home Page
      </button>
      {/* Page Header */}
      <div className="container mt-5">
        <h1 className="mb-4"><i className="bi bi-bell-fill"></i> Notifications</h1>

        {/* Notification Cards */}
        {notifications.map((note, index) => (
          <div className="notification-card mb-3 p-4 rounded" key={index} style={{ backgroundColor: '#1e1e1e', border: '1px solid #333' }}>
            <h5>{note.title}</h5>
            <p>{note.message}</p>
            <small className="text-muted">{note.time}</small>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-4 mt-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', color: '#ccc' }}>
        <div className="mb-2">
          <a href="facebook.com" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="twitter.com" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="linkedin.com" className="text-light"><i className="bi bi-linkedin"></i></a>
        </div>
        <a href="#top" className="text-info d-block mb-2">Back to Top ↑</a>
        <div>
          📧 support@hacktrack.com | ☎ +27 (71) 376-6731
        </div>
        <div className="mt-3">
          &copy; 2025 HackTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Notifications;
/*file created as SecondNotification because windows keeps detecting duplicate files */