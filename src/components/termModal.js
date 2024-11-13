import React, { useState } from "react";
import "../css/termsModal.css"; 

const TermsModal = ({ onClose, onAgree }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Petpals Registration Terms and Agreements</h2>
        <p>
          {/* Paste the content of your terms here or keep it shorter */}
          <strong>1. Introduction</strong>
          <br />
          Welcome to Petpals, a mobile application designed to help track lost
          and found pet dogs using an image recognition algorithm. By signing
          up, you agree to the following terms and agreements...
        </p>

        <p>
          <strong> 2. Acceptance of Terms </strong> <br /> By creating an
          account, you confirm that you have read, understood, and accepted
          these terms. If you do not agree to any part of these terms, please
          refrain from using Petpals.
        </p>

        <p>
          <strong> 3. Eligibility </strong> <br />
          You must be at least 13 years old to create an account. By
          registering, you affirm that you meet this minimum age requirement.
        </p>

        <p>
          <strong> 4. Account Responsibilities </strong> <br />
          <ul>
            <li>
              {" "}
              You are responsible for keeping your login credentials
              confidential.{" "}
            </li>
            <li>
              {" "}
              Notify us immediately if you suspect unauthorized access to your
              account.{" "}
            </li>
            <li>
              {" "}
              Petpals is not liable for any losses resulting from failure to
              secure your account.
            </li>
          </ul>
        </p>

        <p>
          <strong> 4. Account Responsibilities </strong> <br />
          <ul>
            <li>
              {" "}
              You are responsible for keeping your login credentials
              confidential.{" "}
            </li>
            <li>
              {" "}
              Notify us immediately if you suspect unauthorized access to your
              account.{" "}
            </li>
            <li>
              {" "}
              Petpals is not liable for any losses resulting from failure to
              secure your account.
            </li>
          </ul>
        </p>
        <p>
          <strong> 4. Account Responsibilities </strong> <br />
          <ul>
            <li>
              {" "}
              You are responsible for keeping your login credentials
              confidential.{" "}
            </li>
            <li>
              {" "}
              Notify us immediately if you suspect unauthorized access to your
              account.{" "}
            </li>
            <li>
              {" "}
              Petpals is not liable for any losses resulting from failure to
              secure your account.
            </li>
          </ul>
        </p>
        {/* Rest of the terms go here */}
        <div className="agreement-checkbox">
          <input
            type="checkbox"
            id="agree-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree-checkbox">
            I accept and understand the agreement.
          </label>
        </div>
        <button className="next-button" onClick={onAgree} disabled={!isChecked}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
