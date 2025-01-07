// src/LaundryDetails.js

import React, { useState } from 'react';

import '../assets/LaundryDetails.css'
import Header from '../components/Header';

// LaundryDetails Component
const LaundryDetails = () => {
  // State for storing laundry services
  const [laundryServices, setLaundryServices] = useState([]);

  // State for form inputs
  const [newService, setNewService] = useState({
    name: "",
    address: "",
    contact: "",
    pricePerKg: "",
    description: "",
    photo: null,
  });

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  // Handle photo upload (input type file)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewService({
      ...newService,
      photo: file,
    });
  };

  // Handle form submission to add a new service
  const handleSubmit = (e) => {
    e.preventDefault();

    // Only add if all fields are filled
    if (
      newService.name &&
      newService.address &&
      newService.contact &&
      newService.pricePerKg &&
      newService.description &&
      newService.photo
    ) {
      setLaundryServices([
        ...laundryServices,
        { ...newService, id: laundryServices.length + 1 },
      ]);

      // Clear the form
      setNewService({
        name: "",
        address: "",
        contact: "",
        pricePerKg: "",
        description: "",
        photo: null,
      });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (

    <div>

    <Header /> {/* Render the Header component */}

  <main>

    <div className="laundry-details">
      <h1>Laundry Service Details</h1>

      {/* Add Laundry Service Form */}
      <div className="add-service-form">
        <h2>Add New Laundry Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
              placeholder="Enter service name"
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={newService.address}
              onChange={handleInputChange}
              placeholder="Enter service address"
              required
            />
          </div>

          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={newService.contact}
              onChange={handleInputChange}
              placeholder="Enter contact details"
              required
            />
          </div>

          <div className="form-group">
            <label>Price per Kg:</label>
            <input
              type="text"
              name="pricePerKg"
              value={newService.pricePerKg}
              onChange={handleInputChange}
              placeholder="Enter price per kg"
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              placeholder="Enter service description"
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit">Add Service</button>
        </form>
      </div>

      {/* Display Laundry Services List */}
      <div className="service-list">
        {laundryServices.map((service) => (
          <div className="service-card" key={service.id}>
            <h2>{service.name}</h2>
            <p><strong>Address:</strong> {service.address}</p>
            <p><strong>Contact:</strong> {service.contact}</p>
            <p><strong>Price per Kg:</strong> {service.pricePerKg}</p>
            <p><strong>Description:</strong> {service.description}</p>

            {/* Display the uploaded image */}
            {service.photo && (
              <img
                src={URL.createObjectURL(service.photo)}
                alt={service.name}
                className="service-photo"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </main>
  </div>
  );
};

export default LaundryDetails;
