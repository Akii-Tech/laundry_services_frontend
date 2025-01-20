import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAxios = () => {
    const navigate = useNavigate();

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
    });

    // Add request interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Add response interceptor
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                alert('Session expired. Redirecting to login.');
                localStorage.removeItem('token');
                navigate('/login'); // Redirect to login page
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxios;
