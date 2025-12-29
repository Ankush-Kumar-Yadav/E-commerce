import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://e-commerce-backend-o7e0.onrender.com/api" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
