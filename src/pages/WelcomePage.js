// WelcomePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/WelcomePage.css';
import Cash from '../images/cash.png';

const WelcomePage = () => {
  // useEffect(() => {
  //   // Chatbot configuration
  //   window.embeddedChatbotConfig = {
  //     chatbotId: "aew9Bl39l6J9s9xPfiuFS",
  //     domain: "www.chatbase.co"
  //   };

  //   // Load Chatbot script
  //   const script = document.createElement('script');
  //   script.src = 'https://www.chatbase.co/embed.min.js';
  //   script.chatbotId = 'aew9Bl39l6J9s9xPfiuFS';
  //   script.domain = 'www.chatbase.co';
  //   script.defer = true;

  //   document.head.appendChild(script);

  //   // Clean up on component unmount
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

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
