// WelcomePage3.js
import React from 'react';
import '../style/WelcomePage.css';
import { Link } from 'react-router-dom';
import Piggy from '../images/piggy-bank.png'


const WelcomePage3 = () => {
  return (
    <div className="welcome-page">
      <div className="content">
      <div className="image-container">
        <img src = {Piggy} width={200} height={200} alt="Piggy Bank" />
      </div>
        <p style={{color: 'black', fontSize: 18}}>Banish Money Worries: WiseWallet Keeps You in Control and On Budget</p>
      </div>
      
      <div className="circles-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle active"></div>
        <div className="circle"></div>
      </div>
      <div>
        <Link to="/welcome2" className="next-button" style={{margin: 10}}>Previous</Link>
        <Link to="/welcome4" className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default WelcomePage3;
