import axios from "axios";

const API_BASE_URL = "http://localhost:8082/api/laundry"; // Adjust as needed


// Add a new laundry service
export const addLaundryService = async (laundryDetails, photo,token) => {
  try {
    const formData = new FormData();
    formData.append('laundryDetails', JSON.stringify(laundryDetails));
    formData.append('photo', photo);

    // Object.keys(laundryDetails).forEach((key) => {
    //   formData.append(key, laundryDetails[key]);
    // });
    // formData.append("photo", photo);

    const response = await axios.post(API_BASE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" ,
        Authorization: `Bearer ${token}`, // Include the JWT token
      },
     
    });
    return response.data;
  } catch (error) {
    
    console.log("Error adding laundry service:", error);
    throw error;
  }
};
