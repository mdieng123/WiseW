// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';
import Google from '../images/google-icon.png';
import Facebook from '../images/facebook-icon.png';

const SignUp = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p style={{ color: 'black', fontSize: 32 }}>Sign up</p>
      </div>
      <div className="login-container" style={{ textAlign: 'left' }}>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <button type="submit" style={{ backgroundColor: '#006492' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
              Sign up
            </Link>
          </button>
        </form>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'black' }}>or sign up using</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Google} style={{ width: 35, height: 35, padding: 5 }} alt="Google" />
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Facebook} style={{ width: 30, height: 30, padding: 5 }} alt="Facebook" />
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: 20 }}>
          <p style={{ color: 'black' }}>Already have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
