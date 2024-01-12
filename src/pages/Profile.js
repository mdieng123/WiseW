// Profile.js
import React from "react";
import { Link } from 'react-router-dom';
import Popa from "../images/popa_andrei.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faCircleQuestion,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// import SideBar from "./Sidebar";

const Profile = () => {
  const pfpImg_style = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  };
  
  const profileCard_style = {
    marginTop: '60px',
    padding: "20px",
    borderRadius: "5px",
    background: 'linear-gradient(to top, #fff, #317b8c)',
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    /* text-align: center; */
  };

  const pageList_style = {
    padding: "20px",
    backgroundColor: "#ffffff",
  };

  const page_style = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div>
    <div className="page">
      <div className="profile-card" style={profileCard_style}>
        <img src={Popa} style={pfpImg_style} alt="Profile" />
        <h1 style={{color: 'black', fontSize: 24 }}>Popa Andrei</h1>
        <h2 style={{color: 'black', fontSize: 18 }}>popa_andrei@yahoo.com</h2>
      </div>
      <div className="page-list" style={pageList_style}>
      <div className="settings-container" style={page_style}>
  <FontAwesomeIcon icon={faGear} />
  <p style={{ padding: 10, color: 'black', margin: 0 }}>Settings</p>
</div>
<div id="help-container" style={page_style}>
  <FontAwesomeIcon icon={faCircleQuestion} />
  <p style={{ padding: 10, color: 'black', margin: 0 }}>Help</p>
</div>
        <div id="signOut-container" style={page_style}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <Link to='/login' style={{ textDecoration: 'none', color: 'black', padding: 10, }}>Sign Out
            </Link>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Profile;
