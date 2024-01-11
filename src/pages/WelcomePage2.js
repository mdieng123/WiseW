// WelcomePage2.js
import React from 'react';
import '../style/WelcomePage.css';
import { Link } from 'react-router-dom';
import Wallet from '../images/wallet.png'

const WelcomePage2 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
        <div className="image-container">
        <img src = {Wallet} width={200} height={200} alt="Money" />
      </div>
      <p style={{color: 'black', fontSize: 18}}>Master Your Money: WiseWallet Guides You to Financial Success</p>
      </div>
      
      <div className="circles-container">
        <div className="circle"></div>
        <div className="circle active"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div>
        <Link to="/" className="next-button" style={{margin: 10}}>Previous</Link>
        <Link to="/welcome3" className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default WelcomePage2;
