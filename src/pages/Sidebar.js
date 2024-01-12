// SideBar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../style/SideBar.css';

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="/dashboard" className="sideBar-link">
        Dashboard
      </Link>
      <Link to="/add" className="sideBar-link">
        Add
      </Link>
      <Link to="/profile" className="sideBar-link">
        Profile
      </Link>
    </div>
  );
};

export default SideBar;

