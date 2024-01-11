// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <h1>Welcome to Your App</h1>
        <p>Your app description goes here.</p>
      </div>
      <div className="image-container">
        <img src="../images/money1.jpg" alt="Money" />
      </div>
      <div className="circles-container">
        <div className="circle active"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Link to="/welcome2" className="next-button">Next</Link>
    </div>
  );
};

export default WelcomePage;
