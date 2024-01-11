// Accounts.js
import React from "react";
import MasterCard from "../images/mastercard-logo.png";
import Visa from "../images/visa-logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const Accounts = () => {
    const pageStyle = {
        backgroundColor: '#F9FBF8',
      };
    

  const card_style = {
    padding: "20px",
    border: "1px solid #ddd",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
  };

  const accounts_style = {
    padding: "20px",
  };

  return (
    <div className="page" style={pageStyle}>
        <h1 style={{margin: 30, color: 'black'}}>Accounts</h1>
      <div className="bank-accounts" style={accounts_style}>
        <p style={{color: 'black', fontSize: 24, margin: 10, }}>Bank Accounts</p>
        <div style={card_style} >
            <img src={MasterCard} style={{hieght: 50, width: 50, objectFit: 'contain'}} alt="Profile" />
            <div>
                <p style={{color: 'black', fontSize: 12 }}>SAV</p>
                <p style={{color: 'black', fontSize: 12 }}>***4345</p>
            </div>
            <p style={{color: 'black', fontSize: 12 }}>$ 560</p>
        </div>
        <div style={card_style} >
            <img src={Visa} style={{hieght: 50, width: 50, objectFit: 'contain'}} alt="Profile" />
            <div>
                <p style={{color: 'black', fontSize: 12 }}>SAV</p>
                <p style={{color: 'black', fontSize: 12 }}>***4345</p>
            </div>
            <p style={{color: 'black', fontSize: 12 }}>$ 560</p>
        </div>
      </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faPlus} style={{height: 30, width: 30, marginHorizontal: 10, color: '#ddd'}}/>
        </div>

      <div className="cash-accounts" style={accounts_style}>
      <p style={{color: 'black', fontSize: 24, margin: 10, }}>Cash</p>
        <div style={card_style} >
            <FontAwesomeIcon icon={faMoneyBillWave} style={{height: 45, width: 45}}/>
            <div>
                <p style={{color: 'black', fontSize: 12 }}>Cash 1</p>
                <p style={{color: 'black', fontSize: 12 }}>Selling Income</p>
            </div>
            
            <p style={{color: 'black', fontSize: 12 }}>$ 560</p>
        </div>
        <div style={card_style} >
            <FontAwesomeIcon icon={faMoneyBillWave} style={{height: 45, width: 45}}/>
            <div>
                <p style={{color: 'black', fontSize: 12 }}>Cash 1</p>
                <p style={{color: 'black', fontSize: 12 }}>Selling Income</p>
            </div>
            <p style={{color: 'black', fontSize: 12 }}>$ 560</p>
        </div>
        
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faPlus} style={{height: 30, width: 30, marginHorizontal: 10, color: '#ddd'}}/>
        </div>
      
    </div>
  );
};

export default Accounts;
