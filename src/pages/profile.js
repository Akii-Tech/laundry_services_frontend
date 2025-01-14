import React, { useState } from 'react';

import '../assets/Profile.css'

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginService from '../services/LoginService'


const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'orders' | 'none'

  const user = {
    name: 'John Doe',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    profileInfo: {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      location: 'New York, USA',
      bio: 'A passionate web developer with a love for React.',
    },
    orders: [
      { id: 1, product: 'Laptop', date: '2025-01-01' },
      { id: 2, product: 'Smartphone', date: '2024-12-15' },
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = async () => {
    const success = await LoginService.logout();
    if (success) {
      window.location.href = '/login'; // Redirect to login page after successful logout
    } else {
      console.error('Logout failed');
    }
  };

  return (

    <div>

      <Header/>

      <main>
        <div className="container">
          <div className="profile-card">
            <img src={user.photo} alt="Profile" className="profile-photo" />
            <h2 className="name">{user.name}</h2>
            <div className="buttons">
              <button onClick={() => handleTabChange('profile')}>Profile Info</button>
              <button onClick={() => handleTabChange('orders')}>Orders</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>

          <div className="details-card">
            {activeTab === 'profile' && (
              <div className="profile-info">
                <h3>Profile Info</h3>
                <p><strong>Email:</strong> {user.profileInfo.email}</p>
                <p><strong>Phone:</strong> {user.profileInfo.phone}</p>
                <p><strong>Location:</strong> {user.profileInfo.location}</p>
                <p><strong>Bio:</strong> {user.profileInfo.bio}</p>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="orders-info">
                <h3>Orders</h3>
                <ul>
                  {user.orders.map((order) => (
                    <li key={order.id}>
                      {order.product} - {order.date}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
