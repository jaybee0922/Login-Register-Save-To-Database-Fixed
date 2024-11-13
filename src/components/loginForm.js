import React, { useState } from "react";
import "../css/loginForm.css";

const LoginForm = ({ onSignUpClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="login-form-container">
      <div className="login-logo">
        <img src={require("./images/petpals-login.png")} alt="Logo" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="login-text">
        Don't have an account?{" "}
        <a href="#" onClick={onSignUpClick}>Sign Up</a> {/* Click handler to show terms modal */}
      </p>
    </div>
  );
};

export default LoginForm; 