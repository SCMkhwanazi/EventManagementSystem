import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending reset link
    alert(`🔐 Reset link sent to: ${email}`);
    setEmail('');
  };

  return (
    <div style={styles.page}>
      <div className="reset-container" style={styles.container}>
        <h2 className="text-center mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter your email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Reset Link</button>
        </form>
        <div className="text-center mt-3">
          <a href="/signin" className="text-info">Back to Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

const styles = {
  page: {
    margin: 0,
    padding: 0,
    height: '100vh',
    background: `url('https://tse3.mm.bing.net/th?id=OIP.LFlIGADL4SrEVBh-EjCGGgHaEK&rs=1&pid=ImgDetMain.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '40px',
    maxWidth: '450px',
    width: '90%',
    borderRadius: '10px',
  }
};
