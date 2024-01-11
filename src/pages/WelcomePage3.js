// WelcomePage3.js
import React from 'react';
import '../style/WelcomePage.css';
import { Link } from 'react-router-dom';
import money from '../images/money1.jpg'


const WelcomePage3 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
      <div className="image-container">
        <img src = {money} width={75} height={75} alt="Money" />
      </div>
        <p>Banish Money Worries: WiseWallet Keeps You in Control and On Budget</p>
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
