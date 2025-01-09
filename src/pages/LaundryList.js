import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../assets/RegistrationForm.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dummy data for laundry services
const img = "https://media.gettyimages.com/id/1467054171/photo/front-view-of-laundry-building-exterior-with-laundry-machines-dryers-and-hanging-clothes.jpg?s=612x612&w=gi&k=20&c=L5hCbKJa345j-cOissm1X-SJn5V8FmNtxtU1knFCBQM="; // Placeholder image

const dummyData = [
  {
    id: 1,
    name: "Laundry Service 1",
    address: "123 Main St, City",
    pricePerKg: "$5",
    photo: img
  },
  {
    id: 2,
    name: "Laundry Service 2",
    address: "456 Elm St, City",
    pricePerKg: "$7",
    photo: img
  },
  {
    id: 3,
    name: "Laundry Service 3",
    address: "789 Pine St, City",
    pricePerKg: "$6",
    photo: img
  },
  {
    id: 4,
    name: "Laundry Service 4",
    address: "101 Oak St, City",
    pricePerKg: "$8",
    photo: img
  },
];

const LaundryList = () => {
  const [laundryServices] = useState(dummyData);
  

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <div className="laundry-list">
          <h1>Laundry Services</h1>

          {/* Loop through the laundry services and create a card for each */}
          <div className="service-cards">
            {laundryServices.map((service) => (
              <div className="service-card" key={service.id}>
                <Link to={`/laundry/${service.id}`} className="service-link"> {/* Make it clickable */}
                  <img
                    src={service.photo}
                    alt={service.name}
                    className="service-photo"
                  />
                  <div className="service-info">
                    <h2>{service.name}</h2>
                    <p><strong>Address:</strong> {service.address}</p>
                    <p><strong>Price per Kg:</strong> {service.pricePerKg}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default LaundryList;
