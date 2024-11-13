// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import LoadingScreen from "./components/loadingScreen";
// import LoginForm from "./components/loginForm";
// import RegisterForm from "./components/registerForm";
// import GetStarted from "./components/getStarted"; // Import GetStarted component
// import DogForm from "./components/dogForms"; // Import DogForm component
// import TermsModal from "./components/termModal";

// const App = () => {
//   const [showLoading, setShowLoading] = useState(true);
//   const [showTermsModal, setShowTermsModal] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoading(false);
//     }, 1000); // Adjusted to 1 second loading screen

//     return () => clearTimeout(timer);
//   }, []);

//   const handleSignUpClick = () => {
//     setShowTermsModal(true); // Show terms modal when signing up
//   };

//   const handleAgree = () => {
//     setShowTermsModal(false); // Hide terms modal
//     navigate("/register"); // Navigate to the register form
//   };

//   const handleCloseModal = () => {
//     setShowTermsModal(false); // Close modal
//   };

//   return (
//     <div>
//       {showLoading ? (
//         <LoadingScreen />
//       ) : (
//         <Routes>
//           <Route
//             path="/"
//             element={<LoginForm onSignUpClick={handleSignUpClick} />}
//           />
//           <Route
//             path="/login"
//             element={<LoginForm onSignUpClick={handleSignUpClick} />}
//           />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/get-started" element={<GetStarted />} /> {/* GetStarted route */}
//           <Route path="/dog-form" element={<DogForm />} /> {/* DogForm route */}
//         </Routes>
//       )}

//       {/* Show Terms Modal */}
//       {showTermsModal && (
//         <TermsModal onClose={handleCloseModal} onAgree={handleAgree} />
//       )}
//     </div>
//   );
// };

// export default App;
















import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/loadingScreen';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import TermsModal from './components/termModal';
import GetStarted from './components/getStarted'; // Import the GetStarted component

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignUpClick = () => {
    setShowTermsModal(true);  // Open the terms modal when the user clicks "Sign Up"
  };

  const handleAgree = () => {
    setShowTermsModal(false);
    navigate('/register');  // Navigate to the register page once terms are agreed
  };

  const handleCloseModal = () => {
    setShowTermsModal(false);  // Close the terms modal if canceled
  };

  return (
    <div>
      {showLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<LoginForm onSignUpClick={handleSignUpClick} />} />
          <Route path="/login" element={<LoginForm onSignUpClick={handleSignUpClick} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/get-started" element={<GetStarted onGetStarted={() => navigate('/dog-form')} />} /> {/* navigate to /dog-form */}
        </Routes>
      )}

      {showTermsModal && (
        <TermsModal onClose={handleCloseModal} onAgree={handleAgree} />
      )}
    </div>
  );
};

export default App;
