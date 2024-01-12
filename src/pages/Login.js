// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';
import Google from "../images/google-icon.png";
import Facebook from "../images/facebook-icon.png";




const Login = () => {

  
  const signInContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006492',
    padding: '15px',
    width: 'auto',
    backgroundColor: 'white',

  };
  
  const signInButtonStyle = {
    backgroundColor: '#006492',
    color: 'white',
    border: '1px solid #006492',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  };
  
  
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p style={{ color: 'black', fontSize: 32 }}>Sign in</p>
      </div>
      <div className="login-container" style={{ textAlign: 'left' }}>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <div style={signInContainerStyle}>
  <Link to='/dashboard' style={{ textDecoration: 'none' }}>
    <button type="submit" style={signInButtonStyle}>
      Sign In
    </button>
  </Link>
  
</div>
        </form>

        <div style={{ textAlign: 'center' }}>
        <p style={{color: 'black'}}>or sign up using</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Google} style={{ width: 35, height: 35, padding: 5 }} alt="Google" />
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Facebook} style={{ width: 30, height: 30, padding: 5 }} alt="Facebook" />
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: 20}}>
          <p style={{color: 'black'}}>
            Don't have an account yet?
          </p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
