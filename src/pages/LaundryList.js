import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/RegistrationForm.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import laundryService from '../services/laundryService';

const LaundryList = () => {
  const [laundryServices, setLaundryServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultImage = "https://media.gettyimages.com/id/1467054171/photo/front-view-of-laundry-building-exterior-with-laundry-machines-dryers-and-hanging-clothes.jpg?s=612x612&w=gi&k=20&c=L5hCbKJa345j-cOissm1X-SJn5V8FmNtxtU1knFCBQM=";

  useEffect(() => {
    const fetchLaundryServices = async () => {
      try {
        const response = await laundryService.getAllLaundry();
        setLaundryServices(response); // Ensure response is in the expected format
      } catch (err) {
        setError("Failed to load laundry services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLaundryServices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Header />
      <main>
        <div className="laundry-list">
          <h1>Laundry Services</h1>

          <div className="service-cards">
            {laundryServices.map((service) => (
              <div className="service-card" key={service.id}>
                <Link to={`/laundry/${service.id}`} className="service-link">
                  <img
                    src={service.photo || defaultImage}
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
      <Footer />
    </div>
  );
};

export default LaundryList;
