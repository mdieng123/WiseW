import React from "react";
import Food_Folder from "../images/food-folder.png";
import { Link } from 'react-router-dom';
import Food_Icon from "../images/food-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const DashboardToday = () => {
  const card_style = {
    border: "1px solid #ddd",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    margin: "auto",
    width: '60%',
    padding: "20px",
    marginBottom: '20px',
  };
  const notify = () => {
   
    toast('Show after 1sec', { delay: 1000 });
 
  };
  return (
    
    <div className="page">

        <h1 style={{margin: 65, color: 'black'}}>Dashboard</h1>
     

      <div className="bank-accounts" style={{ textAlign: "center" }}>
        <p style={{ fontSize: 24, textAlign: 'center', color: 'black'}}>Today</p>
        <img
          src={Food_Folder}
          style={{
            height: 250,
            width: 250,
            objectFit: "contain",
            margin: "auto",
            display: "block",
            marginBottom: '10px',
            
          }}
          alt="Food folder"
        />
        
        <div style={card_style}>
          <img src={Food_Icon} style={{ height: 50, width: 50, objectFit: 'contain', marginLeft: "5%" }} alt="Profile" />
          <div>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>12 January 2024</p>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>MC Donalds</p>
          </div>
          <Link to='/mcdonalds-receipt' style={{ textDecoration: 'none', color: 'black' }}>
            <FontAwesomeIcon icon={faFilePdf} style={{width: 30, height: 30,}} />
          </Link>
          
          <p style={{ color: 'black', fontSize: 16, marginRight: '5%' }}>$ 8.10</p>
        </div>
        <div style={card_style}>
          <img src={Food_Icon} style={{ height: 50, width: 50, objectFit: 'contain', marginLeft: "5%" }} alt="Profile" />
          <div>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>12 January 2024</p>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>Chipotle</p>
          </div>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <FontAwesomeIcon icon={faFilePdf} style={{width: 30, height: 30,}} />
          </Link>
          
          <p style={{ color: 'black', fontSize: 16, marginRight: '5%' }}>$ 90.00</p>
        </div>
        <div style={card_style}>
          <img src={Food_Icon} style={{ height: 50, width: 50, objectFit: 'contain', marginLeft: "5%" }} alt="Profile" />
          <div>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>12 January 2024</p>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>Coupa Cafe</p>
          </div>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <FontAwesomeIcon icon={faFilePdf} style={{width: 30, height: 30,}} />
          </Link>
          <p style={{ color: 'black', fontSize: 16, marginRight: '5%' }}>$ 12.98</p>
        </div>
        <div style={card_style}>
          <img src={Food_Icon} style={{ height: 50, width: 50, objectFit: 'contain', marginLeft: "5%" }} alt="Profile" />
          <div>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>12 January 2024</p>
            <p style={{ color: 'black', fontSize: 16, textAlign: 'left' }}>Panda Express</p>
          </div>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <FontAwesomeIcon icon={faFilePdf} style={{width: 30, height: 30,}} />
          </Link>
          <p style={{ color: 'black', fontSize: 16, marginRight: '5%' }}>$ 30.00</p>
        </div>
        
        
      </div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
};

export default DashboardToday;
