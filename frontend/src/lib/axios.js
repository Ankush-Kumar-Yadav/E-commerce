import axios from "axios";
import.meta.env.VITE_BASE_URL

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? import.meta.env.VITE_BASE_URL : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
