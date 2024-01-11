// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import WelcomePage2 from './components/WelcomePage2';
import WelcomePage3 from './components/WelcomePage3';
import WelcomePage4 from './components/WelcomePage4';
import Login from './components/Login';

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
      </Routes>
    </Router>
  );
};

export default App;
