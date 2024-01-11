// WelcomePage3.js
import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';


const WelcomePage3 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <h1>Page 3</h1>
        <p>Welcome to the third page.</p>
      </div>
      <div className="image-container">
        <img src="../images/money3.jpg" alt="Money" />
      </div>
      <div className="circles-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle active"></div>
        <div className="circle"></div>
      </div>
      <Link to="/welcome4" className="next-button">Next</Link>
      <Link to="/welcome2" className="next-button">Previous</Link>
    </div>
  );
};

export default WelcomePage3;
