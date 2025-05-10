import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [matchMessage, setMatchMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const formRef = useRef(null);

  const handleToggle = (type) => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedForm = { ...formData, [id]: value };
    setFormData(updatedForm);

    if (id === 'password' || id === 'confirmPassword') {
      if (!updatedForm.confirmPassword) {
        setMatchMessage('');
      } else if (updatedForm.password === updatedForm.confirmPassword) {
        setMatchMessage('✅ Passwords match!');
      } else {
        setMatchMessage('❌ Passwords do not match.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMatchMessage('❌ Passwords do not match.');
      return;
    }

    // Simulate success
    setShowToast(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setMatchMessage('');
      setShowToast(false);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingBottom: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <form style={styles.content} onSubmit={handleSubmit} ref={formRef}>
        <h1 className="text-center ">Sign Up</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="John Doe"value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">Password</label>
          <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" value={formData.password} onChange={handleChange} required />
          <i className={`bi toggle-icon ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`} onClick={() => handleToggle('password')} style={styles.icon} />
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type={showConfirmPassword ? 'text' : 'password'} className="form-control" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <i className={`bi toggle-icon ${showConfirmPassword ? 'bi-eye' : 'bi-eye-slash'}`} onClick={() => handleToggle('confirm')} style={styles.icon} />
          <div className={`feedback-message ${formData.password === formData.confirmPassword ? 'success-message' : 'error-message'}`} style={styles.message}>
            {matchMessage}
          </div>
        </div>

        <button type="submit" className="btn btn-outline-success w-100">Sign Up</button>
      </form>

      {/* Toast */}
      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
          <div className="toast show align-items-center text-bg-success border-0" role="alert">
            <div className="d-flex">
              <div className="toast-body">✅ Sign Up Successful!</div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowToast(false)}></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;

const styles = {
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '60px',
    maxWidth: '500px',
    borderRadius: '10px',
  },
  icon: {
    position: 'absolute',
    right: '15px',
    top: '35px',
    cursor: 'pointer',
    color: '#6c757d',
  },
  message: {
    fontSize: '0.9em',
    marginTop: '5px',
  }
};
