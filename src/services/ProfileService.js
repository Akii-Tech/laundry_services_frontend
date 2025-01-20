import axios from 'axios';


const BASE_URL ="http://localhost:8080";


const profileInfo = async () => {
    
    try {
        const response = await axios.post(`${BASE_URL}/login`, { userName, password });
    } catch (error) {
        
    }
}
