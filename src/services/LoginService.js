import axios from 'axios';

const logout = async () => {
  try {
    const response = await axios.post('http://localhost:8082/logout', {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Send token in the Authorization header
      }
    });

    if (response.status === 200) {
      localStorage.removeItem('token'); // Remove the token from localStorage
      return true; // Logout successful
    } else {
      console.error('Logout failed:', response.statusText);
      return false; // Logout failed
    }
  } catch (error) {
    console.error('Error during logout:', error);
    return false; // Logout failed
  }
};

const LoginService = {
    logout
  };

export default LoginService;
