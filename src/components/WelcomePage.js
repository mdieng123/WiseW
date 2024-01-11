// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import money from '../images/money1.jpg'

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <h1>WiseWallet</h1>
        <div className="image-container">
        <img src = {money} width={75} height={75} alt="Money" />
      </div>
        <p>Empower Your Financial Journey with WiseWallet</p>
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
