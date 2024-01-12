// WelcomePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/WelcomePage.css';
import Cash from '../images/cash.png';

const WelcomePage = () => {
  

  return (
    <div className="welcome-page">
      <div className="content">
        <h1 style={{color: 'black'}}>Welcome to Wise Wallet</h1>
        <div className="image-container">
        <img src = {Cash} width={200} height={200} alt="Cash and Coins" />
      </div>
        <p style={{color: 'black', fontSize: 18}}>Empower your financial journey with WiseWallet.</p>
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
