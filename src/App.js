import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoadingScreen from "./components/loadingScreen";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import TermsModal from "./components/termModal";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000); // Adjusted to 3 seconds as per your earlier request

    return () => clearTimeout(timer);
  }, []);

  const handleSignUpClick = () => {
    setShowTermsModal(true); // Show terms modal when signing up
  };

  const handleAgree = () => {
    setShowTermsModal(false); // Hide terms modal
    navigate("/register"); // Navigate to the register form
  };

  const handleCloseModal = () => {
    setShowTermsModal(false); // Close modal
  };

  // const handleLoginRedirect = () => {
  //   navigate("/login"); // Redirect to login page
  // };

  return (
    <div>
      {showLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<LoginForm onSignUpClick={handleSignUpClick} />}
          />
          <Route
            path="/login"
            element={<LoginForm onSignUpClick={handleSignUpClick} />}
          />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      )}

      {/* Show Terms Modal */}
      {showTermsModal && (
        <TermsModal onClose={handleCloseModal} onAgree={handleAgree} />
      )}


    </div>
  );
};

export default App;