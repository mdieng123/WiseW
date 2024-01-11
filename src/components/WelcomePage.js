// WelcomePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import money from '../images/money2.png'

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
