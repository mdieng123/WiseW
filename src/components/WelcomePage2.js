// WelcomePage2.js
import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';


const WelcomePage2 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <h1>Page 2</h1>
        <p>Welcome to the second page.</p>
      </div>
      <div className="image-container">
        <img src="../images/money2.jpg" alt="Money" />
      </div>
      <div className="circles-container">
        <div className="circle"></div>
        <div className="circle active"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Link to="/welcome3" className="next-button">Next</Link>
      <Link to="/" className="next-button">Previous</Link>
    </div>
  );
};

export default WelcomePage2;
