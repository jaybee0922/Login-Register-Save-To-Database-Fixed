import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "../css/loginForm.css";

const LoginForm = ({ onSignUpClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here

    // After successful login, navigate to GetStarted page
    navigate("/get-started"); // Navigate to /get-started route
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
        <button
          type="button"
          onClick={onSignUpClick}
          className="sign-up-link-button"
        >
          Sign Up
        </button> 
      </p>
    </div>
  );
};

export default LoginForm;
