// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import WelcomePage2 from './pages/WelcomePage2';
import WelcomePage3 from './pages/WelcomePage3';
import WelcomePage4 from './pages/WelcomePage4';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Accounts from './pages/Accounts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<WelcomePage />} />
        <Route path="/welcome2"  element={<WelcomePage2 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
        <Route path="/welcome4" element={<WelcomePage4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </Router>
  );
};

export default App;
