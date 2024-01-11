// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login to Your Dashboard</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/profile">Sign up</Link>
      </p>
      <Link to="/Dashboard" className="dashboard-link">
        Go to Welcome
      </Link>
    </div>
  );
};

export default Login;
