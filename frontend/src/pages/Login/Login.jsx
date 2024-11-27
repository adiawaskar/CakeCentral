import React, { useState } from "react";
import "./Login.css"; // Import the CSS for styling

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and Sign Up form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handleToggle = () => {
    setIsSignUp(!isSignUp); // Toggle between forms
    setError(''); // Reset error message when toggling
    setSuccessMessage(''); // Reset success message when toggling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const data = { email, password };
    const url = isSignUp ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      
      if (response.ok) {
        if (isSignUp) {
          setSuccessMessage('Sign Up Successful! Please log in.');
        } else {
          // On successful login, store the token and redirect (if needed)
          localStorage.setItem('token', result.token);
          window.location.href = '/landing'; // You can choose to keep this or redirect to another page
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(result.message); // Display error message
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

        {/* Form handling for Login or Sign Up */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Only show Confirm Password field for Sign Up */}
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input 
                type="password" 
                id="confirm-password" 
                placeholder="Confirm your password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          <button type="submit" className="btn">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Error handling */}
        {error && <p className="error-message">{error}</p>}

        {/* Success message for signup */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Toggle text to switch between Login and Sign Up */}
        <p className="toggle-text">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span className="link" onClick={handleToggle}>
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span className="link" onClick={handleToggle}>
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
