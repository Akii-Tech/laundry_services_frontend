import axios from "axios";


const API_BASE_URL = "http://localhost:8080/api/laundry"; // Adjust as needed


// Add a new laundry service
export const addLaundryService = async (laundryDetails, photo,token) => {

   // const axiosInstance = useAxios(); // Get the custom Axios instance

  try {
    const formData = new FormData();
    formData.append('laundryDetails', JSON.stringify(laundryDetails));
    formData.append('photo', photo);

    // Object.keys(laundryDetails).forEach((key) => {
    //   formData.append(key, laundryDetails[key]);
    // });
    // formData.append("photo", photo);

    const response = await axios.post(API_BASE_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`, // Include the JWT token
      },
     
    });
    return response.data;
  } catch (error) {
    
    console.log("Error adding laundry service:", error);
    throw error;
  }
};
const getAllLaundry = async () => {
  try {
    const token = localStorage.getItem("token"); // Fetch the token dynamically
    const response = await axios.get(API_BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Failed to fetch laundry services: ${response.status}`);
      throw new Error(`Failed to fetch laundry services: ${response.status}`);
    }
  } catch (error) {
    console.error("Error while getting laundry services:", error.response ? error.response.data : error.message);
    throw error;
  }
};


const getLaundryById = async (id) => {
  const token = localStorage.getItem('token'); // Fetch the token dynamically
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching laundry service with ID ${id}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

const laundryService = {
  getAllLaundry,
  getLaundryById
}

export default laundryService;