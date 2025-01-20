import axios from 'axios';


const BASE_URL ="http://localhost:8080/api/auth";



const login = async (userName, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { userName, password });
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data?.message || 'Invalid credentials or something went wrong.';
  }
};


const logout = async () => {
  try {
    const response = await axios.post('http://localhost:8080/logout', {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Send token in the Authorization header
      }
    });

    if (response.status === 200) {
      localStorage.removeItem('token'); // Remove the token from localStorage
      return true; 
    } else {
      console.error('Logout failed:', response.statusText);
      return false; // Logout failed
    }
  } catch (error) {
    console.error('Error during logout:', error);
    return false; // Logout failed
  }
};


const register = async (userDetails) => {
  try {
    const response = await axios.post(`${BASE_URL}/registration`, userDetails);

    if (response.status === 200) { // Assuming 200 is the success status for registration
     // alert(response.data)
      console.log('Registration successful:', response.data);
      return response.data; // Return response data if needed
    } else {
      console.error('Registration failed:', response.statusText);
      return null; // Registration failed
    }
  } catch (error) {
    alert(error.response.data.message)
    console.error('Error during registration:', error);
    return null; // Registration failed
  }
};


const LoginService = {
    logout,
    register,
    login
  };

export default LoginService;
