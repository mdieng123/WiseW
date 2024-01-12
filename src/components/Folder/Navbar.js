// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartBar, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation();
  const hideNavbarOnPages = ['/', '/welcome2', '/welcome3', '/welcome4', '/login', '/mcdonalds-receipt', '/signup']; // Add the paths of pages where you want to hide the navbar

  // Conditionally render the navbar based on the current route
  if (hideNavbarOnPages.includes(location.pathname)) {
    return null;
  }

  return (
    <nav style={navbarStyle}>
      <div style={titleStyle}>
        <Link to='dashboard' style={{ textDecoration: 'none', color: 'black' }}>
            Wise Wallet
        </Link>
      </div>
      <div style={navbarItemsContainerStyle}>
        <Link to="/profile" style={navbarItemStyle}>
          <FontAwesomeIcon icon={faUser} style={iconStyle} />
          <span style={textStyle}>Profile</span>
        </Link>
        <Link to="/dashboard" style={navbarItemStyle}>
          <FontAwesomeIcon icon={faChartBar} style={iconStyle} />
          <span style={textStyle}>Dashboard</span>
        </Link>
        <Link to="/accounts" style={navbarItemStyle}>
          <FontAwesomeIcon icon={faMoneyBillAlt} style={iconStyle} />
          <span style={textStyle}>Accounts</span>
        </Link>
      </div>
    </nav>
  );
};

const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'white',
  color: 'black',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '24px', // Adjust the font size of the title
  fontWeight: 'bold',
};

const navbarItemsContainerStyle = {
  display: 'flex',
};

const navbarItemStyle = {
  color: 'black',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px', // Adjust the spacing between items
};

const iconStyle = {
  fontSize: '20px', // Adjust the font size of the icons
  marginRight: '5px', // Adjust the spacing between icon and text
};

const textStyle = {
  fontSize: '16px', // Adjust the font size of the text
};

export default Navbar;
