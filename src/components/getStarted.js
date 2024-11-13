import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/getStarted.css";

const GetStarted = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLostDogClick = () => {
    navigate("/dog-form"); // Navigate to DogForm when "I LOST A DOG" is clicked
  };

  const handleFoundDogClick = () => {
    navigate("/dog-form"); // Navigate to DogForm when "I FOUND A DOG" is clicked
  };

  return (
    <div className="getstarted-container">
      <div className="getstarted-logo">
        <img src={require("./images/petpals-getstarted.png")} alt="Logo" />
      </div>
      <h1>Get started</h1>
      <div className="choose-destination">
        <button className="lost-dog" onClick={handleLostDogClick}>
          I LOST A DOG
        </button>
        <button className="found-dog" onClick={handleFoundDogClick}>
          I FOUND A DOG
        </button>{" "}
        {/* Both buttons navigate to DogForm */}
      </div>
    </div>
  );
};

export default GetStarted;
