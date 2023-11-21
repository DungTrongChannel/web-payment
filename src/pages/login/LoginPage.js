import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'; // Import the CSS file for styling

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginBtn = (e) => {
    // go to home page
    navigate('/home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here using 'username' and 'password' states
    console.log('Username:', username);
    console.log('Password:', password);
    // You can send this data to an API or perform validation here
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" onClick={handleLoginBtn}>Login</button>
        <a href='/register'>Register?</a>
      </form>
    </div>
  );
};

export default LoginForm;
