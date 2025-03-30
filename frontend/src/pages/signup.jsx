import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Mock Signup (replace with actual API call)
      console.log('Signup Successful');
      navigate('/login'); // Redirect to Login page
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-window">
        <div className="signup-header">
          <div className="signup-lang">Fr/Eng</div>
        </div>

        <div className="signup-content">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Sign Up</button>
          </form>
          <button className="google-btn">Sign Up with Google</button>
          <p className="signup-login-link">
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
