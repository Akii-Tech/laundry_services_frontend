import jwtDecode from 'jwt-decode';


export const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
            return true; // Token is expired
        }
        return false; // Token is valid
    } catch (error) {
        return true; // Invalid token
    }
};