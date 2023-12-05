import React, { useState } from 'react';
// import './Register.css'; // Import the CSS file for styling
import * as API from '../../api/api'

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateCheckPasswordMatch()){
      // call api register
      let data = {
        "username" : username,
        "password" : password
      }
      API.apiRegister(data);
    }
  };

  const validateCheckPasswordMatch = () => {
    if (username.trim().length === 0) {
      alert("Tài khoản không được để trống")
    } else if (password.trim().length === 0) {
      alert("Mật khẩu không được để trống")
    } else if (password !== confirmPassword) {
      alert("Xác nhận mật khẩu không khớp")
    } else {
      return true;
    }
  }

  return (
    <div className="form-container">
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="register-username">Tài khoản:</label>
          <input
            type="text"
            id="register-username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="register-email">Email:</label>
          <input
            type="email"
            id="register-email"
            value={email}
            onChange={handleEmailChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Xác nhận mật khẩu:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Đăng Ký</button>
      </form>
    </div>
  );
};

export default RegisterForm;
