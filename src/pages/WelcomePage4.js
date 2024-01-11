// WelcomePage4.js
import React from 'react';
import '../style/WelcomePage.css';
import { Link } from 'react-router-dom';
import MoneyHand from '../images/money-hand.png';
 

const WelcomePage4 = () => {
  return (
    <div className="welcome-page">
    <div className="content">
    <div className="image-container">
      <img src = {MoneyHand} width={200} height={200} alt="Money and two hands" />
    </div>
      <p style={{color: 'black', fontSize: 18}}>Build a Solid Financial Future: WiseWallet Safeguards Your Money Journey.</p>
    </div>
    
    <div className="circles-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle active"></div>
    </div>
    <div>
      <Link to="/welcome3" className="next-button" style={{margin: 10}}>Previous</Link>
      <Link to="/login" className="next-button">Next</Link>
    </div>
  </div>
  );
};

export default WelcomePage4;
