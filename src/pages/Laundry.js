import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import laundryService from '../services/laundryService';


const img = "https://media.gettyimages.com/id/1467054171/photo/front-view-of-laundry-building-exterior-with-laundry-machines-dryers-and-hanging-clothes.jpg?s=612x612&w=gi&k=20&c=L5hCbKJa345j-cOissm1X-SJn5V8FmNtxtU1knFCBQM=";

const Laundry = () => {
  const { id } = useParams();
  const serviceId = parseInt(id, 10);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaundryService = async () => {
      try {
        const data = await laundryService.getLaundryById(serviceId);
        setService(data.data);
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLaundryService();
  }, [serviceId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="text-center mt-5 text-danger">
        <h2>Oops!</h2>
        <p>The laundry service you are looking for does not exist.</p>
      </div>
    );
  }

  const { laundryName, address, pricePerKg, contactNumber, photo, description } = service;

  return (
    <div>
      <Header />
      <main>
        <div className="container mt-4">
          <h1 className="mb-3">{laundryName}</h1>
          <img
            src={photo || img}
            alt={`Image of ${laundryName}`}
            className="img-fluid rounded mb-3"
            style={{ maxWidth: '25%' }}
          />
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Price per Kg:</strong> {pricePerKg}</p>
          <p><strong>Description:</strong> {description}</p>
          <p>
            <strong>Phone:</strong>
            <i className="bi bi-telephone-fill text-primary ms-2"></i>
            <a href={`tel:${contactNumber}`} className="ms-2 text-decoration-none">{contactNumber}</a>
          </p>
          <button className="btn btn-primary mt-3 d-flex mx-auto" style={{ width: 'fit-content' }}
            onClick={() => navigate(`/booking/${serviceId}`)}>
            Back to Services
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Laundry;
