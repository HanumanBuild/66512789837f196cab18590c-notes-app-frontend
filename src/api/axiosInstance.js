import axios from 'axios';

// Ensure that the base URL is correctly set to the backend URL using the environment variable `REACT_APP_NOTES_APP_BACKEND_URL`.
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_NOTES_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;