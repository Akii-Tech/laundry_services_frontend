// import axios from 'axios';
// import useAxios from '../config/AxiosConfig';

const BASE_URL = "/api/bookings"; // Replace with your backend API URL

// Function to create a new booking
export const createBooking = async (axiosInstance,bookingData) => {


    //const token = localStorage.getItem("token"); 
  try {
    const response = await axiosInstance.post(BASE_URL, bookingData, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Failed to create booking. Please try again."
    );
  }
};