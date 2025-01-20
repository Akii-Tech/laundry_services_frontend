import React from 'react';
import { useLocation } from 'react-router-dom';
import { BsFillBasketFill, BsFillHandThumbsUpFill } from 'react-icons/bs';
import Header from '../components/Header';
import WashingMachineImage from '../assets/images/washing-machine.webp';
import clothesImage from '../assets/images/clothes.webp';
import detergentImage from '../assets/images/detergent-powder.webp';


const BookingConfirmation = () => {
    const location = useLocation();
    const { bookingDetails } = location.state || {};

    if (!bookingDetails) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="text-center">
                    <h1 className="text-danger">No Booking Found!</h1>
                    <p>It seems you accessed this page without making a booking.</p>
                    <a href="/" className="btn btn-primary mt-3">Go Back to Home</a>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header /> {/* Add Header component */}
    
            <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white text-center py-3">
                    <h2 className="card-title">Booking Confirmed!</h2>
                </div>
                <div className="card-body p-4">
                    <h4 className="text-success">Thank you for booking with us!</h4>
                    <p>Your booking has been successfully submitted. Here are your details:</p>
    
                    {/* Content Section */}
                    <div className="row align-items-center">
                        {/* Booking Details */}
                        <div className="col-md-6">
                            <ul className="list-group mb-3">
                                <li className="list-group-item">
                                    <strong>Booking ID:</strong> {bookingDetails.id}
                                </li>
                                <li className="list-group-item">
                                    <strong>Full Name:</strong> {bookingDetails.name}
                                </li>
                                <li className="list-group-item">
                                    <strong>Email:</strong> {bookingDetails.email}
                                </li>
                                <li className="list-group-item">
                                    <strong>Phone:</strong> {bookingDetails.phone}
                                </li>
                                <li className="list-group-item">
                                    <strong>Address:</strong> {bookingDetails.address}
                                </li>
                                <li className="list-group-item">
                                    <strong>Service Type:</strong> {bookingDetails.serviceType}
                                </li>
                                <li className="list-group-item">
                                    <strong>Weight:</strong> {bookingDetails.weight} Kg
                                </li>
                                <li className="list-group-item">
                                    <strong>Date:</strong> {bookingDetails.date}
                                </li>
                                <li className="list-group-item">
                                    <strong>Time:</strong> {bookingDetails.time}
                                </li>
                                <li className="list-group-item">
                                    <strong>Laundry Name:</strong> {bookingDetails.laundryDetails?.laundryName || "N/A"}
                                </li>
                            </ul>
                        </div>
    
                        {/* Images Section */}
                        <div className="col-md-6 text-center">
                            <div className="d-flex flex-column align-items-center gap-4">
                                <div className="animate-image">
                                    <img
                                        src={WashingMachineImage}
                                        alt="Washing Machine"
                                        className="img-fluid"
                                        style={{ maxWidth: "150px", borderRadius: "8px" }}
                                    />
                                    <p>Washing Machine</p>
                                </div>
                                <div className="animate-image">
                                    <img
                                       src={clothesImage}
                                        alt="Clothes"
                                        className="img-fluid"
                                        style={{ maxWidth: "150px", borderRadius: "8px" }}
                                    />
                                    <p>Clothes</p>
                                </div>
                                <div className="animate-image">
                                    <img
                                        src={detergentImage}
                                        alt="Detergent Powder"
                                        className="img-fluid"
                                        style={{ maxWidth: "150px", borderRadius: "8px" }}
                                    />
                                    <p>Detergent Powder</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="text-center mt-4">
                        <h5>Icons</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <div className="text-primary text-center">
                                <BsFillBasketFill size={50} />
                                <p>Cloth Basket</p>
                            </div>
                            <div className="text-success text-center">
                                <BsFillHandThumbsUpFill size={50} />
                                <p>Ironing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center py-3">
                    <a href="/laundry-list" className="btn btn-primary">Back to Home</a>
                </div>
            </div>
        </>
    );
    
    
};

export default BookingConfirmation;
