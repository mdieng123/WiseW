// WelcomePage2.js
import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';
import money from '../images/money3.png'

const WelcomePage2 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <div className="image-container">
        <img src = {money} width={75} height={75} alt="Money" />
      </div>
        <p>Master Your Money: WiseWallet Guides You to Financial Success</p>
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
