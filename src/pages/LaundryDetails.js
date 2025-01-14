import React, { useState } from 'react';
import '../assets/LaundryDetails.css';
import Header from '../components/Header';
import { addLaundryService } from '../services/laundryService';

const LaundryDetails = () => {
  // State for form inputs
  const [newService, setNewService] = useState({
    name: "",
    address: "",
    contact: "",
    pricePerKg: "",
    description: "",
  });

  const [photo, setPhoto] = useState(null); // Separate state for the photo

  const [isSubmitting, setIsSubmitting] = useState(false); // State for button disabling

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
    setPhoto(file); // Set the photo separately
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = localStorage.getItem("token"); // Retrieve the token from storage

    // Only proceed if all fields are filled
    if (
      newService.name &&
      newService.address &&
      newService.contact &&
      newService.pricePerKg &&
      newService.description &&
      photo
    ) {
      try {
        const addedService = await addLaundryService(newService,photo,token);
        console.log("Service added successfully:", addedService);

        // Clear the form
        setNewService({
          name: "",
          address: "",
          contact: "",
          pricePerKg: "",
          description: "",
        });
        setPhoto(null); // Clear the photo state
        
        alert("Laundry service added successfully!");
      } catch (error) {

        if (error.response && error.response.status === 409) {
          console.log(error.response.data)
          alert(error.response.data.message)
        }else{
          alert("Failed to add laundry service. Please try again.");
        }
        //console.error("Error adding laundry service:", error);
      }
    } else {
      alert("Please fill out all fields!");
    }

    setIsSubmitting(false);
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
                <input type="text" name="name" value={newService.name} onChange={handleInputChange} placeholder="Enter service name" required />
              </div>

              <div className="form-group">
                <label>Address:</label>
                <input type="text" name="address" value={newService.address} onChange={handleInputChange} placeholder="Enter service address" required />
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
                <input type="file" accept="image/*" onChange={handleFileChange} required />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Add Service"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LaundryDetails;
