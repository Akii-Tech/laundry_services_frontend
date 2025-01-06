import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import RegistrationForm from './pages/RegistrationPage';
import LaundryDetails from './pages/LaundryDetails';
import LaundryList from './pages/LaundryList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path='/registration-form' element={<RegistrationForm/>}/>
        <Route path='/laundry-details-form' element={<LaundryDetails/>}/>
        <Route path='/laundry-list' element={<LaundryList/>}/>
      </Routes>
    </Router>
  );
};

export default App;
