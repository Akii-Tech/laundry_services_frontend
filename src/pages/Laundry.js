import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dummy data for laundry services
const img = "https://media.gettyimages.com/id/1467054171/photo/front-view-of-laundry-building-exterior-with-laundry-machines-dryers-and-hanging-clothes.jpg?s=612x612&w=gi&k=20&c=L5hCbKJa345j-cOissm1X-SJn5V8FmNtxtU1knFCBQM=";

const dummyData = [
  {
    id: 1,
    name: "Laundry Service 1",
    address: "123 Main St, City",
    pricePerKg: "$5",
    phone: "+1 (555) 123-4567",
    photo: img,
    description: "Description for Laundry Service 1"
  },
  {
    id: 2,
    name: "Laundry Service 2",
    address: "456 Elm St, City",
    pricePerKg: "$7",
    phone: "+1 (555) 987-6543",
    photo: img,
    description: "Description for Laundry Service 2"
  },
  {
    id: 3,
    name: "Laundry Service 3",
    address: "789 Pine St, City",
    pricePerKg: "$6",
    phone: "+1 (555) 321-7890",
    photo: img,
    description: "Description for Laundry Service 3"
  },
  {
    id: 4,
    name: "Laundry Service 4",
    address: "101 Oak St, City",
    pricePerKg: "$8",
    phone: "+1 (555) 654-3210",
    photo: img,
    description: "Description for Laundry Service 4"
  },
];

const Laundry = () => {
  const { id } = useParams(); // Get the id from the URL
  const service = dummyData.find(service => service.id === parseInt(id)); // Find the service based on the id

  if (!service) {
    return <div className="text-danger">Service not found!</div>;
  }

  const { name, address, pricePerKg, phone, photo, description } = service;

  return (


    <div>

      <Header /> {/* Render the Header component */}

      <main>
        <div className="container mt-4">
          <h1 className="mb-3">{name}</h1>
          <img
            src={photo}
            alt={name}
            className="img-fluid rounded mb-3"
            style={{ maxWidth: '25%' }}
          />
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Price per Kg:</strong> {pricePerKg}</p>
          <p><strong>Description:</strong> {description}</p>
          <p>
            <strong>Phone:</strong>
            <i className="bi bi-telephone-fill text-primary ms-2"></i>
            <a href={`tel:${phone}`} className="ms-2 text-decoration-none">{phone}</a>
          </p>
        </div>
      </main >

     <Footer/>

    </div>

  );
};

export default Laundry;
