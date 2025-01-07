import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to read the URL params

// Dummy data for laundry services
const img = "https://media.gettyimages.com/id/1467054171/photo/front-view-of-laundry-building-exterior-with-laundry-machines-dryers-and-hanging-clothes.jpg?s=612x612&w=gi&k=20&c=L5hCbKJa345j-cOissm1X-SJn5V8FmNtxtU1knFCBQM=";

const dummyData = [
  {
    id: 1,
    name: "Laundry Service 1",
    address: "123 Main St, City",
    pricePerKg: "$5",
    photo: img,
    description: "Description for Laundry Service 1"
  },
  {
    id: 2,
    name: "Laundry Service 2",
    address: "456 Elm St, City",
    pricePerKg: "$7",
    photo: img,
    description: "Description for Laundry Service 2"
  },
  {
    id: 3,
    name: "Laundry Service 3",
    address: "789 Pine St, City",
    pricePerKg: "$6",
    photo: img,
    description: "Description for Laundry Service 3"
  },
  {
    id: 4,
    name: "Laundry Service 4",
    address: "101 Oak St, City",
    pricePerKg: "$8",
    photo: img,
    description: "Description for Laundry Service 4"
  },
];

const Laundry = () => {
  const { id } = useParams(); // Get the id from the URL
  const service = dummyData.find(service => service.id === parseInt(id)); // Find the service based on the id

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (

    

    <div>
      
      <h1>{service.name}</h1>
      <img src={service.photo} alt={service.name} className="service-photo" />
      <p><strong>Address:</strong> {service.address}</p>
      <p><strong>Price per Kg:</strong> {service.pricePerKg}</p>
      <p><strong>Description:</strong> {service.description}</p>
    </div>
  );
};

export default Laundry;
