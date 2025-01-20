import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import RegistrationForm from './pages/RegistrationPage';
import LaundryDetails from './pages/LaundryDetails';
import LaundryList from './pages/LaundryList';
import Profile from './pages/profile';
import Laundry from './pages/Laundry'
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/laundry-details-form' element={<LaundryDetails/>}/>
        <Route path='/laundry-list' element={<LaundryList/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/laundry/:id" element={< Laundry/>} />
        <Route path="/booking/:serviceId" element={<Booking />} />
        <Route path="/booking/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
