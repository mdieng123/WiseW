// WelcomePage4.js
import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage4 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <h1>Page 4</h1>
        <p>Welcome to the fourth page.</p>
      </div>
      <div className="image-container">
        <img src="../images/money4.jpg" alt="Money" />
      </div>
      <div className="circles-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle active"></div>
      </div>
      <Link to="/" className="next-button">Finished</Link>
      <Link to="/welcome3" className="next-button">Previous</Link>
    </div>
  );
};

export default WelcomePage4;
