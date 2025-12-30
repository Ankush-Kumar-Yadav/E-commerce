import axios from "axios"; 
const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL, // use the environment variable for the base URL
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
