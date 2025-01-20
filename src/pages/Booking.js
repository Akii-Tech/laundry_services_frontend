import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Import the Header component
import { createBooking } from '../services/BookingService'
import laundryService from '../services/laundryService';
import useAxios from '../config/AxiosConfig';


const Booking = () => {

    const axiosInstance = useAxios();

    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        weight: '',
        date: '',
        time: '',
        serviceType: '',
        laundryId: serviceId, // Include the service ID in the form data

    });

    const [laundryName, setLaundryName] = useState('');

   
    const fetchLaundryService = async () => {
        try {
            const response = await laundryService.getLaundryById(serviceId);
            setLaundryName(response.data.laundryName);
        } catch (error) {
            console.error('Error fetching service:', error);
        }
    };

    useEffect(() => {
        fetchLaundryService();
    }, [serviceId]);
    
    

    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const result = await createBooking(axiosInstance,formData);

            if (result.status === "SUCCESS") {

                alert(result.message);
                navigate('/booking/confirmation', { state: { bookingDetails: result.data } });
            } else {

                alert('Booking failed: ' + result.message);
            }
        } catch (error) {
            // Handle any unexpected errors during the API call
            alert('Booking failed. Please try again.\nError: ' + error.message);
        }
    };
    return (
        <>
            <Header /> {/* Add Header component */}
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

                <div className="col-lg-8 col-md-10">
                    <h2 className="text-center" style={{ color: "#007bff", fontWeight: "bold", fontSize: "4rem", margin:60 }}>
                        Welcome to <span style={{ textDecoration: "underline" }}>{laundryName}</span>
                    </h2>
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-primary text-white text-center py-3">
                            <h2 className="card-title">Book Your Laundry Service</h2>
                        </div>
                        <div className="card-body p-4">
                            <form className='booking-form' onSubmit={handleSubmit}>
                                {/* Full Name and Email */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">
                                            Full Name
                                        </label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                {/* Phone Number and Address */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">
                                            Phone Number
                                        </label>
                                        <input type="tel" id="phone" name="phone" className="form-control" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <textarea id="address" name="address" className="form-control" placeholder="Enter your address" value={formData.address} onChange={handleChange} rows="2" required ></textarea>
                                    </div>
                                </div>
                                {/* Laundry Weight  */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="weight" className="form-label"> Laundry Weight (Kg) </label>
                                        <input type="number" id="weight" name="weight" className="form-control" placeholder="Enter weight in kilograms" value={formData.weight} onChange={handleChange} min="1" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="serviceType" className="form-label"> Type of Service </label>
                                        <select id="serviceType" name="serviceType" className="form-select" value={formData.serviceType} onChange={handleChange} required >
                                            <option value="" disabled> Select a service type </option>
                                            <option value="Wash Only">Wash Only</option>
                                            <option value="Wash and Iron">Wash and Iron</option>
                                            <option value="Dry Cleaning">Dry Cleaning</option>
                                            {/* <option value="Pickup and Delivery">Pickup and Delivery</option> */}
                                        </select>
                                    </div>

                                </div>

                                {/* Preferred Time and Booking Date*/}
                                <div className="row mb-3">

                                    <div className="col-md-6">
                                        <label htmlFor="date" className="form-label"> Booking Date</label>
                                        <input type="date" id="date" name="date" className="form-control" value={formData.date} onChange={handleChange} min={today} required />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="time" className="form-label">
                                            Preferred Time
                                        </label>
                                        <input type="time" id="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 mt-3"> Confirm Booking </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <small className="text-muted">
                                Thank you for choosing our service. We look forward to serving you!
                            </small>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Booking;
