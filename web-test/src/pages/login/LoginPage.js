import React, { useState } from 'react';
import * as API from '../../api/api'

import './Login.css'; // Import the CSS file for styling

const LoginForm = () => {
  console.log('LOGIN PAGE')

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginBtn = async () => {
    let loginInfo = {
      "username" : username,
      "password" : password
    }
    const response = await API.apiLogin(loginInfo);

    if(!response) {
      alert("Sai thông tin đăng nhập");
    } else {
      sessionStorage.setItem('token', response.token);
      sessionStorage.setItem('username', username);
      window.location.href = '/bill';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
