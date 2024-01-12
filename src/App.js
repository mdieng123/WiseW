// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import WelcomePage2 from './pages/WelcomePage2';
import WelcomePage3 from './pages/WelcomePage3';
import WelcomePage4 from './pages/WelcomePage4';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Accounts from './pages/Accounts';
import Notifications from './pages/Notifications';
import TransactionCard from './pages/TransactionCard';
import DashboardToday from './pages/DashboardToday';
import Receipt from './pages/Receipt';
import Navbar from './components/Folder/Navbar';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<WelcomePage />} />
        <Route path="/welcome2"  element={<WelcomePage2 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
        <Route path="/welcome4" element={<WelcomePage4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-today" element={<DashboardToday />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/noti" element={<Notifications />} />
        <Route path="/card" element={<TransactionCard />} />
        <Route path="/mcdonalds-receipt" element={<Receipt />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
